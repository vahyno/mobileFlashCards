import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import {pink, black} from '../utils/colors';

class Deck extends React.Component {
    render(){
        const {navigation, deckName, cardCount} = this.props;
        return(
            <TouchableOpacity
                style={styles.deck}
                onPress={() => navigation.navigate('DeckDetail', {deckName})}>
                <Text style={styles.title}>
                    {deckName}
                </Text>
                <Text style={styles.cardCount}>
                    { cardCount !== 1 
                    ? `${cardCount} Cards` 
                    : '1 Card'
                    }
                </Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    deck: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: pink,
        height: 100,
        marginBottom: 20,
        marginLeft: 30,
        marginRight: 30,
        borderColor: black,
        borderWidth: 0.5,
        borderRadius: 30,
    },
    title: {
        fontWeight: '700',
        fontSize: 22,
        paddingBottom: 10,
    },
    cardCount: {
        fontWeight: '600',
        fontSize: 15,
    },
});

export default Deck;
