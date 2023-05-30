/** @jsxImportSource @emotion/react */
import React from 'react';
import Box from '../../components/box';
import useIsMobile from '../../hooks/is-mobile';
import styles, {
	MainContainer,
	BottomContainer,
	TopContainer,
} from './card-loader.styles';

const LoaderCard = (): JSX.Element => {
	const isMobile = useIsMobile();
	return (
		<MainContainer color="white" isMobile={isMobile}>
			<TopContainer isMobile={isMobile}>
				<Box
					css={styles.skeleton}
					width={isMobile ? '138px' : '176px'}
					height={isMobile ? '137px' : '198px'}
				/>
			</TopContainer>
			<BottomContainer isMobile={isMobile}>
				<Box
					width={isMobile ? '138px' : '176px'}
					height={isMobile ? '46px' : '36px'}
					css={styles.skeleton}
				/>
			</BottomContainer>
		</MainContainer>
	);
};

export default React.memo(LoaderCard);
