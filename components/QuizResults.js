import React from 'react';
import {Text, View, TouchableOpacity, StyleSheet, Animated} from 'react-native';
import {setLocalNotification, clearLocalNotification} from '../utils/notifications';
import {grey, green, lightBlue, lightPurple} from '../utils/colors';

class QuizResults extends React.Component {
    state={
        opacity: new Animated.Value(0),
        width: new Animated.Value(0),
        height: new Animated.Value(0),
    }
    componentDidMount(){
        const {opacity, width,height} = this.state;
        Animated.timing(opacity,{toValue: 1, duration: 1500}).start();
        Animated.spring(width,{toValue: 300, speed: 1}).start();
        Animated.spring(height,{toValue: 300, speed: 1}).start();
        clearLocalNotification().then(setLocalNotification);

    }
    render(){
        const {opacity, width, height} = this.state;
        const {resetQuiz, correctCount, cardCount, navigation, deckName} = this.props;
        const score = (correctCount/cardCount*100).toFixed(2);
        return(
            <View style={styles.container}>
                <Animated.View style={{alignItems: 'center', opacity, width, height}}>
                    <Text style={styles.title}>Quiz Complete</Text>
                    <Text style={styles.score}>{`Score ${score}%`}</Text>
                    <TouchableOpacity
                        style={[styles.btn, {backgroundColor: lightBlue}]}
                        onPress={resetQuiz}>
                        <Text style={styles.btnText}>
                            Restart Quiz
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.btn, {backgroundColor: lightPurple}]}
                        onPress={()=> navigation.navigate('DeckDetail', {deckName})}>
                        <Text style={styles.btnText}>
                            Back to Deck
                        </Text>
                    </TouchableOpacity>
                </Animated.View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: green,
    },
    title: {
        fontWeight: '500',
        fontSize: 30,
        padding: 20,
    },
    score: {        
        fontWeight: '800',
        fontSize: 20,
        paddingBottom: 30,
},
btn: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    margin: 10,
    borderColor: grey,
    borderWidth: 1,
    borderRadius: 10,
},
btnText: {
    fontSize: 20,
}
});

export default QuizResults;
