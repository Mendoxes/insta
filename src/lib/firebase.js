import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
// import {seedDatabase} from "../seed";
const config ={  apiKey: "AIzaSyCXIO7-lM1ndRKjUYML-lrZhJDg8qTu_2Q",
authDomain: "insta-19c9c.firebaseapp.com",
projectId: "insta-19c9c",
storageBucket: "insta-19c9c.appspot.com",
messagingSenderId: "533642167856",
appId: "1:533642167856:web:ad2a847f969dfb41130ff5",
measurementId: "G-B090J0LEF4"};
const firebase = Firebase.initializeApp(config);
const {FieldValue} = Firebase.firestore;


// seedDatabase(firebase)  run once for the love of god 
export {firebase, FieldValue}