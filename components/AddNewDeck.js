import React from 'react';
import {Text, TextInput, KeyboardAvoidingView, TouchableOpacity, StyleSheet} from 'react-native';
import {pink, yellow, grey, green} from '../utils/colors';

class AddNewDeck extends React.Component {

    state={
        deckName: '',
    }

    handleSubmit = () => {
        //todo create handle submit logic
        alert('Submitted');
        this.setState({deckName: ''});
    }
    
    render(){
        const {deckName} = this.state;
        return(
            <KeyboardAvoidingView style={styles.container}>
                <Text style={styles.title}>Name your deck:</Text>
                <TextInput
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
        fontSize: 25,
        padding: 10,
    },
    inputField: {
        borderRadius: 5,
        width: 300,
        padding: 10,
        marginTop: 30,
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

export default AddNewDeck;
