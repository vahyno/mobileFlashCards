import React from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import {grey, green, lightBlue, lightPurple} from '../utils/colors';

class QuizResults extends React.Component {
    //todo: hookup restart quiz, back to deck
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.title}>Quiz Complete</Text>
                <Text style={styles.score}>Score 50%</Text>
                <TouchableOpacity
                    style={[styles.btn, {backgroundColor: lightBlue}]}
                    onPress={()=> alert('Restart Quiz')}>
                    <Text style={styles.btnText}>
                        Restart Quiz
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.btn, {backgroundColor: lightPurple}]}
                    onPress={()=> alert('Back to Deck')}>
                    <Text style={styles.btnText}>
                        Back to Deck
                    </Text>
                </TouchableOpacity>
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
        fontSize: 25,
        padding: 20,
    },
    score: {        
        fontWeight: '800',
        fontSize: 25,
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
