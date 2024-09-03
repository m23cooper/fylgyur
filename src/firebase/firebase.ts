import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, initializeFirestore, setLogLevel, } from 'firebase/firestore'

// ... other firebase imports

const {
    VITE_FIREBASE_API_KEY,
    VITE_FIREBASE_AUTH_DOMAIN,
    VITE_FIREBASE_PROJECT_ID,
    VITE_FIREBASE_STORAGE_BUCKET,
    VITE_FIREBASE_MESSAGING_SENDER_ID,
    VITE_FIREBASE_APP_ID,
    VITE_FIREBASE_MEASUREMENT_ID
} = import.meta.env;

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: VITE_FIREBASE_API_KEY,
    authDomain: VITE_FIREBASE_AUTH_DOMAIN,
    projectId: VITE_FIREBASE_PROJECT_ID,
    storageBucket: VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: VITE_FIREBASE_APP_ID,
    measurementId: VITE_FIREBASE_MEASUREMENT_ID
};

// setLogLevel("debug");

const firebaseApp = initializeApp(firebaseConfig);
// export const analytics = getAnalytics(firebaseApp);

// used for the firestore refs
const db = initializeFirestore(firebaseApp, {
    // experimentalAutoDetectLongPolling: false,
    // experimentalForceLongPolling: true,
})

export {
    firebaseApp,
    db,
}



// here we can export reusable database references
// export const usersCollectionRef = collection(db, 'users')
// export const formsCollectionRef = collection(db, 'forms')