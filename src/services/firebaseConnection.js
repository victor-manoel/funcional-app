import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';


let firebaseConfig = {
    apiKey: "AIzaSyD9ROIbT2udnthZNFGWT4W4gXdsUV24L0w",
    authDomain: "appfuncional-a2a3d.firebaseapp.com",
    databaseURL: "https://appfuncional-a2a3d.firebaseio.com",
    projectId: "appfuncional-a2a3d",
    storageBucket: "appfuncional-a2a3d.appspot.com",
    messagingSenderId: "1017700848683",
    appId: "1:1017700848683:web:925d6522c143ad4315066e",
    measurementId: "G-9WKY9ZC13K"
  };
  
  // Initialize Firebase
  if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
  }

  export default firebase;
  