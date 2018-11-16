import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import {handleEraseAllDecks} from '../actions';
import {red, purple, white, black} from '../utils/colors';

class EraseDecks extends React.Component {

    handleEraseDecks = () => {
        const {dispatch, navigation} = this.props;
        dispatch(handleEraseAllDecks());
        navigation.navigate('Decks');

    }

    render(){
        return (
            <View style={styles.container}>
                <Text style={{color:white, fontSize:30}}>⚠️ Warning ⚠️</Text>
                <TouchableOpacity 
                    style={styles.btn}
                    onPress={this.handleEraseDecks}>
                    <Text style={styles.btnText}>Erase All Decks</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: purple,
    },
    btn: {
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 20,
        paddingRight: 20,
        margin: 10,
        borderColor: black,
        backgroundColor: red,
        borderWidth: 1,
        borderRadius: 10,
    },
    btnText: {
        fontSize: 20,
    }
});

export default connect()(EraseDecks);

