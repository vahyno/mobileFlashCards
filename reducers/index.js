import {
    ADD_NEW_DECK,
    RECEIVE_DECKS, 
    ADD_NEW_CARD,
} from '../actions';

export default function decksAndCards (state = {}, action) {
     const {deckName, cards} = action;
    switch(action.type) {
        case ADD_NEW_DECK:
            return {
                ...state,
                [action.deckName]: {deckName, cards}
            }
        case RECEIVE_DECKS:
            return {
                ...state,
                ...action.decks
            }
        case ADD_NEW_CARD:
            return {
                ...state,
                [action.deckName]: {
                    ...state[action.deckName],
                    cards: [
                        ...state[action.deckName].cards,
                        action.card
                    ]
                }
            }
        default:
            return state
    }
}