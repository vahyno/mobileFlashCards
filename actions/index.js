export const ADD_NEW_DECK = 'ADD_NEW_DECK';
export const ADD_NEW_CARD = 'ADD_NEW_CARD';

import {
    _retrieveDecks, 
    _addNewDeck, 
    _addNewCardToDeck} from '../utils/api';


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
                    console.log('results: ',results)
                    console.log("keys:", Object.keys(JSON.parse(results)))
                }
            });
    }
}

export function handleAddNewDeck(deckName) {
    return (dispatch) => {
        return _addNewDeck(deckName)
            .then(() => {
                dispatch(addNewDeck(deckName))
            })
    }
}