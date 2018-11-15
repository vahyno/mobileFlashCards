import React from 'react';
import {Text, View, TextInput, KeyboardAvoidingView, TouchableOpacity, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import {handleAddNewCardToDeck} from '../actions/index';
import {pink, yellow, green, grey} from '../utils/colors';

class AddCard extends React.Component {
    state={
        question: '',
        answer: '',
    }

    handleSubmit = () => {
        //todo create handle submit logic
        const {dispatch, deckName} = this.props
        const {question, answer} = this.state;
        const card = {question, answer};
        dispatch(handleAddNewCardToDeck(deckName, card));
        alert('submitted');
        this.setState({
            question: '',
            answer: '',
        });
    }
    
    render(){
        const {question, answer} = this.state;
        const {deckName} = this.props;
        return(
            <KeyboardAvoidingView style={styles.container}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>New Card for:</Text>
                    <Text style={styles.title}>{deckName}</Text>
                </View>
                <View>
                    <Text style={styles.formTitle}>Create Question:</Text>
                    <TextInput
                        style={styles.inputField} 
                        value={question} 
                        onChangeText={(text) => this.setState({question: text})}
                        />
                    <Text style={styles.formTitle}>Create Answer:</Text>
                    <TextInput
                        style={styles.inputField} 
                        value={answer} 
                        onChangeText={(text) => this.setState({answer: text})}
                        />
                </View>
                { question !== '' && answer !== '' &&
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
        alignItems: 'center',
    },
    titleContainer: {
        marginTop: 30,
        marginBottom: 20,
        alignItems: 'center'
    },
    title: {
        fontWeight: '400',
        fontSize: 20,
        padding: 5,
    },
    formTitle: {
        fontWeight: '400',
        fontSize: 20,
        textAlign: 'right',
        alignSelf: 'flex-start',
    },
    inputField: {
        borderRadius: 5,
        width: 300,
        padding: 10,
        marginTop: 5,
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

function mapStateToProps(state, {navigation}) {
    const {deckName} = navigation.state.params;
    return {
        deckName,
    }
}

export default connect(mapStateToProps)(AddCard);
