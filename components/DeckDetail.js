import React from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import {pink, grey, gold, red} from '../utils/colors';

class DeckDetail extends React.Component {
    render(){
        //todo: get: #of cards
        const {deckName, cards, navigation} = this.props;
        
        //dummy
        // let deckName = 'Redux Fundamentals'
        //let cards = [1]
        // conect to Redux const {deckName, cards} = this.props;

        return(
            <View style={styles.container}>
            <Text>{JSON.stringify(this.props.state)}</Text>
            <Text>{`cards: ${this.props.cards}`}</Text>

                <Text style={styles.title}>{deckName}</Text>
                <Text style={styles.cardCount}>
                { cards.length !== 1 
                    ? `${cards.length} Cards in the Deck` 
                    : '1 Card in the Deck'
                }
                </Text>
                { cards.length > 0 && 
                    <TouchableOpacity
                        style={styles.btn}
                        onPress={() => navigation.navigate('Quiz', {deckName})}>
                        <Text style={styles.btnText}>
                            Start Quiz
                        </Text>
                    </TouchableOpacity>
                }
                <TouchableOpacity
                    style={styles.btn}
                    onPress={() => navigation.navigate('AddCard', {deckName})}>
                    <Text style={styles.btnText}>
                        Add New Card
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: pink,
    },
    title: {
        fontWeight: '700',
        fontSize: 30,
        paddingBottom: 5,
    },
    cardCount: {
        fontWeight: '600',
        fontSize: 15,
        color: grey,
        marginBottom: 30,
    },
    btn: {
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 20,
        paddingRight: 20,
        marginBottom: 20,
        borderColor: grey,
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: gold,
    },
    btnText: {
        color: red,
        fontSize: 20,
    }
});

function mapStateToProps(state, {navigation}) {
    const {deckName} = navigation.state.params;
    return {
        state: state[deckName],//delete 
        deckName,
        //cards: to prevent error when new deck is created
        cards: state[deckName] ? state[deckName].cards : []
    }
}

export default connect(mapStateToProps)(DeckDetail);
