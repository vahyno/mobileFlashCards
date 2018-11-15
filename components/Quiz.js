import React from 'react';
import {connect} from 'react-redux';
import QuizCard from './QuizCard';
import QuizResults from './QuizResults';

class Quiz extends React.Component {
    state={
        cardIndex: 0,
        correctCount: 0,
    }
    handleCorrect = () => {
        const {cardIndex, correctCount} = this.state;
        this.setState({
            cardIndex: cardIndex + 1,
            correctCount: correctCount + 1,
        });
    }

    handleIncorrect = () => {
        const {cardIndex} = this.state;
        this.setState({
            cardIndex: cardIndex + 1,
        });
    }

    resetQuiz = () => {
        this.setState({
            cardIndex: 0,
            correctCount: 0,
        });
    }

    render(){
        const {cardIndex, correctCount} = this.state;
        const {deckName, cards, navigation} = this.props;
        const cardCount = this.props.cards.length;

        if (cardIndex < cardCount) {
            return(
                <QuizCard
                    deckName={deckName}
                    card={cards[cardIndex]}
                    currentCardNum={cardIndex+1}
                    sumOfCards={cardCount}
                    handleCorrect={this.handleCorrect}
                    handleIncorrect={this.handleIncorrect}/>
            );
        } 
        return(
            <QuizResults
                cardCount={cardCount}
                correctCount={correctCount}
                resetQuiz={this.resetQuiz}
                navigation={navigation}
                deckName={deckName}/>
        );
    }
}

function mapStateToProps(state, {navigation}) {
    const {deckName} = navigation.state.params;
    return {
        deckName,
        cards: state[deckName].cards
    }
}

export default connect(mapStateToProps)(Quiz);
