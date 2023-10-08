import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBdpCMCYohp3NAmR2fNdHbvkaLFSKoXjTA",
    authDomain: "otp-auth-484ed.firebaseapp.com",
    projectId: "otp-auth-484ed",
    storageBucket: "otp-auth-484ed.appspot.com",
    messagingSenderId: "268203826891",
    appId: "1:268203826891:web:421394a771a8563269854e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);



