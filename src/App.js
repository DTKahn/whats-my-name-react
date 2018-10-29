import React, { Component } from 'react';
import { firestore } from './firebase';
import './App.css';

// Component imports
import LoginPage from './components/LoginPage';

// const dbRef = firestore.collection('users').where('UID', '==', true)
const dbUsers = firestore.collection('users')
// const dbRef = firestore.collection('users').doc("87XSzkREXnBdP5tozieA")

class App extends Component {
  constructor() {
    super();
    this.state = {
      db: []
    };
  }

  componentDidMount() {
    
    // Get all docs in the users collection
    dbUsers
    .get()
    .then(snapshot => {
      snapshot.forEach( docRef => {
        console.log(docRef.id, '=>', docRef.data());
      })
    });

    // Add new user to Firestore
    dbUsers
    .add({
      email: 'kai@gmail.com',
      fName: 'Kai',
      lName: 'Berger-Medina'
    })
    .then(docRef => {
      
      dbUsers
      .doc(docRef.id)
      .update({ UID: docRef.id });
      
      console.log(docRef.id);
    })
    .catch( error => {
      console.log(`Error writing to DB: ${error}`);
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

          <LoginPage />
        </main>
      </div>
    );
  }
}

export default App;
