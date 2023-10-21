import { initializeApp, getApps } from "firebase/app";

const firebaseConfig = {
	apiKey: "AIzaSyANorghv1qBGRk5LwjFeSyWypfrmoK0sd8",
	authDomain: "disaster-app-2ac97.firebaseapp.com",
	projectId: "disaster-app-2ac97",
	storageBucket: "disaster-app-2ac97.appspot.com",
	messagingSenderId: "15590490499",
	appId: "1:15590490499:web:a0b9352fdf165609dff6b6",
};

// Initialize Firebase
let firebase_app =
	getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

export default firebase_app;
