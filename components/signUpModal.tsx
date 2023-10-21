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
	TwitterIcon,
	GithubIcon,
	DiscordIcon,
	HeartFilledIcon,
	SearchIcon,
	LoginIcon,
	AgencyRegisterIcon,
	SignUpIcon,
	MailIcon,
	LockIcon,
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
const SignUpModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
	const [email, setEmail] = React.useState("");
	const [name, setName] = React.useState("");
	const [dob, setDob] = React.useState("");

	const [password, setPassword] = React.useState("");
	const [agency, setAgency] = React.useState("");

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
		console.log(result);
		if (!isSelected) {
			console.log(agency);
			setAgency("000000");
			console.log(agency);
		}
		const data = {
			name: name,
			dob: dob,
			email: email,
			agency: agency,
		};
		await addData("users", data);

		// if (error2) {
		//   return console.log(error2)
		// }
		// console.log(result2);

		return router.push("/about");
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
							<MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
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
							<LockIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
						}
						label="DOB"
						placeholder="Enter your date of birth"
						type="password"
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
					<Popover isOpen={pop} onOpenChange={(open) => setPop(open)}>
						<PopoverTrigger>
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
										return setPop(true);
									}
								}}
							>
								Sign in
							</Button>
						</PopoverTrigger>
						<PopoverContent>
							<div className="px-1 py-2">
								<div className="text-small font-bold">Error</div>
								<div className="text-tiny">Please fill in full details</div>
							</div>
						</PopoverContent>
					</Popover>
				</ModalFooter>
			</ModalContent>
		</Modal>
	);
};
export default SignUpModal;
