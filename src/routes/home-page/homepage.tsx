/** @jsxImportSource @emotion/react */
import Text from '../../components/text';

import Box from '../../components/box';
import styles from './homepage.styles';
import useIsMobile from '../../hooks/is-mobile';

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
			<Box css={styles.contentBox}>
				<Text kind="body-title">Resultados</Text>
			</Box>
		</Box>
	);
};

export default Homepage;
