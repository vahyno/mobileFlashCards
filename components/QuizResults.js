import React from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import {grey, green, lightBlue, lightPurple} from '../utils/colors';

class QuizResults extends React.Component {
    
    componentDidMount(){
        //implement notificatins => reset the cycle
    }
    render(){
        const {resetQuiz, correctCount, cardCount, navigation, deckName} = this.props;
        const score = (correctCount/cardCount*100).toFixed(2);
        return(
            <View style={styles.container}>
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
