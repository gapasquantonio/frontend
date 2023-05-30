import { css } from '@emotion/react';
import styled from '@emotion/styled';

export type MainContainerProps = {
	isMobile: boolean;
};

const MainContainer = styled.div<MainContainerProps>`
	height: ${({ isMobile }) => (isMobile ? '183' : '234')}px;
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

	img {
		width: ${({ isMobile }) => (isMobile ? '70' : '92')}px;
		height: ${({ isMobile }) => (isMobile ? '114' : '149')}px;
		object-fit: cover;
	}
`;

const BottomContainer = styled.div<MainContainerProps>`
	height: ${({ isMobile }) => (isMobile ? '30' : '20')}px;
	width: ${({ isMobile }) => (isMobile ? '138' : '160')}px;
	display: inline-flex;
	align-items: center;
	padding: 8px;
	background: #ffffff;
	border-top: 1px solid #cccccc;
`;
const VerticalDivider = styled.div`
	margin-right: 8px !important;
	margin-left: 8px !important;
	width: 1px;
	height: 20px;
	background: #cccccc !important;
`;
const inlineBox = css(`
    display: inline-flex;
    justify-content: flex-start;
    align-items: center;
    align-content: center;
`);
const iconBox = css`
	display: flex;
	justify-content: center;
	align-content: center;
	align-items: center;
	margin-right: 7px;
`;
const textBox = css(`
    display: inline;
    -webkit-line-clamp: 2;
    text-overflow: ellipsis;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    word-wrap: break-word;
 
`);
export default {
	inlineBox,
	iconBox,
	textBox,
};
export { MainContainer, TopContainer, BottomContainer, VerticalDivider };
