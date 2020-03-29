import React, { useState } from "react";

// Imports components
import Swal from 'sweetalert2'
import NavBar from "./NavBar.jsx"
import Wrapper from "./Wrapper.jsx"
import cardsJSON from "../cards.json"
import ImageCard from "./ImageCard.jsx";
import Jumbotron from "./Jumbotron.jsx";

// Main Logic
const Container = () => {
  const [score, setScore] = useState(0);
  const [highScore, setTopScore] = useState(0);
  const [cards, setcards] = useState(cardsJSON);
  
  // Sets all the card objects to "unclicked," in order to restart game
  const resetCards = () => setcards(cards.map(card => ({...card, alreadyClicked: false})));


  const shuffleCards = () => {
    let arr = cards; 
    let n = arr.length;
    let tempArr = [];
    for (let i = 0; i < n-1; i++ ) {
      tempArr.push(arr.splice(Math.floor(Math.random()*arr.length),1)[0]);
    }
    tempArr.push(arr[0]);
    setcards(tempArr);
  }

  const didWin = (clickedCard) => {
    clickedCard.alreadyClicked = true;
    setScore(score+1);
    setTopScore(highScore > score ? highScore : score);
    if (score === cards.length) {
      Swal.fire({
        icon: 'success',
        title: 'You Win!',
        text: 'Jeeze man, how? How did you do it? I mean, I know how, you wasted all of your time playing this. Well thats it.',
      })
      setScore(0);
      resetCards();
    }
    shuffleCards()
  }

  const didLose = () => {
    Swal.fire({
      icon: 'error',
      title: score >= highScore ? `${score}?!? That makes you the BEST loser!`: 'That was alright, I guess!',
      text: 'Lets try again and see if you can beat your meaningless score with an even more meaningless score.',
    })
    setScore(0)
    resetCards();
  }

  const cardClick = clickedId => {
    console.log("clicked")
    const clickedCard = cards.filter(card => card.id===clickedId);
    if (clickedCard[0].alreadyClicked === true) {
      didLose();
    } else {
      didWin(clickedCard[0])
    }
  }

  return(
    <div>
      <NavBar 
        score={score}
        highScore={highScore}
      />
      <Jumbotron />
      <Wrapper>
        {cards.map(({image, id}) => 
          <ImageCard 
          cardImage={image}
          key={id}
          clickCard={() => cardClick(id)}
          />
        )}
      </Wrapper>
    </div>
  )
}

export default Container