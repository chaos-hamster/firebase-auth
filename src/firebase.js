import firebase from "firebase/app";
import "firebase/auth";
const app = firebase.initializeApp({
    // apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    // authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    // projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    // storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    // messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    // appId: process.env.REACT_APP_FIREBASE_APP_ID
    apiKey: "AIzaSyA2JzLJC5Iii6RklnE3xslSxVVjy42jzMc",
    authDomain: "auth-production-7bb7e.firebaseapp.com",
    projectId: "auth-production-7bb7e",
    storageBucket: "auth-production-7bb7e.appspot.com",
    messagingSenderId: "730500972864",
    appId: "1:730500972864:web:a8b86291a967831ffafaa5"
})

export const auth = app.auth();
export default app;