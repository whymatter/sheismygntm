import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
    apiKey: "AIzaSyBLQUp3RRsf1uYMqP_gReM7eM02Ds8oq18",
    authDomain: "sheismygntm-web.firebaseapp.com",
    databaseURL: "https://sheismygntm-web-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "sheismygntm-web",
    storageBucket: "sheismygntm-web.appspot.com",
    messagingSenderId: "144016536316",
    appId: "1:144016536316:web:587024afa840df972e5d79",
    measurementId: "G-0HDJPF4GFR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Realtime Database and get a reference to the service
export const database = getDatabase(app);