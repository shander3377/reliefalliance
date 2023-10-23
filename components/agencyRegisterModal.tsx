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
import logout from "@/firebase/auth/logout";
import { useRouter } from "next/navigation";
interface ModalProps {
	isOpen: boolean;
	onClose: () => void;
}
import { Checkbox } from "@nextui-org/checkbox";
const AgencyRegisterModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
	const [email, setEmail] = React.useState("");
	const [agencyName, setAgencyName] = React.useState("");
	const [dob, setDob] = React.useState("");
	const [agencyHeadName, setAgencyHeadName] = React.useState("");

	const [agencyLocation, setAgencyLocation] = React.useState("");
	const [agencyEmail, setAgencyEmail] = React.useState("");

	const [headEmail, setHeadEmail] = React.useState("");
	const [isRegistered, setIsRegistered] = React.useState(false);

	const [pop, setPop] = React.useState(false);
	const router = useRouter();

	const register = async () => {
		const code = Math.floor(
			Math.pow(10, 6 - 1) +
				Math.random() * (Math.pow(10, 6) - Math.pow(10, 6 - 1) - 1)
		);
		console.log(code);
		console.log("function run hoja");
		console.log(isRegistered);
		if (!isRegistered) {
			console.log("meow");
			const data = {
				agencyName: agencyName,
				headEmail: headEmail,
				agencyEmail: agencyEmail,
				agencyLocation: agencyLocation,
				agencyHeadName: agencyHeadName,
				agencyCode: code,
			};
			await addData("agencies", data);
			setIsRegistered(true);
			// if (error2) {
			//   return console.log(error2)
			// }
			// console.log(result2);
			alert("Your agency code is " + code);
			return router.push("/about");
		}
	};
	// onOpen();

	return (
		<Modal isOpen={isOpen} onClose={onClose} placement="top-center">
			<ModalContent>
				<ModalHeader className="flex flex-col gap-1">Login</ModalHeader>
				<ModalBody>
					<Input
						autoFocus
						endContent={
							<NameIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
						}
						label="Agency Name"
						placeholder="Enter agency name"
						variant="bordered"
						onValueChange={(value: string) => {
							setAgencyName(value);
						}}
					/>
					<Input
						autoFocus
						endContent={
							<LocationIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
						}
						label="Agency Location"
						placeholder="Enter agency operating location"
						variant="bordered"
						onValueChange={(value: string) => {
							setAgencyLocation(value);
						}}
					/>
					<Input
						autoFocus
						endContent={
							<NameIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
						}
						label="Head Name"
						placeholder="Enter the name of Agency Head"
						variant="bordered"
						onValueChange={(value: string) => {
							setAgencyHeadName(value);
						}}
					/>
					<Input
						autoFocus
						endContent={
							<MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
						}
						label="Head Email"
						placeholder="Enter agency head email"
						variant="bordered"
						onValueChange={(value: string) => {
							setHeadEmail(value);
						}}
					/>
					<Input
						autoFocus
						endContent={
							<MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
						}
						label="Agency Email"
						placeholder="Enter agency's contact email"
						variant="bordered"
						onValueChange={(value: string) => {
							setAgencyEmail(value);
						}}
					/>

					<Button color="primary" variant="flat" onPress={onClose}>
						Upload Proof
					</Button>
				</ModalBody>
				<ModalFooter>
					<Button color="danger" variant="flat" onPress={onClose}>
						Close
					</Button>
					<Button
						color="primary"
						onPress={() => {
							if (
								agencyEmail.length > 8 &&
								agencyHeadName.length > 2 &&
								agencyLocation.length > 6 &&
								headEmail.length > 8
							) {
								console.log("sabh valid hai");
								register();
								onClose();
							} else {
								return alert("Please fill in all the details");
							}
						}}
					>
						Register
					</Button>
				</ModalFooter>
			</ModalContent>
		</Modal>
	);
};
export default AgencyRegisterModal;
