import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBG0wWW8_5ZC3Hk8sJTWMe2F202VfC9dRw",
  authDomain: "event-ms-491.firebaseapp.com",
  projectId: "event-ms-491",
  storageBucket: "event-ms-491.firebasestorage.app",
  messagingSenderId: "3816508993",
  appId: "1:3816508993:web:957d47a3caef27400d00c0",
  measurementId: "G-BW8RYNLT3T",
};
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// console.log(analytics);
