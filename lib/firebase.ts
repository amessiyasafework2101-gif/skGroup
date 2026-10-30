
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getAnalytics, isSupported } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB4xV2ni_l7xWKPkGixCJTzyJ4LtMxlz7w",
  authDomain: "skgroup-6adb8.firebaseapp.com",
  projectId: "skgroup-6adb8",
  storageBucket: "skgroup-6adb8.firebasestorage.app",
  messagingSenderId: "730784691342",
  appId: "1:730784691342:web:079d6a542a078d9a1345df",
  measurementId: "G-FWLYF6TL8V",
};

const app = getApps().length
  ? getApp()
  : initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();

// Initialize Analytics only in a supported browser.
if (typeof window !== "undefined") {
  isSupported()
    .then((supported) => {
      if (supported) {
        getAnalytics(app);
      }
    })
    .catch((error) => {
      console.error("Firebase Analytics initialization failed:", error);
    });
}
