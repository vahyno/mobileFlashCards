import {ADD_NEW_DECK, ADD_NEW_CARD} from '../actions';

export default function decksAndCards (state = {}, action) {
    switch(action.type) {
        case ADD_NEW_DECK:
            return {
                ...state,
                [action.deckName]: action.deckName
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