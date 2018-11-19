import firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAF0gP5O6JrHa4OEjdljDTWahdpm-nFXfk",
  authDomain: "socialredux-a8883.firebaseapp.com",
  databaseURL: "https://socialredux-a8883.firebaseio.com",
  projectId: "socialredux-a8883",
  storageBucket: "socialredux-a8883.appspot.com",
  messagingSenderId: "950095375148"
};

firebase.initializeApp(firebaseConfig);
const firestore = firebase.firestore();
const settings = {
  timestampsInSnapshots: true
};
firestore.settings(settings);

export default firebase;
