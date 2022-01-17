import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithRedirect, signInWithPopup, signOut } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDmeTpukDdm8xhLBS-dWcAFp4IF4MuXAAo",
  authDomain: "snap-b30b7.firebaseapp.com",
  projectId: "snap-b30b7",
  storageBucket: "snap-b30b7.appspot.com",
  messagingSenderId: "268904570912",
  appId: "1:268904570912:web:36fe848cfa4dc9888d9c45"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)    // TODO: DECIDE BETWEEN SIGN IN WITH POPUP OR REDIRECT
    .then((result) => {
      const name = result.user.displayName.split(' ')[0]
      const email = result.user.email
      const profilePic = result.user.photoURL   // NOT SURE IF WE NEED THE PICTURE..

      localStorage.setItem("name", name)   // TODO: CURRENTLY STORING USER DATA IN LOCAL STORAGE, MOVE TO DATABASE
      localStorage.setItem("email", email)
      localStorage.setItem("profilePic", profilePic)
    })
    .catch((error) => {
      console.log(error)
    })
}

export const signOutWithGoogle = () => {
  signOut(auth)
    .then(() => { }
    )
    .catch((error) => {
      console.log(error)
  })
}