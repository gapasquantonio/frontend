import styled from '@emotion/styled';

export type TopNavContainerProps = {
	isMobile: boolean;
};
export const FixedBannerContainer = styled.div<TopNavContainerProps>`
	width: 100%;
	justify-content: center;
	height: 67px;
	background: rgba(36, 36, 36, 0.75);
	backdrop-filter: blur(20px);
	align-items: center;
	display: flex;
	gap: 18px;
`;
