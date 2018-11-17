/*
Notifications were covered in UdacityFitness video, original code by Tyler Mcginnis is located at:
https://github.com/udacity/reactnd-UdaciFitness-complete/blob/setLocalNotification/utils/helpers.js
this is slightly updated version.
*/

import {AsyncStorage} from 'react-native';
import {Notifications, Permissions} from 'expo';

const FLASHCARDS_NOTIFICATION_KEY = 'MobileFlashCards:notifications';


export function createNotification () {
    return {
        title: 'Did you study your Mobile Flashcards today?',
        body: "⚠️ Don't forget to take a quiz today. ⚠️" ,
        ios: {
            sound: true,
        },
        android: {
            sound: true,
            priority: 'high',
            sticky: false,
            vibrate: true,
        }
    }
}
  

export const setLocalNotification = () => {
    AsyncStorage.getItem(FLASHCARDS_NOTIFICATION_KEY)
        .then(JSON.parse)
        .then((data)=>{
            if (data === null) {
                Permissions.askAsync(Permissions.NOTIFICATIONS)
                    .then(({status})=> {
                        if (status === 'granted') {
                            Notifications.cancelAllScheduledNotificationsAsync();

                            let tomorrow = new Date();
                            tomorrow.setDate(tomorrow.getTime() +1 );
                            tomorrow.setHours(9);
                            tomorrow.setMinutes(0); 
                            
                            Notifications.scheduleLocalNotificationAsync(
                                createNotification(),
                                {
                                    time: tomorrow,
                                    repeat: 'day',
                                }
                            )
                            AsyncStorage.setItem(FLASHCARDS_NOTIFICATION_KEY, JSON.stringify(true));
                        }
                    })
            }
        })
}

export const clearLocalNotification = () => {
    return AsyncStorage.removeItem(FLASHCARDS_NOTIFICATION_KEY)
        .then(Notifications.cancelAllScheduledNotificationsAsync())
}

