import {initializeApp, getApp, getApps} from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAjK08xkEofi0uAe-Ek3wgW3MSok0CdNo4",
    authDomain: "portfolio-32a79.firebaseapp.com",
    projectId: "portfolio-32a79",
    storageBucket: "portfolio-32a79.appspot.com",
    messagingSenderId: "570459147261",
    appId: "1:570459147261:web:eb7b7ce379cb242f07e794"
  };
  const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
  const db = getFirestore(app);

  export {app, db};