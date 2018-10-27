import React, { Component } from 'react';
import './App.css';

import { firestore } from './firebase';

// const dbRef = firestore.collection('users').where('UID', '==', true)
const dbRef = firestore.collection('users')
// const dbRef = firestore.collection('users').doc("87XSzkREXnBdP5tozieA")

class App extends Component {
  constructor() {
    super();
    this.state = {
      db: []
    };
  }

  componentDidMount() {
    dbRef
    .get()
    .then(snapshot => {
      snapshot.forEach( doc => {
        console.log(doc.id, '=>', doc.data());
      })
    });
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
