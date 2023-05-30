/** @jsxImportSource @emotion/react */
import styles, {
	BottomContainer,
	MainContainer,
	TopContainer,
	VerticalDivider,
} from './line-item-mini-card.styles';

import { ItemResult } from '../../types/ItemResult';
import useIsMobile from '../../hooks/is-mobile';

import Box from '../box';
import Text from '../text';
import { RightArrowUpIcon } from '../../shared/icons';

export type LineItemMiniCardProps = {
	item: ItemResult;
};

export const LineItemCard = (props: LineItemMiniCardProps) => {
	const isMobile = useIsMobile();
	const { item } = props;

	return (
		<MainContainer isMobile={isMobile}>
			<TopContainer isMobile={isMobile}>
				<img
					src={`https://plugin-storage.nyc3.digitaloceanspaces.com/families/images/${item.id}.jpg`}
					alt="img result"
				/>
			</TopContainer>
			<BottomContainer isMobile={isMobile}>
				<Box>
					<Text
						kind="label-sm"
						maxWidth={isMobile ? '90px' : '128px'}
						css={styles.textBox(isMobile)}
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
