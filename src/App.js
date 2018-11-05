import React, { Component } from 'react';
import { firestore } from './firebase';
import './App.css';

// Component imports
import LoginPage from './components/LoginPage';
import Score from './components/Score';
import PlayGame from './components/PlayGame';
import SelectTopic from './components/SelectTopic';

// const dbRef = firestore.collection('users').where('UID', '==', true)
const dbUsers = firestore.collection('users')
// const dbRef = firestore.collection('users').doc("87XSzkREXnBdP5tozieA")

class App extends Component {
  constructor() {
    super();
    this.state = {
      // db: [],
      unansweredQuestions: [],
      answeredQuestions: [],
      currentQuestion: [],
      score: 0,
      user: {},
      timeRemaining: 60,
      topic: ''
    };
  }

  componentDidMount() {
    // COMMENTING OUT ALL DB CODE WHILE GETTING THE GAME SET UP
    // // Get all docs in the users collection
    // dbUsers
    // .get()
    // .then(snapshot => {
    //   snapshot.forEach( docRef => {
    //     console.log(docRef.id, '=>', docRef.data());
    //   })
    // });

    // // Add new user to Firestore
    // dbUsers
    // .add({
    //   email: 'kai@gmail.com',
    //   fName: 'Kai',
    //   lName: 'Berger-Medina'
    // })
    // .then(docRef => {
      
    //   dbUsers
    //   .doc(docRef.id)
    //   .update({ UID: docRef.id });
      
    //   console.log(docRef.id);
    // })
    // .catch( error => {
    //   console.log(`Error writing to DB: ${error}`);
    // });
  }

  render() {
    return (
      <React.Fragment>
          <LoginPage />
          <SelectTopic />
          <PlayGame />
          <Score />
      </React.Fragment>
    );
  }
}

export default App;
