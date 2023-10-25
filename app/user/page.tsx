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

export default function UserPage() {
	const { user } = useAuthContext();
	const router = useRouter();
	React.useEffect(() => {
		console.log(user);
		if (user.email == null) {
			console.log("should go");
			router.push("/");
		}
	}, [user]);

	return (
		<div className="grid grid-cols-12 grid-rows-1 ">
			<div className="col-span-4">
				<Card
					className="max-w-[400px] border-none bg-background/60 dark:bg-default-100/50 "
					isBlurred
					shadow="sm"
				>
					<CardHeader className="pb-2 pt-2 px-4 flex-col items-start">
						<Image
							className="object-cover rounded-xl"
							src="/image6.jpg"
							width={380}
						/>
						<h4 className="font-bold text-large">
						Navigating Peace: Israel and Palestine Seek Common Ground
						</h4>
					</CardHeader>
					<Divider />
					<CardBody className="overflow-visible py-4">
						<p>
						Amidst the longstanding Israel-Palestine conflict, recent developments hint at a shift towards peace. Diplomatic channels are active, fostering dialogue between the two nations. International pressure and grassroots movements are urging for resolution, prompting leaders to reconsider their approaches. While challenges persist, there’s a growing sense of optimism. Both Israelis and Palestinians, weary of the conflict's toll, are expressing a desire for coexistence. Humanitarian efforts and global mediation are playing crucial roles, offering a glimmer of hope. The world watches closely, hoping for a peaceful resolution, realizing that in this complex web of history and politics, the first steps towards lasting peace have never been more crucial. <Link href="https://en.wikipedia.org/wiki/History_of_the_Israeli%E2%80%93Palestinian_conflict">Israel-Palestine Conflict</Link> 
						  
						</p>
						<Button
							className=" text-white mt-1"
							variant="flat"
							color="primary"
							radius="lg"
							size="lg"
						>
							Donate Now
						</Button>
					</CardBody>
				</Card>
			</div>
			<div className="col-span-4">
				<Card className="max-w-[400px]" isBlurred shadow="sm">
					<CardHeader className="pb-2 pt-2 px-4 flex-col items-start">
						<Image
							alt="Card background"
							className="object-cover rounded-xl"
							src="/image7.jpg"
							width={380}
						/>
						<h4 className="font-bold text-large">
						Escalating Tensions: Ukraine and Russia Clash Amidst Political Strain
						</h4>
					</CardHeader>
					<Divider />
					<CardBody className="overflow-visible py-4">
						<p>
						Tensions between Ukraine and Russia have reached a critical point, raising international concerns. Recent clashes near the border have escalated the conflict, fueling fears of a wider regional crisis. Ukraine, determined to defend its sovereignty, faces a formidable challenge in navigating diplomatic solutions. The international community closely monitors this situation, urging restraint and peaceful dialogue to avoid further escalation. As geopolitical complexities intensify, there's a pressing need for careful diplomacy and international cooperation to quell the rising tensions, ensuring stability and security in the region. <Link href="https://en.wikipedia.org/wiki/Russo-Ukrainian_War">Russian-Ukraine Conflict</Link> 
							 
						</p>
						<Button
							className=" text-white mt-1"
							variant="flat"
							color="primary"
							radius="lg"
							size="lg"
						>
							Donate Now
						</Button>
					</CardBody>
				</Card>
			</div>
			<div className="col-span-4">
				<Card
					className="max-w-[400px] border-none bg-background/60 dark:bg-default-100/50 "
					isBlurred
					shadow="sm"
				>
					<CardHeader className="pb-2 pt-2 px-4 flex-col items-start">
						<Image
							className="object-cover rounded-xl"
							src="/image8.jpg"
							width={380}
						/>
						<h4 className="font-bold text-large">
							Major natural calamities all around the world
						</h4>
					</CardHeader>
					<Divider />

					<CardBody className="overflow-visible py-4">
						<p>
						    Many natural calamities take place throughout the world on daily basis.
							However some of them take place on a huge scale/in densely populated area which leads to huge
							loss of life.Our main motive was to prevent this by shortening the time and co-ordinating gap 
							between two different agencies to link and work together.Our main motive is to protect the
							high valued life of civilians in any case of war/calamity and make their situation stable.
							Donate here to make the fund reaching to non-profit operating NGO's which would help the needy.
						</p>
						<Button
							className=" text-white mt-1"
							variant="flat"
							color="primary"
							radius="lg"
							size="lg"
						>
							Donate Now
						</Button>
					</CardBody>
				</Card>
			</div>
		</div>
	);
}
