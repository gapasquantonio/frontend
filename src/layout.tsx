import { Outlet } from 'react-router-dom';
import styled from '@emotion/styled';
import TopNavigation from './features/top-navigation';

const PageContainer = styled.div`
	background-color: gray;
	height: calc(100vh - 57px);
`;

const ContentContainer = styled.div`
	justify-content: center;
	overflow-y: auto;
	transition: all 0.25s ease-in 0s;
	height: calc(100vh - 57px);
	box-sizing: border-box;
	margin-left: 0px;
	> :not(#sub-navigation):not(:empty) {
		margin-bottom: 0px !important;
		margin-left: auto;
		margin-right: auto;
	}
	@media print {
		margin-left: 0px;
	}
`;

export default function Layout() {
	return (
		<>
			<TopNavigation />
			<PageContainer>
				<ContentContainer>
					<Outlet />
				</ContentContainer>
			</PageContainer>
		</>
	);
}
