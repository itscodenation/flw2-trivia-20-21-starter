import * as firebase from 'firebase';
import once from 'lodash/once';

const loadDatabase = buildFirebase();

function buildFirebase() {
    const app = firebase.initializeApp({
      apiKey: "AIzaSyADAYC7lX5QVEspv8BUeV2uDqrFle8yQpk",
      authDomain: "studio-trivia-db.firebaseapp.com",
      databaseURL: "https://studio-trivia-db.firebaseio.com",
      projectId: "studio-trivia-db",
      storageBucket: "studio-trivia-db.appspot.com",
      messagingSenderId: "736024037811"
    });

    return once(async() => {
      return firebase.database(app);
    })
}

export async function getQuestions() {
  const database = await loadDatabase();
  const questions = await database.ref('/questions').once('value');
  console.log(questions.val());
  return questions.val();
}

export async function getRandomQuestion() {
  const questions = await getQuestions();
  var keys = Object.keys(questions)
  const randomIndex = Math.floor(Math.random() * keys.length);
  return questions[keys[randomIndex]];
}
