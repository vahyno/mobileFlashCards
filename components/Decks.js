import React from 'react';
import {Text, View, FlatList, StyleSheet} from 'react-native';
import Deck from './Deck';
import {blue} from '../utils/colors';

class Decks extends React.Component {

    componentDidMount (){
        //todo get me all the decks
    }

    renderItem = ({item}) => {
        return (
            <Deck
                deckName={item.deckName}
                cardCount={item.cards.length}
            />
        )
    }

    render(){
        //todo: implement redux
        //const {decks} = this.props;

        //dummy data:
        const decks = [
            {
              deckName: 'deckName 1',
              cards: [1],
            },
            {
              deckName: 'deckName 2',
              cards: [1,2],
            },
            {
              deckName: 'deckName 3',
              cards: [1,2,3],
            },
            {
                deckName: 'deckName 4',
                cards: [1,2,3,4],
              },
              {
                deckName: 'deckName 5',
                cards: [1,2,3,4,5],
              },
              {
                deckName: 'deckName 6',
                cards: [],
              }
          ];

        return(
            <View style={styles.container}>
                <FlatList
                    data={decks}
                    renderItem={this.renderItem}
                    keyExtractor={item => item.deckName}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1, 
        padding: 20,
        paddingBottom: 0,
        backgroundColor: blue,
    }
});

export default Decks;
