import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// 1) when seeding the database you'll have to uncomment this!
//import { seedDatabase } from '../seed';

const config = {
  apiKey: "AIzaSyAS1M24V-xHDix39pc46o9egb_GN8y77tk",
  authDomain: "video-streaming-app-dca44.firebaseapp.com",
  projectId: "video-streaming-app-dca44",
  storageBucket: "video-streaming-app-dca44.appspot.com",
  messagingSenderId: "964329098963",
  appId: "1:964329098963:web:f3f439d87a9c243f354e26",
};

const firebase = Firebase.initializeApp(config);
// 2) when seeding the database you'll have to uncomment this!
 //seedDatabase(firebase);
// 3) once you have populated the database (only run once!), re-comment this so you don't get duplicate data

export { firebase };
