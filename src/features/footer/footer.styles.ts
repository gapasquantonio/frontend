import styled from '@emotion/styled';

export type FooterContainerProps = {
	isMobile: boolean;
};
export const FooterContainer = styled.div<FooterContainerProps>`
	height: 100%;
	background-color: #e9e9e9;
	align-items: ${({ isMobile }) => (isMobile ? 'flex-start' : 'center')};
	display: flex;
	flex-direction: column;
`;
