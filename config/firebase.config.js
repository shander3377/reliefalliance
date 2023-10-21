import { getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyANorghv1qBGRk5LwjFeSyWypfrmoK0sd8",
	authDomain: "disaster-app-2ac97.firebaseapp.com",
	projectId: "disaster-app-2ac97",
	storageBucket: "disaster-app-2ac97.appspot.com",
	messagingSenderId: "15590490499",
	appId: "1:15590490499:web:a0b9352fdf165609dff6b6",
};
// Initialize Firebase
if (!getApps().length) {
	initializeApp(firebaseConfig);
}
// Initialize Firebase auth
export const auth = getAuth();
