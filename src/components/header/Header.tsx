import Link from 'next/link';
import React, { useEffect, useState } from 'react';

import { BiCameraMovie } from 'react-icons/bi';
import { ImMenu3, ImSearch } from 'react-icons/im';
import { FaUserCog } from 'react-icons/fa';
import SearchModal from '../modals/SearchModal';

type HeaderProps = {};

const Header: React.FC<HeaderProps> = () => {
	const [openSearchModal, setOpenSearchModal] = useState<boolean>(false);
	const [scroll, setScroll] = useState<boolean>(false);

	const handleScroll = () => {
		window.scrollY > 0 ? setScroll(true) : setScroll(false);
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);

		return () => window.removeEventListener('scroll', handleScroll);
	}, []);
	return (
		<header
			className={`h-[10vh] w-screen flex items-center justify-between transition-all ${
				scroll ? 'bg-header' : ''
			}  space-x-2 md:space-x-4 lg:space-x-8 px-3 sm:px-4 md:px-12 lg:px-32 fixed z-[10] top-0`}
		>
			<Link href="/" passHref>
				<div className="flex items-center space-x-1 group cursor-pointer">
					<BiCameraMovie className="text-xl md:text-3xl text-red-600 group-hover:animate-bounce font-bold" />
					<h3 className="text-xl  md:text-3xl text-red-400 font-bold">
						H-MOVIES
					</h3>
				</div>
			</Link>

			<div className="hidden  md:flex h-10 space-x-3 flex-1 items-center rounded-full border-2 border-gray-300 bg-gray-200 px-4 hover:border-btn ">
				<ImSearch className="text-xl font-bold text-btn" />
				<input
					type="text"
					placeholder="Search for a movie"
					className=" flex-1 bg-transparent outline-none"
				/>
			</div>

			<div className="flex items-center space-x-3 text-btn  text-xl md:text-3xl">
				<ImSearch
					onClick={() => setOpenSearchModal(!openSearchModal)}
					className="hover:text-cta md:hidden"
				/>
				<FaUserCog className="hover:text-cta" />
				<ImMenu3 className="hover:text-cta" />
			</div>

			{openSearchModal && <SearchModal />}
		</header>
	);
};
export default Header;
