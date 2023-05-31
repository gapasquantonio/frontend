import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { css, Global } from '@emotion/react';
import { Helmet } from 'react-helmet';
import { useResizeDetector } from 'react-resize-detector';
import { QueryClient, QueryClientProvider } from 'react-query';
import { DeviceProvider } from './contexts/device';
import Pages from './pages';

const queryClient = new QueryClient();

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
			<QueryClientProvider client={queryClient}>
				<Routes>
					<Route
						path="*"
						element={
							<DeviceProvider width={width}>
								<Global styles={globalStyles} />
								<Helmet
									defaultTitle="Familias BIM | Blocks"
									titleTemplate="%s | Familias BIM | Block"
								/>
								<div css={fullHeightAndWidth} ref={ref}>
									<PagesCasted />
								</div>
							</DeviceProvider>
						}
					/>
				</Routes>
			</QueryClientProvider>
		</BrowserRouter>
	);
}
