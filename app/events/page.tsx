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
							Israel riprip palestine and hamas and usa uk support em hehe
						</h4>
					</CardHeader>
					<Divider />
					<CardBody className="overflow-visible py-2">
						<p>
							We ought to provide our users a user-friendly envoirment to surf
							through live updates on various crisis going on around the
							world.We auto connects different rescue agencies nearby in case of
							calamity like earthquake/civil war or even a mere fire, our main
							objective is to prioritise the life of peoples.This application
							cuts shorts the time needed for agencies to provide backup and
							also comes with local donation through which users can donate
							online with free home pickup from their homes with direct NGO
							donations and supply reaching to the needy.
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
							src="/image2.jpg"
							width={380}
						/>
						<h4 className="font-bold text-large">
							Israel riprip palestine and hamas and usa uk support em hehe
						</h4>
					</CardHeader>
					<Divider />
					<CardBody className="overflow-visible py-2">
						<p>
							We ought to provide our users a user-friendly envoirment to surf
							through live updates on various crisis going on around the
							world.We auto connects different rescue agencies nearby in case of
							calamity like earthquake/civil war or even a mere fire, our main
							objective is to prioritise the life of peoples.This application
							cuts shorts the time needed for agencies to provide backup and
							also comes with local donation through which users can donate
							online with free home pickup from their homes with direct NGO
							donations and supply reaching to the needy.
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
							src="/image2.jpg"
							width={380}
						/>
						<h4 className="font-bold text-large">
							Israel riprip palestine and hamas and usa uk support em hehe
						</h4>
					</CardHeader>
					<Divider />

					<CardBody className="overflow-visible py-2">
						<p>
							We ought to provide our users a user-friendly envoirment to surf
							through live updates on various crisis going on around the
							world.We auto connects different rescue agencies nearby in case of
							calamity like earthquake/civil war or even a mere fire, our main
							objective is to prioritise the life of peoples.This application
							cuts shorts the time needed for agencies to provide backup and
							also comes with local donation through which users can donate
							online with free home pickup from their homes with direct NGO
							donations and supply reaching to the needy.
						</p>
					</CardBody>
				</Card>
			</div>
		</div>
	);
}
