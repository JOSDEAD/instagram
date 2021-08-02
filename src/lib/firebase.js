import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth' 

const config={
    apiKey: "AIzaSyBdmiKU6s3w8xGsDcyTBMdKwVvU8BYBY84",
    authDomain: "instragram-817d8.firebaseapp.com",
    projectId: "instragram-817d8",
    storageBucket: "instragram-817d8.appspot.com",
    messagingSenderId: "798786358263",
    appId: "1:798786358263:web:2c70ad603fe43373e43cf2"
};
const firebase = Firebase.initializeApp(config);
const {FieldValue} = Firebase.firestore;


export {firebase,FieldValue}
