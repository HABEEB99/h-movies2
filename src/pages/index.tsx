import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Banner from '../components/banner/Banner';
import PagesLayout from '../components/layout/PagesLayout';

import { Movie } from '../../typings';
import apiRequests from '../lib/apiRequests';
import { GetServerSideProps } from 'next';
import MovieCollection from '../components/movie-collection/MovieCollection';

type HomeProps = {
	netflixOriginals: Movie[];
	trendingNow: Movie[];
	topRated: Movie[];
	actionMovies: Movie[];
	comedyMovies: Movie[];
	horrorMovies: Movie[];
	romanceMovies: Movie[];
	documentaries: Movie[];
	// products: Product[]
};

const Home: React.FC<HomeProps> = ({
	netflixOriginals,
	actionMovies,
	comedyMovies,
	documentaries,
	horrorMovies,
	romanceMovies,
	topRated,
	trendingNow,
}) => {
	return (
		<PagesLayout title="Home Page" description="This is the home page">
			<div className="relative p-4 pb-0 md:pb-16">
				<Banner actionMovies={actionMovies} />
				<section className="mt-10">
					<MovieCollection title="Documentaries" collections={documentaries} />
					<MovieCollection
						title="Netflix Originals"
						collections={netflixOriginals}
					/>
					<MovieCollection title="Action" collections={actionMovies} />
					<MovieCollection title="Comedy" collections={comedyMovies} />
					<MovieCollection title="Horror" collections={horrorMovies} />
					<MovieCollection title="Romance" collections={romanceMovies} />
					<MovieCollection title="Top Rated" collections={topRated} />
					<MovieCollection title="Trending" collections={trendingNow} />
				</section>
			</div>
		</PagesLayout>
	);
};
export default Home;

export const getServerSideProps: GetServerSideProps = async () => {
	// const products = await getProducts(payments, {
	//   includePrices: true,
	//   activeOnly: true,
	// })
	//   .then((res) => res)
	//   .catch((error) => console.log(error.message))

	const [
		netflixOriginals,
		trendingNow,
		topRated,
		actionMovies,
		comedyMovies,
		horrorMovies,
		romanceMovies,
		documentaries,
	] = await Promise.all([
		fetch(apiRequests.fetchNetflixOriginals).then((res) => res.json()),
		fetch(apiRequests.fetchTrending).then((res) => res.json()),
		fetch(apiRequests.fetchTopRated).then((res) => res.json()),
		fetch(apiRequests.fetchActionMovies).then((res) => res.json()),
		fetch(apiRequests.fetchComedyMovies).then((res) => res.json()),
		fetch(apiRequests.fetchHorrorMovies).then((res) => res.json()),
		fetch(apiRequests.fetchRomanceMovies).then((res) => res.json()),
		fetch(apiRequests.fetchDocumentaries).then((res) => res.json()),
	]);

	return {
		props: {
			netflixOriginals: netflixOriginals.results,
			trendingNow: trendingNow.results,
			topRated: topRated.results,
			actionMovies: actionMovies.results,
			comedyMovies: comedyMovies.results,
			horrorMovies: horrorMovies.results,
			romanceMovies: romanceMovies.results,
			documentaries: documentaries.results,
		},
	};
};
