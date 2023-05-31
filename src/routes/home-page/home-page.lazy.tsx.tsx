import React, { lazy, Suspense } from 'react';
import LoaderBar from '../../components/LoaderBar/LoaderBar';

const HomePageLazy = lazy(() => import('./home-page'));

const defaultProps = { children: '' };

const HomePage = (
	props: JSX.IntrinsicAttributes & { children?: React.ReactNode },
): JSX.Element => (
	<Suspense fallback={<LoaderBar />}>
		<HomePageLazy {...props} />
	</Suspense>
);

HomePage.defaultProps = defaultProps;

export default HomePage;
