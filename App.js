import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Headers from './components/Header'
import StartGameSceen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [guessRound, setGuessRound] = useState(0);
  function configuareNewGameHandler(){
    setGuessRound(0);
    setUserNumber(null);
  }

  function startGameHandler(selectedNumber){
    setUserNumber(selectedNumber);
    setGuessRound(0);
  }

  function gameOverHandler(numberOfRounds) {
    setGuessRound(numberOfRounds);
  }


  let content = <StartGameSceen onStartGame={startGameHandler}/>;
  if(userNumber && guessRound <= 0) {
    content = <GameScreen userChoice={userNumber} onGameOver={gameOverHandler}/>
  }
  else if (guessRound > 0) {
    content = <GameOverScreen roundsNumber={guessRound} userNumber={userNumber} onRestart={configuareNewGameHandler}/>
  }
  return (
    <View style={styles.container}>
        <Headers name="Guess a Number"/>
        {content}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
});
