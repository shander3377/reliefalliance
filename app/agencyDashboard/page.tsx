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
import addData from "@/firebase/firestore/addData";

import { Tooltip } from "@nextui-org/tooltip";
import { db } from "../../config/firebase.config";
import { Input } from "@nextui-org/input";
import { MailIcon } from "@/components/icons";
import AgencyRegisterModal from "@/components/agencyRegisterModal";
import { EditIcon } from "./EditIcon";
import { DeleteIcon } from "./DeleteIcon";
import { EyeIcon } from "./EyeIcon";
import { Chip, ChipProps } from "@nextui-org/chip";
import Chat from "../../components/chat";
import {
	getFirestore,
	collection,
	where,
	query,
	onSnapshot,
	updateDoc,
	doc,
	getDocs,
	setDoc,
	addDoc,
	arrayUnion,
} from "firebase/firestore";
import {
	Modal,
	ModalContent,
	ModalHeader,
	ModalBody,
	ModalFooter,
	useDisclosure,
} from "@nextui-org/modal";

import {
	Table,
	TableHeader,
	TableColumn,
	TableBody,
	TableRow,
	TableCell,
	getKeyValue,
} from "@nextui-org/table";
import { Tabs, Tab } from "@nextui-org/tabs";

const statusColorMap: Record<string, ChipProps["color"]> = {
	ongoing: "success",
	paused: "danger",
	vacation: "warning",
};
type Cry = {
	key: string;
	location: string;
	agencies: string[];
	title: string;
	description: string;
	status: string;
}[];
export default function AgencyDashboardPage() {
	type userDoc = {
		name: string;
		dob: string;
		email: string;
		agency: string;
		head: boolean;
		crisis: boolean;
		crisisId: string;
	};
	const [cd, setCd] = React.useState<Cry | null>(null);
	// var allCrisis: any;
	const { user } = useAuthContext();
	const router = useRouter();
	const [title, setTitle] = React.useState("");
	const [description, setDescription] = React.useState("");
	const [location, setLocation] = React.useState("");

	const [agency, setAgency] = React.useState<string>();
	const [docc, setDocc] = React.useState<userDoc>();
	const [docId, setDocId] = React.useState<string>();
	React.useEffect(() => {
		async function getData() {
			var q = query(collection(db, "users"), where("email", "==", user.email));
			var snapshot = await getDocs(q);
			snapshot.forEach(async (docu: any) => {
				setDocc(await docu.data());
				setDocId(docu.id);
				if (docu.data()) {
					if (docu.data().agency === "000000") {
						router.push("/agency");
					} else {
						console.log(docc);

						if (docu.data().head) {
							setDisabledKey("");
						}
					}
				}
			});
			async function meoww() {
				const documentsRef = collection(db, "crisis"); // Replace 'your_collection_name' with the name of your collection
				const querySnapshot = await getDocs(documentsRef);
				var news: any = [];

				querySnapshot.forEach((doc) => {
					var docData = doc.data();
					var heheee = {
						key: doc.id,
						location: docData.location,
						agencies: docData.agencies,
						title: docData.title,
						description: docData.description,
						status: docData.status,
					};
					news.push(heheee);
				});

				return news;
			}
			var hehe = meoww();
			hehe.then((value: Cry) => {
				setCd(value);
			});
		}
		console.log(user);
		if (user.email == null) {
			console.log("should go");
			router.push("/");
		} else {
			getData();
		}
	}, [user]);
	// const [allCrisis, setAllCrisis] = React.useState();
	// async function gc() {
	// 	const documentsRef = collection(db, "crisis"); // Replace 'your_collection_name' with the name of your collection
	// 	const querySnapshot = await getDocs(documentsRef);
	// 	var news: any = [];

	// 	querySnapshot.forEach((doc) => {

	// 	news.map((value: any, index: any) => {
	// 		console.log("meow");
	// 		console.log(value, index);
	// 	});
	// 	console.log(news);
	// 	return news;
	// }
	async function joinCrisis(id: string) {
		const userDoc = doc(collection(db, "users"), docId);
		if (docc?.head == true) {
			updateDoc(userDoc, {
				crisis: true,
				crisisId: id,
			});
			console.log(docc?.agency);
			var q = query(
				collection(db, "agencies"),
				where("agencyCode", "==", docc?.agency)
			);
			var snapshot = await getDocs(q);
			snapshot.forEach(async (docu: any) => {
				const agencyDoc = doc(collection(db, "agencies"), docu.id);
				updateDoc(agencyDoc, {
					crisis: true,
					crisisId: id,
				});
			});

			var q2 = doc(collection(db, "crisis"), id);
			updateDoc(q2, {
				agencies: arrayUnion(docc?.agency),
			});
		} else {
			alert("Only available for agency heads");
		}
	}
	const GetCrisis = () => {
		const columns = [
			{ name: "TITLE", uid: "title" },
			{ name: "DESCRIPTION", uid: "description" },
			{ name: "STATUS", uid: "status" },
			{ name: "LOCATION", uid: "location" },
			{ name: "ACTIONS", uid: "actions" },
		];
		if (cd) {
			return (
				<Table
					aria-label="Example table with dynamic content"
					selectionBehavior="replace"
					onRowAction={(key) => alert(key)}
				>
					<TableHeader columns={columns}>
						{(column) => (
							<TableColumn key={column.uid}>{column.name}</TableColumn>
						)}
					</TableHeader>
					<TableBody>
						{cd.map((row) => (
							<TableRow key={row.key}>
								{(columnKey) => {
									if (columnKey !== "actions") {
										return <TableCell>{getKeyValue(row, columnKey)}</TableCell>;
									} else {
										return (
											<TableCell>
												<Tooltip content="Join Agency">
													<button
														onClick={() => {
															joinCrisis(row.key);
														}}
													>
														<span className="text-lg text-default-400 cursor-pointer active:opacity-50">
															<MailIcon />
														</span>
													</button>
												</Tooltip>
											</TableCell>
										);
									}
								}}
							</TableRow>
						))}
					</TableBody>
				</Table>
			);
		}
	};

	async function createCrisis() {
		var data = {
			title: title,
			description: description,
			location: location,
			agencies: [docc?.agency],
			status: "ongoing",
		};
		var colref = collection(db, "crisis");
		var hehe = await addDoc(colref, data);
		var id = hehe.id;
		console.log(id);
		const userDoc = doc(collection(db, "users"), docId);
		updateDoc(userDoc, {
			crisis: true,
			crisisId: id,
		});
		console.log(docc?.agency);
		var q = query(
			collection(db, "agencies"),
			where("agencyCode", "==", docc?.agency)
		);
		var snapshot = await getDocs(q);
		snapshot.forEach(async (docu: any) => {
			const agencyDoc = doc(collection(db, "agencies"), docu.id);
			updateDoc(agencyDoc, {
				crisis: true,
				crisisId: id,
			});
		});
		alert("Crisis Created");
	}
	const [disabledKey, setDisabledKey] = React.useState("create");

	interface Crisis {
		agencies: string[];
		description: string;

		key: string;
		location: string;
		status: string;
		title: string;
	}

	// getCrisis();
	if (!docc?.crisis) {
		return (
			<section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
				<div className=" inline-block inlinemax-w-lg text-center justify-center">
					<Tabs
						key="windows"
						variant="bordered"
						aria-label="Tabs variants"
						color="primary"
						disabledKeys={[disabledKey]}
					>
						<Tab title="All Crises" key="all">
							<GetCrisis />
						</Tab>
						<Tab title="Neighboring Crises" key="near">
							<GetCrisis />
						</Tab>
						<Tab title="Create Cisis" key="create">
							<div>
								<Input
									autoFocus
									label="Title"
									placeholder="Enter crisis title"
									variant="bordered"
									onValueChange={(value: string) => {
										setTitle(value);
									}}
								/>
								<Input
									variant="bordered"
									className="mt-2"
									label="Location"
									placeholder="Enter crisis location"
									onValueChange={(value: string) => {
										setLocation(value);
									}}
								/>
								<Input
									variant="bordered"
									className="mt-2"
									label="Description"
									placeholder="Enter crisis location"
									onValueChange={(value: string) => {
										setDescription(value);
									}}
								/>
								<Button
									color="primary"
									className="object-right-top mt-5"
									onPress={() => {
										if (
											title.length > 2 &&
											title.length < 8 &&
											description.length > 2 &&
											description.length < 20 &&
											location.length > 6
										) {
											console.log("sabh valid hai");
											createCrisis();
										} else {
											return alert(
												"Please fill in all the details, title must be less than 8 characters, description less than 20 characters."
											);
										}
									}}
								>
									Register Crisis
								</Button>
							</div>
						</Tab>
					</Tabs>
				</div>
			</section>
		);
	} else {
		return (
			<section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
				<div className=" inline-block inlinemax-w-lg text-center justify-center">
					<Tabs
						key="windows"
						variant="bordered"
						aria-label="Tabs variants"
						color="primary"
						disabledKeys={[disabledKey]}
					>
						<Tab title="Chat" key="chat">
							<Chat userDoc={docc} />
						</Tab>
						<Tab title="Neighboring Crises" key="near" />
						<Tab title="Create Cisis" key="create">
							<div>
								<Input
									autoFocus
									label="Title"
									placeholder="Enter crisis title"
									variant="bordered"
									onValueChange={(value: string) => {
										setTitle(value);
									}}
								/>
								<Input
									variant="bordered"
									className="mt-2"
									label="Location"
									placeholder="Enter crisis location"
									onValueChange={(value: string) => {
										setLocation(value);
									}}
								/>
								<Input
									variant="bordered"
									className="mt-2"
									label="Description"
									placeholder="Enter crisis location"
									onValueChange={(value: string) => {
										setDescription(value);
									}}
								/>
								<Button
									color="primary"
									className="object-right-top mt-5"
									onPress={() => {
										if (
											title.length > 2 &&
											title.length < 8 &&
											description.length > 2 &&
											description.length < 20 &&
											location.length > 6
										) {
											console.log("sabh valid hai");
											createCrisis();
										} else {
											return alert(
												"Please fill in all the details, title must be less than 8 characters, description less than 20 characters."
											);
										}
									}}
								>
									Register Crisis
								</Button>
							</div>
						</Tab>
					</Tabs>
				</div>
			</section>
		);
	}
}
