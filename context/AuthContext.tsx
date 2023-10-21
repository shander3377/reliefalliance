"use client";
import React, { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged, getAuth } from "firebase/auth";
import firebase_app from "@/firebase/config";
const auth = getAuth(firebase_app);

// User data type interface
// Create auth context
export const AuthContext = createContext({});

// Make auth context available across the app by exporting it
export const useAuthContext = () => useContext<any>(AuthContext);
interface UserType {
	email: string | null;
	uid: string | null;
}

// Create the auth context provider
export const AuthContextProvider = ({
	children,
}: {
	children: React.ReactNode;
}) => {
	// Define the constants for the user and loading state
	const [user, setUser] = useState<UserType>({ email: null, uid: null });
	const [loading, setLoading] = useState<Boolean>(true);

	// Update the state depending on auth
	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			if (user) {
				setUser({
					email: user.email,
					uid: user.uid,
				});
			} else {
				setUser({ email: null, uid: null });
			}
			setLoading(false);
		});

		return () => unsubscribe();
	}, []);

	return (
		<AuthContext.Provider value={{ user }}>
			{loading ? <div>Loading...</div> : children}
		</AuthContext.Provider>
	);
};
