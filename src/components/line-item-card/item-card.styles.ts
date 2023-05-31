import { css } from '@emotion/react';
import styled from '@emotion/styled';

export type MainContainerProps = {
	isMobile: boolean;
};

const MainContainer = styled.div<MainContainerProps>`
	height: ${({ isMobile }) => (isMobile ? '184' : '235')}px;
	width: ${({ isMobile }) => (isMobile ? '138' : '176')}px;
	border: 1px solid #cccccc;
	border-radius: 8px;
	backdrop-filter: blur(20px);
`;

const TopContainer = styled.div<MainContainerProps>`
	height: ${({ isMobile }) => (isMobile ? '137' : '198')}px;
	display: flex;
	justify-content: center;
	align-items: center;
	background: #ffffff;
	border-bottom: 1px solid #cccccc;
	border-radius: 8px 8px 0px 0px;
	img {
		width: ${({ isMobile }) => (isMobile ? '70' : '92')}px;
		height: ${({ isMobile }) => (isMobile ? '114' : '149')}px;
		object-fit: cover;
	}
`;

const BottomContainer = styled.div<MainContainerProps>`
	height: ${({ isMobile }) => (isMobile ? '30' : '20')}px;
	width: ${({ isMobile }) => (isMobile ? '122' : '160')}px;
	display: inline-flex;
	align-items: center;
	padding: 8px;
	border-radius: 8px;
	background: #ffffff;
`;
const VerticalDivider = styled.div<MainContainerProps>`
	height: ${({ isMobile }) => (isMobile ? '30' : '20')}px;
	margin-right: 8px !important;
	margin-left: 8px !important;
	border-left: 1px solid #cccccc;
`;
const iconBox = css`
	display: flex;
	justify-content: center;
	align-content: center;
	align-items: center;
	margin-right: 7px;
`;
const textBox = (isMobile: boolean) =>
	css(`
    display: inline;
    -webkit-line-clamp: ${isMobile ? '3' : '2'};
    text-overflow: ellipsis;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
	text-align: initial;
	word-break: break-word;
	hyphens: auto;
 
`);
export default {
	iconBox,
	textBox,
};
export { MainContainer, TopContainer, BottomContainer, VerticalDivider };
