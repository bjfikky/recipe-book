import firebase from 'firebase'

// Initialize Firebase
var config = {
    apiKey: "AIzaSyCvLZFe9cuV-_udgTYsTaOd4qHfAIYgEdo",
    authDomain: "recipe-book-b9baf.firebaseapp.com",
    databaseURL: "https://recipe-book-b9baf.firebaseio.com",
    projectId: "recipe-book-b9baf",
    storageBucket: "",
    messagingSenderId: "1038146821893"
};

const firebaseApp = firebase.initializeApp(config);

firebaseApp.firestore().settings({ timestampsInSnapshots: true })

export default firebaseApp.firestore()