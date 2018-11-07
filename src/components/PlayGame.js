import React, { Component } from 'react';
import AnswerOption from "./AnswerOption";


class PlayGame extends Component {
  constructor() {
    super();
    this.state = {

    };
  }

  render() {
    return (
      <div>
        <p>GAMEPLAY PLACEHOLDER</p>
        {/* Display Question */}
        <img src={`https://raw.githubusercontent.com/DTKahn/whats-my-name-react/master/src/assets/dogs/mrPeabody.jpg`} alt={`photo caption`}/>
        {/* Display 4 answer options */}
        <AnswerOption answer="answer 1" />
        <AnswerOption answer="answer 2" />
        <AnswerOption answer="answer 3" />
        <AnswerOption answer="answer 4" />
      </div>
    )
  }
}

export default PlayGame;