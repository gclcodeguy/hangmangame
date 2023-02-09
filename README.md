<b>What the project does?</b>

The project provides a basic Hangman game in React.js

<b>Why was the project completed?</b>

The project was completed as part of the Hyperion Dev Web Development Course

<b>What stack does the project use?</b>

The project uses React.js, create-react-app and vanilla JS and CSS.

<b>References?</b>

I completed the project in part using learnings from my Hyperion Dev course 
and from a tutorial called "Build Hangman With React".

Enhancements to the tutorial:
1. Enhanced the UI, including color, format, notifications and pop up positioning
2. Added new features including:<br>

      a. Toggle instructions on / off button (using conditional formatting)
      
      b. Restart game button (using props)
      
      c. The hangman visual does not use the same method as the tutorial, I used gifs instead of the SVG which
          required a re-write of the Figure component and logic across multiple components /helper functions
          
      d. The array of words for the game is no longer hard coded, I used npm install randomWord to generate
          a random array of words to give the game more variety (I experimented with an API for this but the
          npm option was more stable
          
          
<b>Learning Note</b> - I went through this tutorial step by step, writing all the code (not copy & paste), so I could learn how an app like
this could be compiled - which was necessary for me at this stage of my learning journey. It helped me work
out how to combine all the concepts worked through more separately in the course so far.

<b>How to Start?</b>

1. Open the project in your IDE (e.g. clone the repo)

2. Enter npm install in relevant app folder to ensure you have the correct node modules / dependencies installed

3. Enter 'npm start' to launch the dev server

4. Enter a letter to get started
