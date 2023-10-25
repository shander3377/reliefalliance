import {
	getFirestore,
	collection,
	addDoc,
	serverTimestamp,
	onSnapshot,
	query,
	orderBy,
} from "firebase/firestore";
import firebase_app from "../config";

const db = getFirestore(firebase_app);
interface userDocType {
	name: string;
	dob: string;
	email: string;
	agency: string;
	head: boolean;
	crisis: boolean;
	crisisId: string;
}
export async function getMessages(user: userDocType, callback: any) {
	return onSnapshot(
		query(
			collection(db, "crisis", user?.crisisId, "messages"),
			orderBy("timestamp", "asc")
		),
		(querySnapshot) => {
			console.log(querySnapshot);
			const messages = querySnapshot.docs.map((doc) => ({
				id: doc.id,
				...doc.data(),
			}));
			callback(messages);
		}
	);
}
