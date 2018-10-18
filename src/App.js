import React, { Component } from 'react';
import './App.css';

import { firestore } from './firebase';

const dbRef = firestore.doc("test-collection/87XSzkREXnBdP5tozieA")

class App extends Component {
  constructor() {
    super();
    this.state = {
      db: []
    };
  }

  componentDidMount() {
    dbRef.onSnapshot(snapshot => {
      console.log(snapshot.data());
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Hello my name is</h1>
        </header>
        <main>
          <p>MAAAAIN</p>
        </main>
      </div>
    );
  }
}

export default App;
