import firebase from 'firebase/compat/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCj2X9Ged2WwScobUc1Jtl0VddzpMdmhV8",
  authDomain: "dunya-28c39.firebaseapp.com",
  projectId: "dunya-28c39",
  storageBucket: "dunya-28c39.appspot.com",
  messagingSenderId: "412269448632",
  appId: "1:412269448632:web:01084502273d3cc3e9534d"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }

const auth = firebase.auth();
const firestore = firebase.firestore();

export { auth, firestore };