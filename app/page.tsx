// 			import NextLink from "next/link";
// import { Link } from "@nextui-org/link";
// import { Snippet } from "@nextui-org/snippet";
// import { Code } from "@nextui-org/code"
// import { button as buttonStyles } from "@nextui-org/theme";
// import { siteConfig } from "@/config/site";
// import { title, subtitle } from "@/components/primitives";
// import { GithubIcon } from "@/components/icons";
// import { Carousel } from "@/components/carousel/carousel";
// import { Button } from "@nextui-org/button"
// import {Image} from "@nextui-org/image"
// import {Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
// import {Divider} from "@nextui-org/react"
// export default function Home() {
// 	return (
// <section>
// 		<div className="max-w-[900px] gap-2 grid grid-cols-12 grid-rows-2 px-8">
// 		<Card className="col-span-12 sm:col-span-4 h-[300px]">
// 		  <CardHeader className="absolute z-10 top-1 flex-col !items-start">
// 			<p className="text-tiny text-white/60 uppercase font-bold">What to watch</p>
// 			<h4 className="text-white font-medium text-large">Stream the Acme event</h4>
// 		  </CardHeader>
// 		  <Image
// 			removeWrapper
// 			alt="Card background"
// 			className="z-0 w-full h-full object-cover"
// 			src="/images/card-example-4.jpeg"
// 		  />
// 		</Card>
// 		<Card className="col-span-12 sm:col-span-4 h-[300px]">
// 		  <CardHeader className="absolute z-10 top-1 flex-col !items-start">
// 			<p className="text-tiny text-white/60 uppercase font-bold">Plant a tree</p>
// 			<h4 className="text-white font-medium text-large">Contribute to the planet</h4>
// 		  </CardHeader>
// 		  <Image
// 			removeWrapper
// 			alt="Card background"
// 			className="z-0 w-full h-full object-cover"
// 			src="/images/card-example-3.jpeg"
// 		  />
// 		</Card>
// 		<Card className="col-span-12 sm:col-span-4 h-[300px]">
// 		  <CardHeader className="absolute z-10 top-1 flex-col !items-start">
// 			<p className="text-tiny text-white/60 uppercase font-bold">Supercharged</p>
// 			<h4 className="text-white font-medium text-large">Creates beauty like a beast</h4>
// 		  </CardHeader>
// 		  <Image
// 			removeWrapper
// 			alt="Card background"
// 			className="z-0 w-full h-full object-cover"
// 			src="/images/card-example-2.jpeg"
// 		  />
// 		</Card>
// 		<Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-5">
// 		  <CardHeader className="absolute z-10 top-1 flex-col items-start">
// 			<p className="text-tiny text-white/60 uppercase font-bold">New</p>
// 			<h4 className="text-black font-medium text-2xl">Acme camera</h4>
// 		  </CardHeader>
// 		  <Image
// 			removeWrapper
// 			alt="Card example background"
// 			className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
// 			src="/images/card-example-6.jpeg"
// 		  />
// 		  <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
// 			<div>
// 			  <p className="text-black text-tiny">Available soon.</p>
// 			  <p className="text-black text-tiny">Get notified.</p>
// 			</div>
// 			<Button className="text-tiny" color="primary" radius="full" size="sm">
// 			  Notify Me
// 			</Button>
// 		  </CardFooter>
// 		</Card>
// 		<Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-7">
// 		  <CardHeader className="absolute z-10 top-1 flex-col items-start">
// 			<p className="text-tiny text-white/60 uppercase font-bold">Your day your way</p>
// 			<h4 className="text-white/90 font-medium text-xl">Your checklist for better sleep</h4>
// 		  </CardHeader>
// 		  <Image
// 			removeWrapper
// 			alt="Relaxing app background"
// 			className="z-0 w-full h-full object-cover"
// 			src="/images/card-example-5.jpeg"
// 		  />
// 		  <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
// 			<div className="flex flex-grow gap-2 items-center">
// 			  <Image
// 				alt="Breathing app icon"
// 				className="rounded-full w-10 h-11 bg-black"
// 				src="/images/breathing-app-icon.jpeg"
// 			  />
// 			  <div className="flex flex-col">
// 				<p className="text-tiny text-white/60">Breathing App</p>
// 				<p className="text-tiny text-white/60">Get a good night's sleep.</p>
// 			  </div>
// 			</div>
// 			<Button radius="full" size="sm">Get App</Button>
// 		  </CardFooter>
// 		</Card>
// 			</div>
// 			<Divider className="my-4" orientation="vertical"/>
// 			</section>
// 	);
// }
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
export default function Home() {
	// const { user } = useAuthContext();
	// const router = useRouter();
	// React.useEffect(() => {
	// 	console.log(user);
	// 	if (user.email !== null) {
	// 		console.log("should go");
	// 		router.push("/user");
	// 	}
	// }, [user]);

	return (
		<div className="grid grid-cols-12 grid-rows-1 ">
			<div className="col-span-7">
				<div className="gap-2 grid grid-cols-12 grid-rows-2 ">
					<Card className="col-span-12 sm:col-span-4 h-[300px]">
						<CardHeader className="absolute z-10 top-1 flex-col !items-start">
							<p className="text-tiny text-red-600 uppercase font-bold">
								Live Articles
							</p>
							<h4 className="text-red-600 font-medium text-large">
								Surf through the live info
							</h4>
						</CardHeader>
						<Image
							removeWrapper
							alt="Card background"
							className="z-0 w-full h-full object-cover"
							src="/image1.jpg"
						/>
					</Card>
					<Card className="col-span-12 sm:col-span-4 h-[300px]">
						<CardHeader className="absolute z-10 top-1 flex-col !items-start">
							<p className="text-tiny text-black uppercase font-bold">
								Local Donation
							</p>
							<h4 className="text-black font-medium text-small">
								Donate to NGO's online/free pickup of goods
							</h4>
						</CardHeader>
						<Image
							removeWrapper
							alt="Card background"
							className="z-0 w-full h-full object-cover"
							src="/image3.jpg"
						/>
					</Card>
					<Card className="col-span-12 sm:col-span-4 h-[300px]">
						<CardHeader className="absolute z-10 top-1 flex-col !items-start">
							<p className="text-tiny text-green-600 uppercase font-bold">
								Around the world
							</p>
							<h4 className="text-green-600 font-medium text-large">
								Infos from around the world
							</h4>
						</CardHeader>
						<Image
							removeWrapper
							alt="Card background"
							className="z-0 w-full h-full object-cover"
							src="/image2.jpg"
						/>
					</Card>
					<Card
						isFooterBlurred
						className="w-full h-[300px] col-span-12 sm:col-span-5"
					>
						<CardHeader className="absolute z-10 top-1 flex-col items-start">
							<p className="text-tiny text-black-600 uppercase font-bold">
								Latest war updates
							</p>
							<h4 className="text-black-600 font-medium text-2xl">
								Join us now
							</h4>
						</CardHeader>
						<Image
							removeWrapper
							alt="Card example background"
							className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
							src="/image4.jpg"
						/>
						<CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
							<div>
								<p className="text-black text-tiny">Login/Singup Below</p>
								<p className="text-black text-tiny">
									Start providing aids to the needy from home!
								</p>
							</div>
							<Button
								className="text-tiny"
								color="primary"
								radius="full"
								size="sm"
							>
								Login/Signup
							</Button>
						</CardFooter>
					</Card>
					<Card
						isFooterBlurred
						className="w-full h-[300px] col-span-12 sm:col-span-7"
					>
						<CardHeader className="absolute z-10 top-1 flex-col items-start">
							<p className="text-tiny text-green-600 uppercase font-bold">
								Agency
							</p>
							<h4 className="text-green-600 font-medium text-xl">
								Agency Registration
							</h4>
						</CardHeader>
						<Image
							removeWrapper
							alt="Relaxing app background"
							className="z-0 w-full h-full object-cover"
							src="/image5.jpg"
						/>
						<CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
							<div className="flex flex-grow gap-2 items-center">
								<Image
									alt="Breathing app icon"
									className="rounded-full w-10 h-11 bg-black"
									src="/image5.jpg"
								/>
								<div className="flex flex-col">
									<p className="text-tiny text-blue-600">Agency Registration</p>
									<p className="text-tiny text-blue-600">
										Registration Portal for agency Registration
									</p>
								</div>
							</div>
							<Button radius="full" size="sm">
								Agency Registration/Login
							</Button>
						</CardFooter>
					</Card>
				</div>
			</div>

			<Divider orientation="vertical" className="h-full place-self-center " />
			<div className="col-span-4">
				<Card className="max-w-[400px]">
					<CardHeader className="flex gap-3">
						<Image
							alt="nextui logo"
							height={40}
							radius="sm"
							src="/logo.jpg"
							width={40}
						/>
						<div className="flex flex-col">
							<p className="text-md">ReliefAlliance</p>
							<p className="text-small text-default-500">Our Aim</p>
						</div>
					</CardHeader>
					<Divider />
					<CardBody>
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
					<Divider />
					<CardFooter>
						<Link isExternal showAnchorIcon href="login page link here">
							Login Now
						</Link>
					</CardFooter>
				</Card>
			</div>
		</div>
	);
}
