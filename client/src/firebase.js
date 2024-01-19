// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBW4cUB6dsqtiZ70vV3lYUDMkCf-VFyMQI",
  authDomain: "real-estate-e96ec.firebaseapp.com",
  projectId: "real-estate-e96ec",
  storageBucket: "gs://mern-estate-25742.appspot.com",
  messagingSenderId: "473766945008",
  appId: "1:473766945008:web:aaab5360aad99cca4ea235",
  measurementId: "G-SDVW5X2TB2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Export the analytics instance
export { analytics,app };
