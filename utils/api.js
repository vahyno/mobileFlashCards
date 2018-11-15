import {AsyncStorage} from 'react-native';

const FLASHCARDS_DECKS_STORAGE_KEY = 'MobileFlashCards:Decks';

//deckname - string
//cards - array

//fetch all Decks
export const _retrieveDecks = () => {
    return AsyncStorage.getItem(FLASHCARDS_DECKS_STORAGE_KEY);
}

//submit entry -> a new deck
export const _addNewDeck = (deckName) => {
    return AsyncStorage.mergeItem(
        FLASHCARDS_DECKS_STORAGE_KEY,
        JSON.stringify({
            [deckName]: {
                deckName,
                cards: []
            } 
        })
    );
}
  
//submit entry -> a new card to a specific deck
export const _addNewCardToDeck = (deckName, card) => {
    return AsyncStorage.getItem(FLASHCARDS_DECKS_STORAGE_KEY)
        .then((results)=> {
            const decks = JSON.parse(results);
            const {cards} = decks[deckName];
            if (!cards) {
                cards = [];
            }
            cards.push(card);
            
            return AsyncStorage.mergeItem(
                FLASHCARDS_DECKS_STORAGE_KEY,
                JSON.stringify({
                    [deckName]: {cards} 
                })
            ); 
        });
}