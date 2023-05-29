import styled from '@emotion/styled';
import { css } from '@emotion/react';

export type TopNavContainerProps = {
	isMobile: boolean;
};
export const TopNavContainer = styled.div<TopNavContainerProps>`
	height: 100%;
	background-color: gray;
	display: flex;
	flex-direction: row;
	overflow: visible;
	align-items: center;
	box-shadow: 0px 1px 0px red;
	margin-bottom: 1px;
	display: flex;
	flex-direction: column;
`;

export const image = css`
	height: 32px;
`;

export const gravatar = css`
	height: 30px;
	border-radius: 100px;
`;

export const GravatarLogo = styled.span`
	text-overflow: ellipsis;
	overflow: hidden;
	display: flex;
	align-items: center;
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
