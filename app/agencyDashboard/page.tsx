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
	updateDoc,
	doc,
	getDocs
} from "firebase/firestore";
import {
	Modal,
	ModalContent,
	ModalHeader,
	ModalBody,
	ModalFooter,
	useDisclosure,
} from "@nextui-org/modal";
export default function AgencyDashboardPage() {
	type userDoc = {
		name: string;
		dob: string;
		email: string;
		agency: string;
		head: boolean;
	};
	const { user } = useAuthContext();
	const router = useRouter();
	const [open, setOpen] = React.useState(false);
	const [open2, setOpen2] = React.useState(false);

	const [agency, setAgency] = React.useState<string>();
	const [docc, setDocc] = React.useState<userDoc>();
	const [docId, setDocId] = React.useState<string>();

	React.useEffect(() => {
		console.log(user);
		if (user.email == null) {
			console.log("should go");
			router.push("/");
		} else {
			const checkAgency = async function (): Promise<any> { 

			var q = query(collection(db, "users"), where("email", "==", user.email));
			var snapshot = await getDocs(q)
					snapshot.forEach(async (docu: any) => {
						var agencyCode = await docu.data().agency
						if(agencyCode === "000000"){
							console.log("should")
							return router.push("/agency")
						} 
					})		
				}
				checkAgency()
		}
	}, [user]);

	return(
		<h1>agency dashbaord</h1>
	)
}
