import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAL4tRClZCbppfrNTXx04QRF8tY0iqGQkU",
  authDomain: "summarizer-2e2e1.firebaseapp.com",
  projectId: "summarizer-2e2e1",
  storageBucket: "summarizer-2e2e1.appspot.com",
  messagingSenderId: "691658994463",
  appId: "1:691658994463:web:ad8f193e8b44c12e05762a",
  measurementId: "G-KSPD54VZ79",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
