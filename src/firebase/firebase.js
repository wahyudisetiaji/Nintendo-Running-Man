import firebase from 'firebase'

var config = {
  apiKey: 'AIzaSyBCii_hYk2REq_WCaOyo_SvMQpot1zzObs',
  authDomain: 'running-man-12f03.firebaseapp.com',
  databaseURL: 'https://running-man-12f03.firebaseio.com'
}

firebase.initializeApp(config)

var db = firebase.database()

export default db
