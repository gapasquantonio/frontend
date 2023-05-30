import { css, keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import { MainContainerProps } from '../../components/line-item-card/line-item-mini-card.styles';

const animation = keyframes`
0% {
    background-color: #D835C5;
  }
  100% {
    background-color: #A11CF3;
  }
`;

const skeleton = css`
	animation: ${animation} 1s linear infinite alternate;
`;
export const MainContainer = styled.div<{ color: string; isMobile: boolean }>`
	display: flex;
	height: ${({ isMobile }) => (isMobile ? '183' : '234')}px;
	width: ${({ isMobile }) => (isMobile ? '138' : '176')}px;
	box-sizing: border-box;
	border: 1px solid #cccccc;
	border-radius: 8px;
	border-color: ${(props) => `${props.color}`};
	background: black;
	flex-direction: column;
`;
export const BottomContainer = styled.div<MainContainerProps>`
	height: ${({ isMobile }) => (isMobile ? '30' : '20')}px;
	width: ${({ isMobile }) => (isMobile ? '138' : '160')}px;
	display: inline-flex;
	align-items: center;
	margin: 8px;
`;

export const TopContainer = styled.div<MainContainerProps>`
	height: ${({ isMobile }) => (isMobile ? '137' : '198')}px;
	display: flex;
	justify-content: center;
	align-items: center;
	background: black;
`;
export default {
	skeleton,
};
