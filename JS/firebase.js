<script type="module">

  // Import the functions you need from the SDKs you need

  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-app.js";
  import { getAnalytics } from "firebase/analytics";
  import { getAuth } from "firebase/auth";
  import { getFirestore } from "firebase/firestore";
  
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries


  // Your web app's Firebase configuration

  const firebaseConfig = {

    apiKey: "AIzaSyCcCo_amCoasXVWil6ep-b-__MZb-z-kNs",

    authDomain: "personalwebsite-2b171.firebaseapp.com",

    projectId: "personalwebsite-2b171",

    storageBucket: "personalwebsite-2b171.firebasestorage.app",

    messagingSenderId: "86726337498",

    appId: "1:86726337498:web:8fd7b43f47f4aabc8496e3"

  };


  // Initialize Firebase

  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const auth = getAuth(app);
  const db = getFirestore(app);


import { credential } from 'firebase-admin';
import { AppOptions, getApps, initializeApp } from 'firebase-admin/app';

const GOOGLE_CLOUD_CREDENTIALS = JSON.parse(
  Buffer.from(process.env.GOOGLE_CLOUD_CREDENTIALS!, 'base64').toString('utf-8')
);

const firebaseConfig: AppOptions = {
  credential: credential.cert(GOOGLE_CLOUD_CREDENTIALS),
  projectId: '...',
  storageBucket: '....appspot.com',
};

const alreadyCreatedAps = getApps();

const app =
  alreadyCreatedAps.length === 0
    ? initializeApp(firebaseConfig)
    : alreadyCreatedAps[0];

  const { initializeApp } = require('firebase-admin/app');
    