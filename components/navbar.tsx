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
import { useRouter } from "next/navigation";
//  function handleDropdown(key:any) {

// 		console.log(key)

// 		return(

// 		)
// };
export const Navbar = () => {
	const router = useRouter();
	const [email, setEmail] = React.useState("");
	const [password, setPassword] = React.useState("");
	const [pop, setPop] = React.useState(false);
	const login = async () => {
		const { result, error } = await signIn(email, password);

		if (error) {
			return console.log(error);
		}

		// else successful
		console.log(result);
		return router.push("/about");
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
	var rightButton;

	var navItems = [
		{
			label: "Home",
			href: "/",
		},
		{
			label: "Events Around The World",
			href: "/events",
		},
	];
	if (pathname == "/") {
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
						onOpen();
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
		navItems = [
			{
				label: "Home",
				href: "/",
			},
		];
	} else if (pathname == "/individualUser") {
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

					<Modal
						isOpen={isOpen}
						onOpenChange={onOpenChange}
						placement="top-center"
					>
						{selectedKeys == "login" ? (
							<ModalContent>
								{(onClose) => (
									<>
										<ModalHeader className="flex flex-col gap-1">
											Login
										</ModalHeader>
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
											<Popover
												isOpen={pop}
												onOpenChange={(open) => setPop(open)}
											>
												<PopoverTrigger>
													<Button
														color="primary"
														onPress={() => {
															if (email.length > 8 && password.length >= 6) {
																login();
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
														<div className="text-tiny">
															Please fill in full details
														</div>
													</div>
												</PopoverContent>
											</Popover>
										</ModalFooter>
									</>
								)}
							</ModalContent>
						) : selectedKeys == "signup" ? (
							<h1>signup</h1>
						) : (
							<h1>register</h1>
						)}
					</Modal>
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
