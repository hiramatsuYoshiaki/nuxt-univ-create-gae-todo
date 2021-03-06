import firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'
// import 'firebase/messaging'
// import 'firebase/functions'
// const serviceAccount = require('../serviceAccountKey.json')
// const config = serviceAccount
const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASEURL,
  projectId: process.env.FIREBASE_PROJECTID,
  storageBucket: process.env.FIREBASE_STORAGEBUCKET
}

if (firebase.apps.length === 0) {
  firebase.initializeApp(config)
}

export default firebase
