// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    // apiKey: import.meta.env.VITE_apiKey,
    // authDomain: import.meta.env.VITE_authDomain,
    // projectId: import.meta.env.VITE_projectId,
    // storageBucket: import.meta.env.VITE_storageBucket,
    // messagingSenderId: import.meta.env.VITE_messagingSenderId,
    // appId: import.meta.env.VITE_appId

    apiKey:"AIzaSyBpYA4j53WuyZ1XYaLz2XP2mBIbfXFa_qY",
    authDomain:"perfecto-base-app.firebaseapp.com",
    projectId:"perfecto-base-app",
    storageBucket:"perfecto-base-app.appspot.com",
    messagingSenderId:"1042984089947",
    appId:"1:1042984089947:web:bde19ac9c6baa4580dc27e",
    measurementId:"G-TDG8YSMS5F"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

