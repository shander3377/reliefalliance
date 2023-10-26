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
import { NameIcon, DOBIcon, MailIcon, LockIcon } from "@/components/icons";
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
import logout from "@/firebase/auth/logout";
import { useRouter } from "next/navigation";
import {
	getFirestore,
	collection,
	where,
	query,
	onSnapshot,
	updateDoc,
	doc,
	getDocs,
} from "firebase/firestore";
import { db } from "../config/firebase.config";

interface ModalProps {
	isOpen: boolean;
	onClose: () => void;
}
import { Checkbox } from "@nextui-org/checkbox";
const SignUpModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
	const [email, setEmail] = React.useState("");
	const [name, setName] = React.useState("");
	const [dob, setDob] = React.useState("");

	const [password, setPassword] = React.useState("");
	const [agency, setAgency] = React.useState("000000");

	const [password2, setPassword2] = React.useState("");
	const [isSelected, setIsSelected] = React.useState(false);

	const [pop, setPop] = React.useState(false);
	const router = useRouter();

	const SignUp = async () => {
		const { result, error } = await signUp(email, password);

		if (error) {
			return console.log(error);
		}

		// else successful
		console.log(isSelected);
		if (!isSelected) {
			console.log("agency is ", agency);
			setAgency("000000");
			console.log("agency is", agency);
		} else {
			var q = query(
				collection(db, "agencies"),
				where("agencyCode", "==", agency)
			);
			console.log(q);
			onSnapshot(q, (snapshot: any) => {
				snapshot.forEach((docu: any) => {
					console.log("agency doc id " + docu.id);
					if (docu.id == null) {
						return alert(
							"Agency doesn't exist, please create one or enter correct code"
						);
					}
				});
			});
		}
		const data = {
			name: name,
			dob: dob,
			email: email,
			agency: agency,
			head: false,
		};
		await addData("users", data);
		var q = query(
			collection(db, "agencies"),
			where("agencyCode", "==", agency)
		);
		console.log(q);
		var snapshot = await getDocs(q);
		snapshot.forEach((docu: any) => {
			var agencyDoc = doc(collection(db, "agencies"), docu.id);
			var memembers = docu.data().members;
			if (docu.data().headEmail == email) {
				memembers.push({
					name: name,
					email: email,
					head: false,
				});
			} else {
				memembers.push({
					name: name,
					email: email,
					head: true,
				});
			}
			updateDoc(agencyDoc, {
				members: memembers,
			});
		});
		// if (error2) {
		//   return console.log(error2)
		// }
		// console.log(result2);

		return router.push("/user");
	};
	// onOpen();

	return (
		<Modal isOpen={isOpen} onClose={onClose} placement="top-center">
			<ModalContent>
				<ModalHeader className="flex flex-col gap-1">Sign Up</ModalHeader>
				<ModalBody>
					<Input
						autoFocus
						endContent={
							<NameIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
						}
						label="Name"
						placeholder="Enter your name"
						variant="bordered"
						onValueChange={(value: string) => {
							setName(value);
						}}
					/>
					<Input
						endContent={
							<DOBIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
						}
						label="DOB"
						placeholder="Enter your date of birth"
						variant="bordered"
						onValueChange={(value: string) => {
							setDob(value);
						}}
					/>
					<Input
						autoFocus
						endContent={
							<MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
						}
						label="Email"
						placeholder="Enter your email"
						variant="bordered"
						onValueChange={(value: string) => {
							setEmail(value);
						}}
					/>
					<Input
						endContent={
							<LockIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
						}
						label="Password"
						placeholder="Enter your password"
						type="password"
						variant="bordered"
						onValueChange={(value: string) => {
							setPassword(value);
						}}
					/>
					<Input
						endContent={
							<LockIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
						}
						label="Password again"
						placeholder="Enter your password again"
						type="password"
						variant="bordered"
						onValueChange={(value: string) => {
							setPassword2(value);
						}}
					/>
					<Checkbox
						classNames={{
							label: "text-small",
						}}
						isSelected={isSelected}
						onValueChange={setIsSelected}
					>
						Part of an agency
					</Checkbox>
					{isSelected ? (
						<Input
							autoFocus
							endContent={
								<MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
							}
							label="Agency Code"
							placeholder="Enter your 6 digit agency code"
							variant="bordered"
							onValueChange={(value: string) => {
								setAgency(value);
							}}
							description="It is given by the agency leader"
						/>
					) : null}
				</ModalBody>
				<ModalFooter>
					<Button color="danger" variant="flat" onPress={onClose}>
						Close
					</Button>
					<Button
						color="primary"
						onPress={() => {
							if (
								email.length > 8 &&
								password == password2 &&
								password.length >= 6 &&
								dob
							) {
								SignUp();
								onClose();
							} else {
								return alert("Please fill in all the details!");
							}
						}}
					>
						Sign Up
					</Button>
				</ModalFooter>
			</ModalContent>
		</Modal>
	);
};
export default SignUpModal;
