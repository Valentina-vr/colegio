import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBd0PmPr3PKx1XWA4Qn5f4NGIEDqkdoF68",
  authDomain: "colegio-jaime-isaza-cada-b282a.firebaseapp.com",
  databaseURL: "https://colegio-jaime-isaza-cada-b282a-default-rtdb.firebaseio.com",
  projectId: "colegio-jaime-isaza-cada-b282a",
  storageBucket: "colegio-jaime-isaza-cada-b282a.appspot.com",
  messagingSenderId: "597056908085",
  appId: "1:597056908085:web:bc25c7a05877fd66793a7c"
};
// Initialize Firebase
var fireDB = firebase.initializeApp(firebaseConfig);

export default fireDB.database().ref();