import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBhnnnv4UR6SwCFBqaQdviTeJUY-FE6euI',
  authDomain: 'personal-page-home.firebaseapp.com',
  projectId: 'personal-page-home',
  storageBucket: 'personal-page-home.appspot.com',
  messagingSenderId: '1059107214864',
  appId: '1:1059107214864:web:90ecf5acb288dbdbee9c95',
  measurementId: 'G-748N707GW4'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

const db = getFirestore(app)
export default db
