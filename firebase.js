// Import the functions you need from the SDKs you need
import * as firebase from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAgnitSENx2IPXzlMF-Z2fLV2Ux61zF9-A",
  authDomain: "proyecto-de-titulo-f4722.firebaseapp.com",
  projectId: "proyecto-de-titulo-f4722",
  storageBucket: "proyecto-de-titulo-f4722.appspot.com",
  messagingSenderId: "896761637317",
  appId: "1:896761637317:web:849f8bf1368c1bd078c3ac",
  measurementId: "G-2CEH76CBJ8"
};

// Initialize Firebase
let app;

if (firebase.apps.lenght === 0){
    app= firebase.initializeApp(firebaseConfig);
}else{
    app = firebase.app()
}

const auth = firebase.auth()

export {auth}; 