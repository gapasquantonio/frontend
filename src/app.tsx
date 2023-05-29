import React from 'react';
import {
	Route,
	Routes,
	unstable_HistoryRouter as HistoryRouter,
} from 'react-router-dom';
import { css, Global } from '@emotion/react';
import { Helmet } from 'react-helmet';
import history from './history';
import { useResizeDetector } from 'react-resize-detector';
import { DeviceProvider } from './contexts/device';

const globalStyles = css`
	html,
	body,
	#root,
	#main {
		height: 100%;
	}
`;

const fullHeightAndWidth = {
	width: '100vw',
	height: '100vh',
};

export default function App() {
	const { width, ref } = useResizeDetector({ handleHeight: false });

	return (
		<div className="App">
			<HistoryRouter history={history}>
				<Routes>
					<Route
						path="*"
						element={
							<DeviceProvider width={width}>
								<Global styles={globalStyles} />
								<Helmet
									defaultTitle="Blocks"
									titleTemplate="%s | Block"
								/>
								<div css={fullHeightAndWidth} ref={ref}>
									pages here
								</div>
							</DeviceProvider>
						}
					/>
				</Routes>
			</HistoryRouter>
		</div>
	);
}
