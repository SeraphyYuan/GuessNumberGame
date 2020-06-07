import React, {useState} from 'react';
import {View, Text, StyleSheet, Button, TouchableWithoutFeedback, Keyboard, Alert} from 'react-native'
import Card from '../components/Card';
import Mycolors from '../constants/colors';
import Input from '../components/Input';
import NumberContainer from '../components/NumberContainer';

function StartGameSceen(props) {
    const [enteredValue, setEnteredValue] = useState('');
    const [confirmed, setConfirmed] = useState(false);
    const [selectedNumber, setSelectedNumber] = useState();

    function numberInputHandler(inputText){
        setEnteredValue(inputText.replace(/[^0-9]/g, ''));
    };

    function resetInputHanlder() {
        setEnteredValue('');
        setConfirmed(false);
    };

    function confirmInputHandler(){
        const chosenNumber = parseInt(enteredValue);
        if(isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99 ) {
            Alert.alert('Invalid Number', 'Number has to be a numebr from 0 - 99', [{text:'Ok', style:'destructive', onPress: resetInputHanlder}]);
            return;
        }
        setConfirmed(true);
        setSelectedNumber(chosenNumber);
        setEnteredValue('');
        Keyboard.dismiss();
    };

    let ConfirmedOutput;
    if(confirmed) {
        ConfirmedOutput = 
        <Card style={styles.summaryContainer}>
        <Text>You Selected</Text>
        <NumberContainer>{selectedNumber}</NumberContainer>
        <Button title="START GAME" onPress={()=>props.onStartGame(selectedNumber)}/>
        </Card>;
    }

    return(
        <TouchableWithoutFeedback onPress={()=>{
            Keyboard.dismiss();
        }}>
            <View style={styles.screen}>
                <Text style={styles.title}>Start a New Game!</Text>
                <Card style={styles.inputContainer}>
                    <Text>Select a number</Text>
                    <Input 
                    style={styles.input} 
                    placeholder="Please try" 
                    autoCorrect={false} 
                    keyboardType="number-pad" 
                    maxLength={2}
                    onChangeText={numberInputHandler}
                    value={enteredValue}
                    />
                    <View style={styles.buttonContainer}>
                        <View><Button title="Reset" onPress={resetInputHanlder} color={Mycolors.secondary}></Button></View>
                        <View><Button title="Confirm" onPress={confirmInputHandler} color={Mycolors.primary}></Button></View>
                    </View>
                </Card>
                {ConfirmedOutput}
            </View>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
    },
    inputContainer: {
        width: 300,
        maxWidth: '80%',
        alignItems: 'center',
    },
    title : {
        fontSize: 20,
        marginBottom: 20,

    },
    button : {
        width : 100,

    },
    input: {
        width: 100,
        textAlign: 'center',
    },
    summaryContainer: {
        marginTop: 20,
        alignItems: 'center',

    }
});

export default StartGameSceen;