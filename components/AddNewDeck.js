import React from 'react';
import {Text, TextInput, KeyboardAvoidingView, TouchableOpacity, StyleSheet} from 'react-native';
import {handleAddNewDeck} from '../actions';
import {connect} from 'react-redux';


import {pink, yellow, grey, green} from '../utils/colors';

class AddNewDeck extends React.Component {

    state={
        deckName: '',
    }

    handleSubmit = () => {
        const {deckName} = this.state;
        const {dispatch, navigation} = this.props;

        dispatch(handleAddNewDeck(deckName));
        this.setState({deckName: ''});
        navigation.navigate('DeckDetail', {deckName});
    }
    
    render(){
        const {deckName} = this.state;
        return(
            <KeyboardAvoidingView style={styles.container}>
                <Text style={styles.title}>What is the title of your new deck?</Text>
                <TextInput
                    placeholder='Deck Title'
                    style={styles.inputField} 
                    value={deckName} 
                    onChangeText={(text) => this.setState({deckName: text})}
                    />
                { deckName !== '' &&
                    <TouchableOpacity 
                        style={styles.btn}
                        onPress={this.handleSubmit}>
                        <Text style={styles.btnText}>Submit</Text>
                    </TouchableOpacity>
                }
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1, 
        backgroundColor: pink,
        alignItems: 'center'
    },
    title: {
        marginTop: 100,
        fontWeight: '500',
        fontSize: 20,
        padding: 10,
    },
    inputField: {
        borderRadius: 5,
        width: 300,
        padding: 10,
        marginTop: 20,
        marginBottom: 30,
        backgroundColor: yellow,
        fontSize: 20,
    },
    btn: {
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 20,
        paddingRight: 20,
        margin: 10,
        borderColor: grey,
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: green,
    },
    btnText: {
        fontSize: 20,
    }
});

export default connect()(AddNewDeck);
