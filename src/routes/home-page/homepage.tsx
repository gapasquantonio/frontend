/** @jsxImportSource @emotion/react */
import Text from '../../components/text';

import Box from '../../components/box';
import styles from './homepage.styles';
import useIsMobile from '../../hooks/is-mobile';
import BoardResul from '../../features/board-results';

const Homepage: React.FC = () => {
	const isMobile = useIsMobile();
	return (
		<Box css={styles.pageContainer}>
			<div css={styles.linhaGradiente} />
			<Box
				css={styles.pageFlex}
				paddingLeft={isMobile ? '14px' : '199px'}
				paddingY="29px"
			>
				<Text kind="page-title">Catálogo</Text>
				<div css={styles.linhaGradienteUnderScore} />
			</Box>
			<Box
				paddingLeft={isMobile ? '14px' : '199px'}
				paddingTop={isMobile ? '28px' : '34px'}
			>
				<Box paddingBottom={isMobile ? '14px' : '18px'}>
					<Text kind="body-title">Resultados</Text>
				</Box>
				<BoardResul />
			</Box>
		</Box>
	);
};

export default Homepage;
