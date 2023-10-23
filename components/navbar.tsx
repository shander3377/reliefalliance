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
import AgencyRegisterModal from "./agencyRegisterModal";
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
import LoginModal from "./loginModal";
import SignUpModal from "./signUpModal";
import { useAuthContext } from "@/context/AuthContext";

export const Navbar = () => {
	const router = useRouter();
	const [email, setEmail] = React.useState("");
	const [password, setPassword] = React.useState("");
	const [pop, setPop] = React.useState(false);
	const [isModalOpen, setModalOpen] = useState(false);
	const login = async () => {
		const { result, error } = await signIn(email, password);

		if (error) {
			return console.log(error);
		}

		// else successful
		console.log(result);
		return router.push("/about");
	};
	const signout = async () => {
		const { result, error } = await logout();

		if (error) {
			return console.log(error);
		}

		// else successful
		console.log(result);
		return router.push("/");
	};
	const { isOpen, onOpen, onOpenChange } = useDisclosure();
	const [selectedKeys, setSelectedKeys] = React.useState<React.Key | null>(
		null
	);

	// const { isOpen2, setIsOpen2} = useState(false);
	// const { isOpen3, setIsOpen3} = useState(false);

	const iconClasses =
		"text-xl text-default-500 pointer-events-none flex-shrink-0";
	const pathname = usePathname();

	var navItems: {
		label: string;
		href: string;
	}[] = [
		{
			label: "Home",
			href: "/",
		},
		{
			label: "Events Around The World",
			href: "/events",
		},
	];
	console.log(pathname);
	const closeModal = () => {
		setModalOpen(false);
	};
	const [loggedIn, setLoggedIn] = React.useState(false);
	const { user } = useAuthContext();
	React.useEffect(() => {
		console.log("hi" + user);
		if (user.email !== null) {
			setLoggedIn(true);
		} else {
			setLoggedIn(false);
		}
	}, [user]);
	console.log(loggedIn);
	var rightButton;

	if (pathname == "/") {
		navItems = [
			{
				label: "Home",
				href: "/",
			},
			{
				label: "Events Around The World",
				href: "/events",
			},
		];
	} else if (pathname == "/user") {
		navItems = [
			{
				label: "Home",
				href: "/",
			},
			{
				label: "Events Around The World",
				href: "/events",
			},
			{
				label: "Local Donation",
				href: "/donate",
			},
		];
	}
	if (!loggedIn) {
		rightButton = (
			<Dropdown>
				<DropdownTrigger>
					<Button
						isExternal
						as={Link}
						className="text-sm font-normal text-default-600 bg-default-100"
						startContent={<LoginIcon className="text-primary" />}
						variant="flat"
					>
						Login/Sign Up
					</Button>
				</DropdownTrigger>
				<DropdownMenu
					aria-label="Login Dropdown"
					onAction={(key: React.Key) => {
						setModalOpen(true);
						setSelectedKeys(key);
					}}
				>
					<DropdownItem
						key="login"
						startContent={<LoginIcon className={iconClasses} />}
					>
						User Login
					</DropdownItem>
					<DropdownItem
						key="signup"
						startContent={<SignUpIcon className={iconClasses} />}
					>
						User SignUp
					</DropdownItem>
					<DropdownItem
						key="register"
						startContent={<AgencyRegisterIcon className={iconClasses} />}
					>
						Agency Registeration
					</DropdownItem>
				</DropdownMenu>
			</Dropdown>
		);
	} else {
		rightButton = (
			<Button
				isExternal
				as={Link}
				className="text-sm font-normal text-default-600 bg-default-100"
				startContent={<LoginIcon className="text-danger" />}
				variant="flat"
				onPress={() => {
					signout();
				}}
			>
				Logout
			</Button>
		);
		var obv = {
			label: "Dashboard",
			href: "/user",
		};
		navItems.push(obv);
	}
	const searchInput = (
		<Input
			aria-label="Search"
			classNames={{
				inputWrapper: "bg-default-100",
				input: "text-sm",
			}}
			endContent={
				<Kbd className="hidden lg:inline-block" keys={["command"]}>
					K
				</Kbd>
			}
			labelPlacement="outside"
			placeholder="Search..."
			startContent={
				<SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
			}
			type="search"
		/>
	);

	return (
		<NextUINavbar maxWidth="xl" position="sticky">
			<NavbarContent className="basis-1/5 sm:basis-full" justify="start">
				<NavbarBrand as="li" className="gap-3 max-w-fit">
					<NextLink className="flex justify-start items-center gap-1" href="/">
						<Logo />
						<p className="font-bold text-inherit">Disaster</p>
					</NextLink>
				</NavbarBrand>
				<ul className="hidden lg:flex gap-4 justify-start ml-2">
					{navItems.map((item) => (
						<NavbarItem key={item.href}>
							<NextLink
								className={clsx(
									linkStyles({ color: "foreground" }),
									"data-[active=true]:text-primary data-[active=true]:font-medium"
								)}
								color="foreground"
								href={item.href}
							>
								{item.label}
							</NextLink>
						</NavbarItem>
					))}
				</ul>
			</NavbarContent>

			<NavbarContent
				className="hidden sm:flex basis-1/5 sm:basis-full"
				justify="end"
			>
				<NavbarItem className="hidden md:flex">
					{rightButton}

					{selectedKeys == "login" ? (
						<LoginModal isOpen={isModalOpen} onClose={closeModal} />
					) : selectedKeys == "signup" ? (
						<SignUpModal isOpen={isModalOpen} onClose={closeModal} />
					) : selectedKeys == "register" ? (
						<AgencyRegisterModal isOpen={isModalOpen} onClose={closeModal} />
					) : null}
				</NavbarItem>
			</NavbarContent>

			<NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
				<Link isExternal href={siteConfig.links.github} aria-label="Github">
					<GithubIcon className="text-default-500" />
				</Link>
				<ThemeSwitch />
				<NavbarMenuToggle />
			</NavbarContent>

			<NavbarMenu>
				{searchInput}
				<div className="mx-4 mt-2 flex flex-col gap-2">
					{siteConfig.navMenuItems.map((item, index) => (
						<NavbarMenuItem key={`${item}-${index}`}>
							<Link
								color={
									index === 2
										? "primary"
										: index === siteConfig.navMenuItems.length - 1
										? "danger"
										: "foreground"
								}
								href="#"
								size="lg"
							>
								{item.label}
							</Link>
						</NavbarMenuItem>
					))}
				</div>
			</NavbarMenu>
		</NextUINavbar>
	);
};
