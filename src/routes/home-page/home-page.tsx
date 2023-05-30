/** @jsxImportSource @emotion/react */
import React from 'react';
import Text from '../../components/text';
import Box from '../../components/box';
import styles from './home-page.styles';
import useIsMobile from '../../hooks/is-mobile';
import BoardResul from '../../features/board-results';

const Homepage: React.FC = () => {
	const isMobile = useIsMobile();
	return (
		<Box css={styles.pageContainer}>
			<div css={styles.linhaGradiente} />
			<Box
				css={styles.pageFlex}
				paddingX={isMobile ? '14px' : '34px'}
				paddingY="29px"
				zIndex={2}
			>
				<Text kind="page-title">Catálogo</Text>
				<div css={styles.linhaGradienteUnderScore} />
			</Box>

			<BoardResul />
		</Box>
	);
};

export default Homepage;
