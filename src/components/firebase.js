import firebase from 'firebase/compat/app';
import 'firebase/auth'
import 'firebase/database'
import 'firebase/storage'


const firebaseConfig = {
    apiKey: "AIzaSyAIQxdCvMVNCJ_1SCfnxuNBXVvEM9MqWRQ",
    authDomain: "chat-app-bf7f2.firebaseapp.com",
    projectId: "chat-app-bf7f2",
    storageBucket: "chat-app-bf7f2.appspot.com",
    messagingSenderId: "1037481124701",
    appId: "1:1037481124701:web:8977e16bc454fcc9dd3eb4",
    measurementId: "G-XXYWPKQL42"
};

firebase.initializeApp(firebaseConfig);




export default firebase;