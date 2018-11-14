import React from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import {gold, green, red, pink, grey} from '../utils/colors';

class QuizCard extends React.Component {
    state={
        showAnswer: false
    }
    
    handleShowAnswer = () => {
        this.setState({
            showAnswer: true
        });
    }

    render(){
        //todo get Deckname, cardCount, Q & A from props
        const {showAnswer} = this.state;
        return(
            <View style={styles.container}>
                <Text style={styles.title}>Deck Name</Text>
                <Text style={styles.cardCount}>1/10</Text>
                <Text style={styles.question}>Question</Text>

                {showAnswer
                    ?<Text style={styles.answer}>This it the answer</Text>

                    :<TouchableOpacity
                        style={[styles.btn, {backgroundColor: gold}]}
                        onPress={this.handleShowAnswer}>
                        <Text style={styles.btnText}>
                            Show Answer
                        </Text>
                    </TouchableOpacity>
                }

                <TouchableOpacity
                    style={[styles.btn, {backgroundColor: green}]}
                    onPress={()=> alert('Correct Answer')}>
                    <Text style={styles.btnText}>
                        Correct Answer
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.btn, {backgroundColor: red}]}
                    onPress={()=> alert('Wrong Answer')}>
                    <Text style={styles.btnText}>
                        Wrong Answer
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
        backgroundColor: pink,
    },
    title: {
        fontWeight: '500',
        fontSize: 15,
        paddingBottom: 5,
    },
    answer: {        
        fontWeight: '400',
        fontSize: 20,
        padding: 10,
        marginBottom: 10,
    },
    cardCount: {
        fontWeight: '600',
        fontSize: 15,
        color: grey,
        marginBottom: 20,
    },
    question: {        
        fontWeight: '600',
        fontSize: 20,
        padding: 10,
        marginBottom: 30,
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

export default QuizCard;
