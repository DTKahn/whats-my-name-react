import React, { Component } from 'react';
import HeaderAdmin from './HeaderAdmin';

class LoginPage extends Component {
  constructor() {
    super();
    this.state = {
      
    };
  }

  render() {
    return (
      <React.Fragment>
        <HeaderAdmin />
        <main>
          <div className="login-options">
            <button>Login/Create Account with GMail</button>
            <button>Play as Guest</button>
          </div>
        </main>
      </React.Fragment>
    )
  }
}

export default LoginPage;