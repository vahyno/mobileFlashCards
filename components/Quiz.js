import React from 'react';
import QuizCard from './QuizCard';
import QuizResults from './QuizResults';


class Quiz extends React.Component {
    state={
    //card index tracking
        cardIndex: 0,
    //correct Answer count   
        correctCount: 0,
    }
    //todo:
    //handle submit correct vs incorrect answers
    //handle resetQuiz

    render(){
        const {cardIndex, correctCount} = this.state;
    //passing props to QuizCard / QuizResult
    // need to get total amount deckName, it's cards(Q&A) and cardCount
        const cardCount = 0;
    //if logic for rendering QuizCard / QuizResult
        if (cardIndex < cardCount) {
            return(
                <QuizCard/>
            );
        } 
        return(
            <QuizResults/>
        );
    }
}

export default Quiz;
