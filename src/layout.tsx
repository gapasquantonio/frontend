import { Outlet } from 'react-router-dom';
import styled from '@emotion/styled';
import { useState } from 'react';
import TopNavigation from './features/top-navigation';
import useIsMobile from './hooks/is-mobile';
import Footer from './features/footer';

export type TopNavContainerProps = {
	headerAndFooterHeight: number;
};
const PageContainer = styled.div<TopNavContainerProps>`
	background-color: #fbfbfb;
	height: calc(
		100vh - ${({ headerAndFooterHeight }) => headerAndFooterHeight}px
	);
`;

const ContentContainer = styled.div<TopNavContainerProps>`
	display: flex;
	margin: auto;
	height: calc(
		100vh - ${({ headerAndFooterHeight }) => headerAndFooterHeight}px
	);
`;

export default function Layout() {
	const isMobile = useIsMobile();
	const [isBannerClosed, setBannerClosed] = useState<boolean>(false);

	const getFooterAndHeaderTotalHeigth = (): number => {
		if (!isMobile) {
			return 212;
		}
		if (!isBannerClosed) {
			return 438;
		}
		return 252;
	};

	return (
		<>
			<TopNavigation />
			<PageContainer
				headerAndFooterHeight={getFooterAndHeaderTotalHeigth()}
			>
				<ContentContainer
					headerAndFooterHeight={getFooterAndHeaderTotalHeigth()}
				>
					<Outlet />
				</ContentContainer>
			</PageContainer>
			<Footer
				setBannerClosed={setBannerClosed}
				isBannerClosed={isBannerClosed}
			/>
		</>
	);
}
