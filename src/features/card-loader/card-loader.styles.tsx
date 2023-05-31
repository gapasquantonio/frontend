import { css, keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import { MainContainerProps } from '../../components/line-item-card/item-card.styles';
import { theme } from '../../theme';

const animation = keyframes`
0% {
    background-color: ${theme.colors.loaderPrimary};
  }
  100% {
    background-color: ${theme.colors.loaderSecondary};
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
	flex-direction: column;
`;
export const BottomContainer = styled.div<MainContainerProps>`
	height: ${({ isMobile }) => (isMobile ? '46' : '36')}px;
	width: ${({ isMobile }) => (isMobile ? '138' : '176')}px;
	display: inline-flex;
	align-items: center;
`;

export const TopContainer = styled.div<MainContainerProps>`
	height: ${({ isMobile }) => (isMobile ? '137' : '198')}px;
	width: ${({ isMobile }) => (isMobile ? '138' : '176')}px;
	display: flex;
	justify-content: center;
	align-items: center;
`;
export default {
	skeleton,
};
