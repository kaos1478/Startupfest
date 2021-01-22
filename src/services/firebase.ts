import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/analytics'

// usar as variaveis de ambiente
const firebaseConfig = {
  apiKey: 'AIzaSyCZGHqCeALOmxuZoouzPmwEPMZcuaBE9gc',
  authDomain: 'softable-a681a.firebaseapp.com',
  projectId: 'softable-a681a',
  storageBucket: 'softable-a681a.appspot.com',
  messagingSenderId: '726438145174',
  appId: '1:726438145174:web:927b9d04973a159cbea6b7',
  measurementId: 'G-1M6G2Y3L63'
}

export default function initFirebase() {
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
  }
}
