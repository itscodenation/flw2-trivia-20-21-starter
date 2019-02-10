import firebase from 'firebase';

export function buildFirebase() {
  if (firebase.apps.length === 0) {
    const app = firebase.initializeApp({
      apiKey: "AIzaSyADAYC7lX5QVEspv8BUeV2uDqrFle8yQpk",
      authDomain: "studio-trivia-db.firebaseapp.com",
      databaseURL: "https://studio-trivia-db.firebaseio.com",
      projectId: "studio-trivia-db",
      storageBucket: "studio-trivia-db.appspot.com",
      messagingSenderId: "736024037811"
    });
    return firebase.database(app);
  } else {
    return firebase.apps[0].database();
  }
}

export function getRandomQuestion(questions) {
  var keys = Object.keys(questions)
  const randomIndex = Math.floor(Math.random() * keys.length);
  return questions[keys[randomIndex]];
}
