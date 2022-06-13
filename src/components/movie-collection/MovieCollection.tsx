import React, { useRef, useState } from 'react';
import { Movie } from '../../../typings';

import { FaLongArrowAltLeft, FaLongArrowAltRight } from 'react-icons/fa';
import Image from 'next/image';
import { thumbnailUrl } from '../../lib/baseUrl';

type MovieCollectionProps = {
	title: string;
	collections: Array<Movie>;
};

const MovieCollection: React.FC<MovieCollectionProps> = ({
	title,
	collections,
}) => {
	const scrollRef = useRef<HTMLDivElement>(null);
	const [isScroll, setIsScroll] = useState<boolean>(false);

	const handleScroll = (scrollDirection: string) => {
		setIsScroll(true);

		if (scrollRef.current) {
			const { scrollLeft, clientWidth } = scrollRef.current;

			const scrollTo =
				scrollDirection === 'left'
					? scrollLeft - clientWidth
					: scrollLeft + clientWidth;

			scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
		}
	};

	return (
		<div className="h-44 space-y-1 md:space-y-2 mt-2 md:mt-16">
			<h2 className="text-xl md:text-2xl text-white font-bold">{title}</h2>
			<div className="relative group md:-ml-2">
				<FaLongArrowAltLeft
					onClick={() => handleScroll('left')}
					className={`${
						!isScroll && 'hidden'
					} group-hover:opacity-100 opacity-0 transition hover:scale-125 text-white absolute top-0 bottom-0 left-3 z-40 m-auto h-10 w-10`}
				/>

				<div
					ref={scrollRef}
					className="flex items-center space-x-1 md:space-x-3 lg:space-x-5 overflow-x-scroll md:p-2 scrollbar-hide"
				>
					{collections.map((collection) => (
						<div
							className="relative h-[8rem] min-w-[180px] cursor-pointer transition duration-300 ease-in-out md:h-[10rem] md:min-w-[260px] md:hover:scale-110"
							key={collection.id}
						>
							<Image
								src={`${thumbnailUrl}${
									collection.backdrop_path || collection.poster_path
								}`}
								layout="fill"
								objectFit="cover"
								className="rounded-md"
							/>
						</div>
					))}
				</div>

				<FaLongArrowAltRight
					onClick={() => handleScroll('right')}
					className={`group-hover:opacity-100 opacity-0 transition hover:scale-125 text-white absolute top-0 bottom-0 right-3 z-40 m-auto h-10 w-10`}
				/>
			</div>
		</div>
	);
};
export default MovieCollection;
