import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

//initialize app function creates an app instance base of an app config
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyABtaL-zR3eygrF2G-hhGagjZd9hvG6Coc",
  authDomain: "nodeskin-clothing.firebaseapp.com",
  projectId: "nodeskin-clothing",
  storageBucket: "nodeskin-clothing.appspot.com",
  messagingSenderId: "926290460343",
  appId: "1:926290460343:web:4dec3372241a1b0796d732",
};

// Initialize FirebaseApp instance is going to be used for our CRUD Actions
const firebaseApp = initializeApp(firebaseConfig);

//Note setCustomParameters is just some custom required configuration that google needs
const provider =  new GoogleAuthProvider();
provider.setCustomParameters({
prompt: "select_account" 
})

export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)

