import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBu9IWICj4QycddgrJwwxdGkb8A0tC6uQM",
    authDomain: "e-commerce-5aa91.firebaseapp.com",
    projectId: "e-commerce-5aa91",
    storageBucket: "e-commerce-5aa91.firebasestorage.app",
    messagingSenderId: "726087783108",
    appId: "1:726087783108:web:a217016891f8278595ef91"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };