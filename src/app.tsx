import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { css, Global } from '@emotion/react';
import { Helmet } from 'react-helmet';
import { useResizeDetector } from 'react-resize-detector';
import { DeviceProvider } from './contexts/device';
import Pages from './pages';

const globalStyles = css`
	html,
	body,
	#root,
	#main {
		height: 100%;
		margin: 0;
	}
`;

const fullHeightAndWidth = {
	width: '100vw',
	height: '100vh',
};

export default function App() {
	const { width, ref } = useResizeDetector({ handleHeight: false });
	const PagesCasted = Pages as unknown as React.FC;
	return (
		<BrowserRouter>
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
								<PagesCasted />
							</div>
						</DeviceProvider>
					}
				/>
			</Routes>
		</BrowserRouter>
	);
}
