/** @jsxImportSource @emotion/react */
import Text from '../../components/text';

import Box from '../../components/box';
import styles from './homepage.styles';

const Homepage: React.FC = () => {
	return (
		<Box css={styles.pageContainer}>
			<div css={styles.linhaGradiente} />
			<Box css={styles.pageFlex}>
				<Text kind="page-title">Catálogo</Text>
			</Box>
			<Box css={styles.contentBox}>
				<Text kind="body-title">Resultados</Text>
			</Box>
		</Box>
	);
};

export default Homepage;
