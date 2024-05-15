import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";


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
//SIGN-IN SECTION
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});
//We can have multiple GoogleAuthProvider, getAuth on the other hand we can only need one.
export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);


//DATABASE SECTION
export const db = getFirestore();
export const createUserDocumentFromAuth = async (userAuth) => {
const userDocRef = doc(db, "users", userAuth.uid);

  console.log(userDocRef);
  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot);
  console.log(userSnapshot.exists());


if(!userSnapshot.exists()){
  const {displayName, email} = userAuth;
  const createAt = new Date();

  try{
    await setDoc(userDocRef,{
      displayName,
      email,
      createAt
    } );
  }
  catch(error){
    console.log('error creating the user', error.message)
  }
}
return userDocRef
};