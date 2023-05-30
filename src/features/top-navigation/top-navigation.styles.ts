import styled from '@emotion/styled';
import { theme } from '../../theme';

export type TopNavContainerProps = {
	isMobile: boolean;
};
export const TopNavContainer = styled.div<TopNavContainerProps>`
	height: 100%;
	background-color: ${theme.colors.white};
	align-items: center;
	display: flex;
	flex-direction: column;
`;

export type ButtonOrgWrapperProps = {
	isMobile: boolean;
};
export const ButtonOrgWrapper = styled.div<ButtonOrgWrapperProps>`
	height: ${({ isMobile }) => (isMobile ? '68' : '80')}px;
	display: flex;
	justify-content: center;
	align-items: center;
`;
