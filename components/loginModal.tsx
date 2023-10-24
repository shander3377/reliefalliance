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
import { Checkbox } from "@nextui-org/checkbox";
import { Logo } from "@/components/icons";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Popover, PopoverTrigger, PopoverContent } from "@nextui-org/popover";
import signIn from "@/firebase/auth/signin";
import logout from "@/firebase/auth/logout";
import { useRouter } from "next/navigation";
interface ModalProps {
	isOpen: boolean;
	onClose: () => void;
}

const LoginModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
	const [email, setEmail] = React.useState("");
	const [password, setPassword] = React.useState("");
	const [pop, setPop] = React.useState(false);
	const router = useRouter();

	const login = async () => {
		const { result, error } = await signIn(email, password);

		if (error) {
			return console.log(error);
		}

		// else successful
		console.log(result);
		return router.push("/user");
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
					<div className="flex py-2 px-1 justify-between">
						<Checkbox
							classNames={{
								label: "text-small",
							}}
						>
							Remember me
						</Checkbox>
						<Link color="primary" href="#" size="sm">
							Forgot password?
						</Link>
					</div>
				</ModalBody>
				<ModalFooter>
					<Button color="danger" variant="flat" onPress={onClose}>
						Close
					</Button>
					<Button
						color="primary"
						onPress={() => {
							if (email.length > 8 && password.length >= 6) {
								login();
								onClose();
							} else {
								return alert("Please fill in all the details!");
							}
						}}
					>
						Sign in
					</Button>
				</ModalFooter>
			</ModalContent>
		</Modal>
	);
};
export default LoginModal;
