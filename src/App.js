import { useState, useEffect } from 'react';
import Header from './components/Header'
import Figure from './components/Figure'
import './App.css'
import WrongLetters from './components/WrongLetters';
import Word from './components/Word';
import Notification from './components/Notification';
import Popup from './components/Popup';
import {showNotification as show} from './helpers/helpers';


//import Popup from './components/Popup';
//import Notification from './components/Notification';

const words = ['javascript', 'programming', 'python', 'banana'];
let selectedWord = words[Math.floor(Math.random() * words.length)]; //select word to be guessed at random


function App() {
  const [playable, setPlayable] = useState(true);
  const [correctLetters, setCorrectLetters] = useState([]);
  const [wrongLetters, setwrongLetters] = useState([]);
  const [showNotification, setShowNotification] = useState(false);

  /*
    Event handler is triggered when a keyboard key is pressed. 
    The code extracts the key and keyCode properties from the event object.
    
    
    
  */
  useEffect(()=> {
    const handleKeydown = event => {
    //If the playable variable is true and the key code is within the 
    //range of 65 and 90 (representing 'A' to 'Z'), 
    //converts key to lowercase using and saves it in the letter variable.
        const { key, keyCode} = event;
          if (playable && keyCode >= 65 && keyCode <= 90) {
            const letter = key.toLowerCase();
            //checks if letter pressed is included in selectedWord. 
            //If it is, the code checks if the letter is already in the correctLetters array. 
            //If not, it adds the letter to correctLetters by using the setCorrectLetters state updater and spreading the 
            //current value of currentLetters into a new array, with the letter added.
            if (selectedWord.includes(letter)) {
              if (!correctLetters.includes(letter)) {
                setCorrectLetters(currentLetters => [...currentLetters, letter]);
      
              } else {
                show(setShowNotification);
              }
            //If not in selectedWord, we check if letter is in the wrongLetters array. 
            //If not, it adds the letter to wrongLetters by using the setWrongLetters state updater and spreading 
            //the current value of wrongLetters into a new array, with the letter added.
            //If the letter has already been entered, the code calls the show function and passes 
            //setShowNotification as an argument.
            } else {
              if (!wrongLetters.includes(letter)) {
                setwrongLetters(wrongLetters => [...wrongLetters, letter]);
      
              } else {
                show(setShowNotification);
              }
            }
          }
        }
        window.addEventListener('keydown', handleKeydown);
        return()=> window.removeEventListener('keydown', handleKeydown); //cleans up eventlistener so we only have one running
      }, [correctLetters, wrongLetters, playable]); //anytime items in array get updated, function is called

      function playAgain() {
        setPlayable(true);

      //Restore Empty Arrays so we can play again
      setCorrectLetters([]);
      setwrongLetters([]);

      const random = Math.floor(Math.random() * words.length);
      selectedWord = words[random];
      }

      
  //app display, passing required props to components
  return (
    <div className="App">
        <Header />
        <div className='game-container'>
            <Figure wrongLetters={wrongLetters} />
            <WrongLetters wrongLetters={wrongLetters} />
            <Word selectedWord={selectedWord} correctLetters={correctLetters} />
        </div>
            <Popup correctLetters={correctLetters} wrongLetters={wrongLetters} selectedWord={selectedWord} setPlayable={setPlayable} playAgain={playAgain}/>
            <Notification showNotification={showNotification} />
    </div>
  );
}

export default App;
