"use client";
import { title } from "@/components/primitives";
import { Button } from "@nextui-org/button";
import { useAuthContext } from "@/context/AuthContext";
import React from "react";
import { useRouter } from "next/navigation";

export default function AboutPage() {
	const { user } = useAuthContext();
	const router = useRouter();
	React.useEffect(() => {
		console.log(user);
		if (user.email == null) {
			console.log("should go");
			router.push("/");
		}
	}, [user]);

	return <h1>{user.email}</h1>;
}
