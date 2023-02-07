import React, { useState } from 'react';

const Header = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <div className='titleDiv'>
        <h1 className='title'>Hangman</h1>
        <p>Find the hidden word - enter a letter</p>
        <button className='helpButton' onClick={toggleModal}>Toggle Help</button>
        {/*The modal below is toggled visible / invisible by the button above
          with some conditional in-line styling*/}
        <div className='instructionsModal' style={{ display: showModal ? 'block' : 'none' }}>
          <h5>Game Instructions</h5>
          <p>To play Hangman, you need to guess letters, until you
              identify the missing word below.</p>
          <p>You need to find the letter before you end up in the 
              hangman's noose - so choose your letters carefully!</p>
          <p>If you win or lose, you can click Play Again, to reset the
              game. Good Luck!</p>
        </div>
      </div>
    </>
  );
};

export default Header;

