// Import the Firebase modules that you need in your app.
import firebase from 'firebase/app';
import 'firebase/database';

// Initalize and export Firebase.
const config = {
  apiKey: 'AIzaSyBdQ1K54yML4BpMLKMa3afJ0c8lXmRmggc',
  authDomain: 'my-mood-a16e2.firebaseapp.com',
  databaseURL: 'https://my-mood-a16e2.firebaseio.com',
  projectId: 'my-mood-a16e2',
  messagingSenderId: '298396729367'
};
export default firebase.initializeApp(config);