/** @jsxImportSource @emotion/react */
import styles, {
	BottomContainer,
	MainContainer,
	TopContainer,
	VerticalDivider,
} from './line-item-mini-card.styles';

import { ItemResult } from '../../types/ItemResult';
import useIsMobile from '../../hooks/is-mobile';

import { ImgDesktop, ImgMobile, RightArrowUpIcon } from '../../shared/icons';
import Box from '../box';
import Text from '../text';

export type LineItemMiniCardProps = {
	item: ItemResult;
};

export const LineItemCard = (props: LineItemMiniCardProps) => {
	const isMobile = useIsMobile();
	const { item } = props;

	const img = isMobile ? ImgMobile : ImgDesktop;

	return (
		<MainContainer isMobile={isMobile}>
			<TopContainer isMobile={isMobile}>
				<img src={img} alt="img result" />
			</TopContainer>
			<BottomContainer isMobile={isMobile}>
				<Box>
					<Text
						kind="label-sm"
						maxWidth={isMobile ? '90px' : '128px'}
						css={styles.textBox}
					>
						{item.details.description}
					</Text>
				</Box>
				<VerticalDivider />
				<Box css={styles.iconBox}>
					<img src={RightArrowUpIcon} alt="img result" />
				</Box>
			</BottomContainer>
		</MainContainer>
	);
};

export default LineItemCard;
