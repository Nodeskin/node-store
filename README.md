FIREBASE is a comprehensive platform for building web and mobile applications developed by Google. It offers a wide range of tools and services that developers can use to develop high-quality applications more efficiently and effectively.
Here's a breakdown of what Firebase does:
Realtime Database: Firebase provides a cloud-hosted NoSQL database that allows developers to store and sync data in real-time across multiple clients. This is particularly useful for applications requiring real-time updates, such as chat apps or collaborative tools.

Firebase allows for google sign in

After creating a firebase account at firebase.google.com

inside the vsCode terminal use yarn add firebase to install the firebase library.

 create util folder and inside create a firebase folder to host your firebase.js file
then import the initialize app in the firebase.js file
import {initializeApp} from 'firebase/app';

Next you return to your firebase web account and click on the web logo to access the configuration codes;

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyABtaL-zR3eygrF2G-hhGagjZd9hvG6Coc",
  authDomain: "nodeskin-clothing.firebaseapp.com",
  projectId: "nodeskin-clothing",
  storageBucket: "nodeskin-clothing.appspot.com",
  messagingSenderId: "926290460343",
  appId: "1:926290460343:web:4dec3372241a1b0796d732"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


 