// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

// eslint-disable-next-line no-unused-vars
const firebaseConfig = {
	apiKey: "AIzaSyD_vh_F_nGqC4Sf7srwUsiclihbWg9xMrk",
	authDomain: "clone-using-reactjs.firebaseapp.com",
	databaseURL: "https://clone-using-reactjs.firebaseio.com",
	projectId: "clone-using-reactjs",
	storageBucket: "clone-using-reactjs.appspot.com",
	messagingSenderId: "649013658606",
	appId: "1:649013658606:web:88cb3a7775a041926784ff",
	measurementId: "G-SQ6MHR4VXH",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();

export { db, auth };
