import firebase from "firebase";
//require("@firebase/firestore");

const firebaseConfig = {
    apiKey: "AIzaSyDBRdNGVqFrZ_pluM5EDxOeJhv_QJ2pNQ0",
    authDomain: "e-ride-4fba2.firebaseapp.com",
    projectId: "e-ride-4fba2",
    storageBucket: "e-ride-4fba2.appspot.com",
    messagingSenderId: "175541028765",
    appId: "1:175541028765:web:e17f87afb992a11b2a1174"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();