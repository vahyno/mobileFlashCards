export const ADD_NEW_DECK = 'ADD_NEW_DECK';
export const ADD_NEW_CARD = 'ADD_NEW_CARD';

export function addNewDeck(deckName, cards) {
    return {
        type: ADD_NEW_DECK,
        deckName,
        cards
    }
}

export function addNewCard(deckName, card) {
    return {
        type: ADD_NEW_CARD,
        deckName,
        card
    }
}