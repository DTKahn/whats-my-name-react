import React, { Component } from 'react';

// Import componenets
import SelectTopic from './SelectTopic';

class LoginPage extends Component {
  constructor() {
    super();
    this.state = {
      
    };
  }

  render() {
    return (
      <div>
        <button>Login/Create Account with GMail</button>
        <SelectTopic componentName="LoginPage" />
      </div>
    )
  }
}

export default LoginPage;