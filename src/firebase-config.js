import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCP1Mp8phzl4Di6xK--5fGWbi_OoJnAATo",
  authDomain: "leagueoflegends-32b39.firebaseapp.com",
  projectId: "leagueoflegends-32b39",
  storageBucket: "leagueoflegends-32b39.appspot.com",
  messagingSenderId: "207926825323",
  appId: "1:207926825323:web:6c95b5dc167366dfe07c2e",
  measurementId: "G-ENCP96N1RF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getAnalytics(app);