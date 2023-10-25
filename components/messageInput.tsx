import React from "react";
import { sendMessage } from "@/firebase/firestore/sendMessages";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
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

	const handleChange = (valuee: string) => {
		setValue(valuee);
	};

	const handleSubmit = (event: any) => {
		event.preventDefault();
		sendMessage(user, value);
		setValue("");
	};

	return (
		<Input
			placeholder="Enter a message"
			onValueChange={(valueeee: string) => {
				handleChange(valueeee);
			}}
			className="w-96"
			required
			color="primary"
			endContent={<Button onClick={handleSubmit}>Send</Button>}
		/>
	);
};
export { MessageInput };
