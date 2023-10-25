import { getFirestore, collection, addDoc, serverTimestamp } from 'firebase/firestore';
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
export async function sendMessage(user: userDocType, text: string) {
    try {
        await addDoc(collection(db, 'crisis', user?.crisisId, 'messages'), {
            email: user?.email,
            displayName: user.name,
            text: text.trim(),
            timestamp: serverTimestamp(),
        });
    } catch (error) {
        console.error(error);
    }
}