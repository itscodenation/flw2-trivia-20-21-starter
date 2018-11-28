import * as firebase from 'firebase';
import once from 'lodash/once';

const loadDatabase = buildFirebase();

function buildFirebase() {
    const app = firebase.initializeApp({
      apiKey: "AIzaSyCpc1noPpADSu0vm5AYdUmNSnjEUMt5ZQI",
      authDomain: "studio2-331cf.firebaseapp.com",
      databaseURL: "https://studio2-331cf.firebaseio.com",
      projectId: "studio2-331cf",
      storageBucket: "studio2-331cf.appspot.com",
      messagingSenderId: "1016551157105"
    });

    return once(async() => {
      return firebase.database(app);
    })
}

export async function getQuestions() {
  const database = await loadDatabase();
  const questions = await database.ref('/questions').once('value');
  return questions.val();
}

export async function getRandomQuestion() {
  const questions = await getQuestions();
  const randomIndex = Math.floor(Math.random() * questions.length);
  return questions[randomIndex];
}
