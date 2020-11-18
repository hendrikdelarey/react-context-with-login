import firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyCIKNuYtxVWB0Gm6qB-PYmFp6UICblms6s",
  authDomain: "simple-auth-7732c.firebaseapp.com",
  databaseURL: "https://simple-auth-7732c.firebaseio.com",
  projectId: "simple-auth-7732c",
  storageBucket: "simple-auth-7732c.appspot.com",
  messagingSenderId: "883685758705",
  appId: "1:883685758705:web:fe239836e5300e4c287b50",
  measurementId: "G-53LMH717GT",
});

export default app;
