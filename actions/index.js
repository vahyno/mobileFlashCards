export const ADD_NEW_DECK = 'ADD_NEW_DECK';
export const ADD_NEW_CARD = 'ADD_NEW_CARD';
export const RECEIVE_DECKS = 'RECEIVE_DECKS';

import {
    _retrieveDecks, 
    _addNewDeck, 
    _addNewCardToDeck} from '../utils/api';

export function receiveDecks(decks) {
    return {
        type: RECEIVE_DECKS,
        decks,
    }
}    


export function addNewDeck(deckName) {
    return {
        type: ADD_NEW_DECK,
        deckName,
        cards: []
    }
}

export function addNewCard(deckName, card) {
    return {
        type: ADD_NEW_CARD,
        deckName,
        card
    }
}

export function handleIntialData () {
    return (dispatch) => {
        return _retrieveDecks()
            .then((results)=>{
                if(results) {
                    // console.log('JSON.parse - results: ', JSON.parse(results));
                    // console.log("keys:", Object.keys(JSON.parse(results)));
                    return JSON.parse(results)
                }
            }).then(data => {
                if (data) {
                    return dispatch(receiveDecks(data));
                }
            })
    }
}

export function handleAddNewDeck(deckName) {
    return (dispatch) => {
        return _addNewDeck(deckName)
            .then(() => {
                dispatch(addNewDeck(deckName));
            })
    }
}

export function handleAddNewCardToDeck(deckName, card) {
    return (dispatch) => {
        return _addNewCardToDeck(deckName, card)
            .then(() => {
                dispatch(addNewCard(deckName, card));
            })
    }
}