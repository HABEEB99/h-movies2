import { signOut } from 'firebase/auth';
import Link from 'next/link';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';

import { BiLogInCircle, BiLogOutCircle } from 'react-icons/bi';
import { auth } from '../../../firebase';

const UserModal: React.FC = () => {
	const [openUser, setOpenUser] = useState<boolean>(false);

	const [currentUser] = useAuthState(auth);

	const handleSignIn = () => {
		setOpenUser(true);
	};

	const handleSignOut = () => {
		signOut(auth);
		setOpenUser(false);
	};

	return (
		<div className="absolute top-20 right-8 flex h-20 w-60 items-center justify-center rounded-lg bg-header p-4 shadow-2xl">
			{!currentUser ? (
				<Link href="/signin" passHref>
					<button
						onClick={handleSignIn}
						className="flex h-full w-full items-center justify-center space-x-2 rounded-full bg-btn text-2xl font-bold text-white hover:bg-cta"
					>
						<BiLogInCircle className="mr-2 text-white" />
						Sign in
					</button>
				</Link>
			) : (
				<button
					onClick={handleSignOut}
					className="flex h-full w-full items-center justify-center space-x-2 rounded-full bg-red-500 text-2xl font-bold text-white hover:bg-red-700"
				>
					<BiLogOutCircle className="mr-2 text-white" />
					Sign out
				</button>
			)}
		</div>
	);
};
export default UserModal;
