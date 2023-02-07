import React from 'react'

/*
The component maps over each letter in the selectedWord prop and 
returns a span element with class name letter and key i.
For each letter, the component checks if it exists in the correctLetters prop. 
If it does, the letter is displayed, otherwise, an empty string is displayed.
*/
function Word( { selectedWord, correctLetters }) {
  return (
      <div className="word">
            {selectedWord.split('').map( (letter, i) => {
                return (
                    <span className="letter" key={i}>
                        {correctLetters.includes(letter) ? letter : ''}
                    </span>
                )
        })  }
      </div>
  )
}

export default Word
