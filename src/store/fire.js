import firebase from 'firebase'
let config = {
  apiKey: 'AIzaSyCWt9ZyTFxBlJje94C5Ci3-ZswOJ0aiDhU',
  authDomain: 'bugscity-4eea6.firebaseapp.com',
  databaseURL: 'https://bugscity-4eea6.firebaseio.com',
  projectId: 'bugscity-4eea6',
  storageBucket: 'bugscity-4eea6.appspot.com',
  messagingSenderId: '1044236273874'
}
let fireApp = !firebase.apps.length ? firebase.initializeApp(config) : firebase.app()
export default fireApp
