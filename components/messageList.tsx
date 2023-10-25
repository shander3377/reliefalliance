import React from "react";
import { useAuthContext } from "@/context/AuthContext";
import { getMessages } from "../firebase/firestore/getMessages";
import { Chip } from "@nextui-org/chip";
import { Avatar } from "@nextui-org/avatar";
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
interface messageType {
	id: string;
	email: string;
	displayName: string;
	text: string;
	timestamp: any;
}

interface meowprops {
	userr: userDocType;
}
const MessageList: React.FC<meowprops> = ({ userr }) => {
	const containerRef = React.useRef<HTMLDivElement>(null);
	const [messages, setMessages] = React.useState([]);
	const { user } = useAuthContext();
	React.useEffect(() => {
		const unsubscribe = getMessages(userr, setMessages);
		console.log(messages);
	}, [userr]);
	React.useLayoutEffect(() => {
		if (containerRef.current) {
			containerRef.current.scrollTop = containerRef.current.scrollHeight;
		}
	});

	return (
		<div className="message-list-container" ref={containerRef}>
			<ul className="message-list">
				{messages.map(
					(x: {
						id: string;
						email: string;
						displayName: string;
						text: string;
						timestamp: any;
					}) => (
						<Message
							key={x.id}
							message={x}
							isOwnMessage={x.email === user.email}
						/>
					)
				)}
			</ul>
		</div>
	);
};

interface meowmeowprops {
	message: messageType;
	isOwnMessage: boolean;
}
const Message: React.FC<meowmeowprops> = ({ message, isOwnMessage }) => {
	const { displayName, text } = message;
	var className;
	if (isOwnMessage) {
		className = "items-start";
	} else {
		className = "items-end";
	}
	return (
		<li className={className}>
			<Chip
				variant="faded"
				color="primary"
				avatar={<Avatar name={displayName} size="sm" />}
			>
				{displayName}
			</Chip>
			<br />
			<div className="items-start">
				<Chip className="items-start" color="secondary">
					{text}
				</Chip>
			</div>
		</li>
	);
};

export { MessageList };
