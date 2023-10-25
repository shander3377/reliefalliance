import React from "react";
import { sendMessage } from "@/firebase/firestore/sendMessages";

import "./styles.css";
interface userDocType {
	name: string;
	dob: string;
	email: string;
	agency: string;
	head: boolean;
	crisis: boolean;
	crisisId: string;
}
interface meowprops {
	user: userDocType;
}
const MessageInput: React.FC<meowprops> = ({ user }) => {
	const [value, setValue] = React.useState("");

	const handleChange = (event: any) => {
		setValue(event.target.value);
	};

	const handleSubmit = (event: any) => {
		event.preventDefault();
		sendMessage(user, value);
		setValue("");
	};

	return (
		<form onSubmit={handleSubmit} className="message-input-container">
			<input
				type="text"
				placeholder="Enter a message"
				value={value}
				onChange={handleChange}
				className="message-input"
				required
				minLength={1}
			/>
			<button
				type="submit"
				disabled={value.length < 1}
				className="send-message"
			>
				Send
			</button>
		</form>
	);
};
export { MessageInput };
