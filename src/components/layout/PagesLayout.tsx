import Head from 'next/head';
import React, { ReactElement } from 'react';
import Footer from '../footer/Footer';
import Header from '../header/Header';

type PagesLayoutProps = {
	title?: string;
	description?: string;
	children: React.ReactNode;
};

const PagesLayout: React.FC<PagesLayoutProps> = ({
	children,
	description,
	title,
}) => {
	return (
		<section className="w-screen min-h-screen overflow-hidden">
			<Head>
				<title>{title ? `H-MOVIES - ${title}` : 'H-MOVIES'}</title>
				{description && <meta name="description" content={description} />}
			</Head>
			<Header />
			<main className="min-h-[85vh]">{children}</main>
			<Footer />
		</section>
	);
};
export default PagesLayout;
