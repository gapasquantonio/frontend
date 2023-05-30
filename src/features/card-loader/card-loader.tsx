/** @jsxImportSource @emotion/react */
import Box from '../../components/box';
import { VerticalDivider } from '../../components/line-item-card/line-item-mini-card.styles';
import useIsMobile from '../../hooks/is-mobile';
import styles, {
	MainContainer,
	BottomContainer,
	TopContainer,
} from './card-loader.styles';

const ResultMockCard = (): JSX.Element => {
	const isMobile = useIsMobile();
	return (
		<MainContainer color="white" isMobile={isMobile}>
			<TopContainer isMobile={isMobile}>
				<Box
					css={styles.skeleton}
					width={isMobile ? '90px' : '128px'}
					height={isMobile ? '114px' : '149px'}
				/>
			</TopContainer>
			<BottomContainer isMobile={isMobile}>
				<Box
					width={isMobile ? '90px' : '128px'}
					height={isMobile ? '30px' : '20px'}
					css={styles.skeleton}
				/>
				<VerticalDivider css={styles.skeleton} />
				<Box css={styles.skeleton} width="10px" height="8px" />
			</BottomContainer>
		</MainContainer>
	);
};
type CardLoaderProps = { numberOfMockedCards: number };

const CardLoader = (props: CardLoaderProps) => {
	const { numberOfMockedCards } = props;
	const isMobile = useIsMobile();
	return (
		<Box
			flexWrap="wrap"
			css={{ gap: '16px' }}
			flexDirection="row"
			display="flex"
			paddingLeft={isMobile ? '14px' : '199px'}
			overflow="auto"
		>
			{new Array(numberOfMockedCards)
				.fill(null)
				.map((_, index: number) => (
					// eslint-disable-next-line react/no-array-index-key
					<ResultMockCard key={index + 1} />
				))}
		</Box>
	);
};
export default CardLoader;
