import React, { Component } from 'react';

// Import Components
import SelectTopic from './SelectTopic';

class Score extends Component {
  constructor() {
    super();
    this.state = {

    };
  }

  render() {
    return (
      <div>
        <p>SCORE PLACEHOLDER</p>
        <SelectTopic componentName="Score"/>
      </div>
    )
  }
}

export default Score;