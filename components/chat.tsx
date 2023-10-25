"use client";
import {
	Navbar as NextUINavbar,
	NavbarContent,
	NavbarMenu,
	NavbarMenuToggle,
	NavbarBrand,
	NavbarItem,
	NavbarMenuItem,
} from "@nextui-org/navbar";
import { Button } from "@nextui-org/button";
import { Kbd } from "@nextui-org/kbd";
import { Link } from "@nextui-org/link";
import { Input } from "@nextui-org/input";
import { useAuthContext } from "@/context/AuthContext";

import {
	Dropdown,
	DropdownTrigger,
	DropdownMenu,
	DropdownItem,
} from "@nextui-org/dropdown";
import { link as linkStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import NextLink from "next/link";
import clsx from "clsx";
import React from "react";
import { ThemeSwitch } from "@/components/theme-switch";
import {
	NameIcon,
	DOBIcon,
	MailIcon,
	LockIcon,
	LocationIcon,
} from "@/components/icons";
import {
	Modal,
	ModalContent,
	ModalHeader,
	ModalBody,
	ModalFooter,
	useDisclosure,
} from "@nextui-org/modal";
import { Logo } from "@/components/icons";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Popover, PopoverTrigger, PopoverContent } from "@nextui-org/popover";
import signIn from "@/firebase/auth/signin";
import signUp from "@/firebase/auth/signup";
import addData from "@/firebase/firestore/addData";
import {
	getFirestore,
	collection,
	where,
	query,
	onSnapshot,
	updateDoc,
	doc,
	limit,
	Unsubscribe,
	getDocs,
} from "firebase/firestore";
import logout from "@/firebase/auth/logout";
import { useRouter } from "next/navigation";
interface ModalProps {
	isOpen: boolean;
	onClose: () => void;
}
// import styles from "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
// import {
// 	MainContainer,
// 	ChatContainer,
// 	MessageList,
// 	Message,
// 	MessageInput,
// } from "@chatscope/chat-ui-kit-react";
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
	userDoc: userDocType;
}
import { db } from "../config/firebase.config";

import { Checkbox } from "@nextui-org/checkbox";
import { unsubscribe } from "diagnostics_channel";
import { MessageInput } from "./messageInput";
import { MessageList } from "./messageList";

const Chat: React.FC<meowprops> = ({ userDoc }) => {
	return (
		<>
			<div></div>
			<div className="messages-container">
				<MessageList userr={userDoc} />
				<MessageInput user={userDoc} />
			</div>
		</>
	);
};
export default Chat;
