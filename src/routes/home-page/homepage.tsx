/** @jsxImportSource @emotion/react */
import Text from '../../components/text';

import Box from '../../components/box';
import styles from './homepage.styles';
import useIsMobile from '../../hooks/is-mobile';
import LineItemMiniCard from '../../components/line-item-card';

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
			<LineItemMiniCard
				item={{
					id: '1',
					premium: false,
					details: {
						name: 'a',
						description: 'ao',
					},
				}}
			/>
		</Box>
	);
};

export default Homepage;
