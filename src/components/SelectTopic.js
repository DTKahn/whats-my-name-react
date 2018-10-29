import React, { Component } from 'react';

class SelectTopic extends Component {
  constructor() {
    super();
    this.state = {

    };
  }

  render() {
    return (
      <div>
        <p>Select Topic {this.props.componentName}</p>
        <button>Start Game</button>
      </div>
    )
  }
}

export default SelectTopic;