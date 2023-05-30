import styled from '@emotion/styled';

export type TopNavContainerProps = {
	isMobile: boolean;
};
export const FixedBannerContainer = styled.div<TopNavContainerProps>`
	width: 100%;
	justify-content: center;
	background: linear-gradient(90deg, #2e2e2e 0%, #1c1c1c 100%);
	backdrop-filter: blur(20px);
	align-items: center;
	display: flex;
`;
