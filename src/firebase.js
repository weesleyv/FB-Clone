import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBr6O5hPavfjOZi_Mh5miq9gOzvHr3DI2A",
    authDomain: "facebook-clone-41c6e.firebaseapp.com",
    databaseURL: "https://facebook-clone-41c6e.firebaseio.com",
    projectId: "facebook-clone-41c6e",
    storageBucket: "facebook-clone-41c6e.appspot.com",
    messagingSenderId: "488976849881",
    appId: "1:488976849881:web:79402688b811770d2857c8",
    measurementId: "G-FTQ6TQLE9K"
  }

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore()
  const auth = firebase.auth()
  const provider = new firebase.auth.GoogleAuthProvider()

  export {auth, provider}
  export default db