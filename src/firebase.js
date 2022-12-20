import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyACQQ6rpO_Oi6AqQ5tnbd8x9i34pWQbuRs",
    authDomain: "ujian1-rev.firebaseapp.com",
    projectId: "ujian1-rev",
    storageBucket: "ujian1-rev.appspot.com",
    messagingSenderId: "150009426994",
    appId: "1:150009426994:web:b22da9d9bf0712d0a3782b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
