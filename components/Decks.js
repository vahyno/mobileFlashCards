import React from 'react';
import {Text, View, FlatList, StyleSheet, Button} from 'react-native';
import {connect} from 'react-redux';
import {handleIntialData, eraseAllDecks} from '../actions';
import Deck from './Deck';
import {blue, lightPurple} from '../utils/colors';

class Decks extends React.Component {

    componentDidMount (){
        this.props.dispatch(handleIntialData());
    }

    //test => move to own component
    handleEraseDecks = () => {
        const {dispatch} = this.props;
        dispatch(eraseAllDecks());
    }

    renderItem = ({item}) => {
        return (
            <Deck
                deckName={item.deckName}
                cardCount={item.cards? item.cards.length : 0}
                navigation={this.props.navigation}
            />
        )   
    }

    render(){
        const {decks} = this.props;

        if (!decks.length) {
            return (
                <View style={styles.noData}>
                    <Text style={{fontSize: 30}}>
                        Please Add New Deck
                    </Text>
                </View>
            )
        }

        return(
            <View style={styles.container}>
                {/* <Text style={{backgroundColor: '#fff'}}>{JSON.stringify(decks)}</Text> */}
                <FlatList
                    data={decks}
                    renderItem={this.renderItem}
                    keyExtractor={item => item.deckName}
                />
                <Button
                    onPress={this.handleEraseDecks}
                    title = "WIPE ALL DECKS!"
                    color = "red"/>
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
    },
    noData: {
        flex:1, 
        padding: 20,
        paddingBottom: 0,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: lightPurple,
    }
});

function mapStateToProps(state) {
    return {
        decks: Object.keys(state).map(deck => (state[deck])),
    }
}

export default connect(mapStateToProps)(Decks);
