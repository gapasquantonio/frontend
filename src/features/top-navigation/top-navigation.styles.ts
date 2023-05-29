import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { theme } from '@xometry/xometry_loft';

export type TopNavContainerProps = {
	isMobile: boolean;
};
export const TopNavContainer = styled.div<TopNavContainerProps>`
	height: 56px;
	padding: 0px ${({ isMobile }) => (isMobile ? '16' : '24')}px;
	background-color: ${theme.colors.white};
	display: flex;
	flex-direction: row;
	overflow: visible;
	align-items: center;
	box-shadow: 0px 1px 0px ${theme.colors.darkBlues[10]};
	margin-bottom: 1px;
	@media print {
		display: none;
	}
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

export const OrgLogo = styled.div`
	${theme.mediaQueries.small} {
		width: 154px;
	}
	max-width: 222px;
	min-width: 154px;
`;

export const ButtonOrgWrapper = styled.div`
	${theme.mediaQueries.small} {
		width: 202px;
		margin-right: 24px;
	}
	display: flex;
	width: 270px;
`;

export const OrgName = css`
	width: 100%;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	font-size: ${theme.fontSizes[2]};
	font-weight: ${theme.fontWeights.semibold};
	line-height: ${theme.lineHeights[3]};
	color: ${theme.colors.darkBlues[100]};
`;
