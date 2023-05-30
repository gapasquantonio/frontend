import { Outlet } from 'react-router-dom';
import styled from '@emotion/styled';
import TopNavigation from './features/top-navigation';
import useIsMobile from './hooks/is-mobile';

export type TopNavContainerProps = {
	isMobile: boolean;
};
const PageContainer = styled.div<TopNavContainerProps>`
	background-color: #fbfbfb;
	height: calc(100vh - ${({ isMobile }) => (isMobile ? '68' : '80')}px);
`;

const ContentContainer = styled.div<TopNavContainerProps>`
	display: flex;
	max-width: 1329px;
	margin: auto;
	height: calc(100vh - ${({ isMobile }) => (isMobile ? '68' : '80')}px);
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
		</>
	);
}
