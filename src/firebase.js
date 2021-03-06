import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyC-PvqfwVZNWizSEG9ydiJxjDmLUAcjR44",
  authDomain: "whats-my-name-react.firebaseapp.com",
  databaseURL: "https://whats-my-name-react.firebaseio.com",
  projectId: "whats-my-name-react",
  storageBucket: "whats-my-name-react.appspot.com",
  messagingSenderId: "210086370196"
};
firebase.initializeApp(config);

// Required to maintain compatibility with updates to firestore (from console error)
export const firestore = firebase.firestore();

// Required to maintain compatibility with updates to firestore (from console error)
const settings = { timestampsInSnapshots: true };
firestore.settings(settings);

export default firebase;