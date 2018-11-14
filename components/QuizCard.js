import React from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import {gold, green, red, pink, grey} from '../utils/colors';

class QuizCard extends React.Component {
    state={
        showAnswer: false,
    }
    
    handleShowAnswer = () => {
        this.setState({
            showAnswer: true,
        });
    }

    handleSubmit = (handleAnswer) => {
        this.setState({showAnswer: false});
        handleAnswer();
    }

    render(){
        const {showAnswer} = this.state;
        const {deckName, card, currentCardNum, sumOfCards, handleCorrect, handleIncorrect} = this.props;
        return(
            <View style={styles.container}>
                <Text style={styles.title}>{deckName}</Text>
                <Text style={styles.cardCount}>{`${currentCardNum}/${sumOfCards}`}</Text>
                <Text style={styles.question}>{card.question}</Text>

                {showAnswer
                    ?<Text style={styles.answer}>{card.answer}</Text>

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
                    onPress={() => this.handleSubmit(handleCorrect)}>
                    <Text style={styles.btnText}>
                        Correct Answer
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.btn, {backgroundColor: red}]}
                    onPress={() => this.handleSubmit(handleIncorrect)}>
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
