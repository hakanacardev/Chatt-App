import firebase from 'firebase/compat/app';

const FirebaseProvider = ({ children }) => {

    const firebaseConfig = {
        apiKey: "AIzaSyAIQxdCvMVNCJ_1SCfnxuNBXVvEM9MqWRQ",
        authDomain: "chat-app-bf7f2.firebaseapp.com",
        projectId: "chat-app-bf7f2",
        storageBucket: "chat-app-bf7f2.appspot.com",
        messagingSenderId: "1037481124701",
        appId: "1:1037481124701:web:8977e16bc454fcc9dd3eb4",
        measurementId: "G-XXYWPKQL42"
    };

    try {
        firebase.initializeApp(firebaseConfig);
    } catch (error) {

    }

    return children
}


export default FirebaseProvider