"use client";
import { useAuthContext } from "@/context/AuthContext";

import NextLink from "next/link";
import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import { Button } from "@nextui-org/button";
import { Image } from "@nextui-org/image";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Divider } from "@nextui-org/divider";
import { useRouter } from "next/navigation";
import React from "react";

import { db } from "../../config/firebase.config";
import { Input } from "@nextui-org/input";
import { MailIcon } from "@/components/icons";
import AgencyRegisterModal from "@/components/agencyRegisterModal";
import {
	getFirestore,
	collection,
	where,
	query,
	onSnapshot,
} from "firebase/firestore";
import {
	Modal,
	ModalContent,
	ModalHeader,
	ModalBody,
	ModalFooter,
	useDisclosure,
} from "@nextui-org/modal";
export default function AgencyPage() {
	type userDoc = {
		name: string;
		dob: string;
		email: string;
		agency: string;
	};
	const { user } = useAuthContext();
	const router = useRouter();
	const [open, setOpen] = React.useState(false);
	const [open2, setOpen2] = React.useState(false);

	const [agency, setAgency] = React.useState<string>();
	const [doc, setDoc] = React.useState<userDoc>();
	React.useEffect(() => {
		console.log(user);
		if (user.email == null) {
			console.log("should go");
			router.push("/");
		}
	}, [user]);
	function closed() {
		console.log("button pressed to close");
		return router.push("/");
	}
	var q = query(collection(db, "users"), where("email", "==", user.email));
	onSnapshot(q, (snapshot: any) => {
		snapshot.forEach((docu: any) => {
			setDoc(docu.data());
		});
	});
	function joinAgency() {
		// 	var q = query(collection(db, "agencies"), where("email", "==", user.email));
		// onSnapshot(q, (snapshot: any) => {
		// 	snapshot.forEach((docu: any) => {
		// 		setDoc(docu.data());
		// 	});
		// });
		console.log("ha");
	}
	const closeModal = () => {
		setOpen(false);
	};
	const closeModal2 = () => {
		setOpen2(false);
	};
	if (doc?.agency == "000000") {
		return (
			<section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
				<div className=" inline-block inlinemax-w-lg text-center justify-center">
					<h1
						className={title({ size: "lg", color: "violet", fullWidth: true })}
					>
						Agency
					</h1>
					<br />
					<h2 className={subtitle()}>Choose either to &nbsp;</h2>
					<h2 className={subtitle({ color: "violet" })}>Join Agency&nbsp;</h2>
					<h2 className={subtitle()}> or &nbsp;</h2>
					<h2 className={subtitle({ color: "violet" })}>
						Register Agency&nbsp;
					</h2>
				</div>
				<div className="inline-block mt-14 items-center justify-center">
					<Button
						color="primary"
						variant="bordered"
						size="lg"
						className="mr-10"
						onPress={() => {
							setOpen(true);
						}}
					>
						Join Agency
					</Button>

					<Button
						color="primary"
						variant="bordered"
						size="lg"
						className="mr-10"
						onPress={() => {
							setOpen2(true);
						}}
					>
						Register Agency
					</Button>

					<Modal isOpen={open} placement="top-center" onClose={closeModal}>
						<ModalContent>
							<ModalHeader className="flex flex-col gap-1">Login</ModalHeader>
							<ModalBody>
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
							</ModalBody>
							<ModalFooter>
								<Button color="danger" variant="flat" onPress={closeModal}>
									Close
								</Button>
								<Button
									color="primary"
									onPress={() => {
										if (agency?.length == 6) {
											joinAgency();
											setOpen(false);
										} else {
											return alert(
												"Please fill agency code to join an agency!"
											);
										}
									}}
								>
									Join Agency
								</Button>
							</ModalFooter>
						</ModalContent>
					</Modal>
					<AgencyRegisterModal isOpen={open2} onClose={closeModal2} />
				</div>
			</section>
		);
	}
}
