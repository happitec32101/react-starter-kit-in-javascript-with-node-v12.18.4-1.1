import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBcgvnJTY6q81ecnGQeQPzvvRraQEwPI1g",
  authDomain: "idobatakaigi-with-ham-a9678.firebaseapp.com",
  projectId: "idobatakaigi-with-ham-a9678",
  storageBucket: "idobatakaigi-with-ham-a9678.appspot.com",
  messagingSenderId: "897798987526",
  appId: "1:897798987526:web:e4c1eac720601937014887"
};

firebase.initializeApp(firebaseConfig);
const database = firebase.database();
const messagesRef = database.ref('messages');

export const pushMessage = ({ name, text }) => {
  messagesRef.push({ name, text });
};
