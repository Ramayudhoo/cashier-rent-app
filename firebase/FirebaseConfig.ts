// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import AsyncStorage from '@react-native-async-storage/async-storage';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAAzC-IG53QAlMbcLIYH6qwJaTuX9iZSps",
  authDomain: "cashier-rent-app.firebaseapp.com",
  projectId: "cashier-rent-app",
  storageBucket: "cashier-rent-app.appspot.com",
  messagingSenderId: "336555288850",
  appId: "1:336555288850:web:bdc1535e6c1af765e06bcb",
  measurementId: "G-BZGVB0H9W7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Manage Authentication State Persistence with AsyncStorage
const manageAuthPersistence = async () => {
  const userKey = 'firebaseUser';
  const storedUser = await AsyncStorage.getItem(userKey);
  if (storedUser) {
    // Set the user state to the stored user
    auth.updateCurrentUser(JSON.parse(storedUser));
  }

  onAuthStateChanged(auth, async (user) => {
    if (user) {
      await AsyncStorage.setItem(userKey, JSON.stringify(user));
    } else {
      await AsyncStorage.removeItem(userKey);
    }
  });
};

manageAuthPersistence();

export { auth };
