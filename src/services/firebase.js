// Import the functions you need from the SDKs you need
import { getApp, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAZ9OGAzf6tsnPhT1gyweC2cGcpt-eI98A",
  authDomain: "cars-now-project.firebaseapp.com",
  projectId: "cars-now-project",
  storageBucket: "cars-now-project.appspot.com",
  messagingSenderId: "167688389105",
  appId: "1:167688389105:web:aeb008168b0d2012f30450",
};

function createFirebaseApp(config) {
  try {
    return getApp();
  } catch {
    initializeApp(config);
  }
}

// Initialize Firebase
const firebaseApp = createFirebaseApp(firebaseConfig);

export const db = getFirestore(firebaseApp);
