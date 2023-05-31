import styled from '@emotion/styled';
import { theme } from '../../theme';

export type FooterContainerProps = {
	isMobile: boolean;
};
export const FooterContainer = styled.div<FooterContainerProps>`
	height: 100%;
	background-color: ${theme.colors.footerBackground};
	align-items: ${({ isMobile }) => (isMobile ? 'flex-start' : 'center')};
	display: flex;
	flex-direction: column;
	z-index: 3;
`;
