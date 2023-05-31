import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import '@fortawesome/fontawesome-free/css/all.css';

import App from './app';
import LoaderBar from './components/LoaderBar/LoaderBar';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement,
);
root.render(
	<React.StrictMode>
		<Suspense fallback={<LoaderBar />}>
			<App />
		</Suspense>
	</React.StrictMode>,
);
