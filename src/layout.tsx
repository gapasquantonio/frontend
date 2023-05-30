import { Outlet } from 'react-router-dom';
import styled from '@emotion/styled';
import TopNavigation from './features/top-navigation';
import useIsMobile from './hooks/is-mobile';
import Footer from './features/footer';

export type TopNavContainerProps = {
	isMobile: boolean;
};
const PageContainer = styled.div<TopNavContainerProps>`
	background-color: #fbfbfb;
	height: calc(100vh - ${({ isMobile }) => (isMobile ? '68' : '212')}px);
`;

const ContentContainer = styled.div<TopNavContainerProps>`
	display: flex;

	margin: auto;
	height: calc(100vh - ${({ isMobile }) => (isMobile ? '68' : '212')}px);
`;

export default function Layout() {
	const isMobile = useIsMobile('mobileLandscape');

	return (
		<>
			<TopNavigation />
			<PageContainer isMobile={isMobile}>
				<ContentContainer isMobile={isMobile}>
					<Outlet />
				</ContentContainer>
			</PageContainer>
			<Footer />
		</>
	);
}
