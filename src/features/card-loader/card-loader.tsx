/** @jsxImportSource @emotion/react */
import Box from '../../components/box';
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
