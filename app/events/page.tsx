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

export default function EventsPage() {
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
							Live updates on Israel Palestine conflict
						</h4>
					</CardHeader>
					<Divider />
					<CardBody className="overflow-visible py-2">
						<p>
						 Live updates on the Israel Palestine conflict covering all aspects of the
						 war.The war rose due to long history tensions shared between both two nations in past years
						 find all the related details here<a href="https://en.wikipedia.org/wiki/History_of_the_Israeli%E2%80%93Palestinian_conflict">(Israel-Palestine Conflict)</a>
						  Login now to donate and help the refugees situation become stable.
						</p>
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
						Live updates on Ukraine Russia conflict
						</h4>
					</CardHeader>
					<Divider />
					<CardBody className="overflow-visible py-2">
						<p>
							This has a similar case like the Israel conflict but basically reverse in terms of 
							starting of the war.This also has a huge background history of conflict between the two 
							nations if you want to see them click here <a href="https://en.wikipedia.org/wiki/Russo-Ukrainian_War">(Russian-Ukraine Conflict)</a>
							 Join our website now for live info and news and if already joined donate to help the refugees.
						</p>
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

					<CardBody className="overflow-visible py-2">
						<p>
							Many natural calamities take place throughout the world on daily basis.
							However some of them take place on a huge scale/in densely populated area which leads to huge
							loss of life.Our main motive was to prevent this by shortening the time and co-ordinating gap 
							between two different agencies to link and work together.Our main motive is to protect the
							high valued life of civilians in any case of war/calamity and make their situation stable.
							Donate here to make the fund reaching to non-profit operating NGO's which would help the needy.
						</p>
					</CardBody>
				</Card>
			</div>
		</div>
	);
}
