import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { BsFillPlayFill, BsInfoLg } from 'react-icons/bs';
import { Movie } from '../../../typings';
import { baseUrl } from '../../lib/baseUrl';

type BannerProps = {
	actionMovies: Array<Movie>;
};

const Banner: React.FC<BannerProps> = ({ actionMovies }) => {
	const [movie, setMovie] = useState<Movie | null>(null);

	useEffect(() => {
		setMovie(actionMovies[Math.floor(Math.random() * actionMovies.length)]);
	}, [actionMovies]);

	return (
		<div className="flex flex-col space-y-3 md:space-y-5 lg:space-y-8 justify-center lg:justify-end lg:h-[70vh]">
			<div className="absolute top-0 left-0 -z-20 w-screen h-[95vh]">
				<Image
					src={`${baseUrl}/${movie?.backdrop_path || movie?.poster_path}`}
					layout="fill"
					objectFit="cover"
				/>
			</div>

			<div className=" flex flex-col space-y-3 justify-center pt-16 md:mt-0">
				<h1 className="text-inherit text-gray-200 text-md md:text-2xl lg:text-4xl font-bold">
					{movie?.title || movie?.name || movie?.original_name}
				</h1>

				<p className="text-gray-100 max-w-xs md:max-w-lg lg:max-w-2xl text-xs md:text-lg lg:text-2xl">
					{movie?.overview}
				</p>

				<div className="flex item-center space-x-3">
					<button className="bg-btn flex items-center justify-center w-[10rem] h-12 rounded-full text-white font-bold hover:bg-cta text-2xl ">
						<BsFillPlayFill />
						Play
					</button>
					<button className="bg-btn flex items-center justify-center w-[10rem] h-12 rounded-full text-white font-bold hover:bg-cta text-2xl ">
						<BsInfoLg />
						Details
					</button>
				</div>
			</div>
		</div>
	);
};
export default Banner;
