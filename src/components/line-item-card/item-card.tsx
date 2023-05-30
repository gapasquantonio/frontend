/** @jsxImportSource @emotion/react */
import React from 'react';
import styles, {
	BottomContainer,
	MainContainer,
	TopContainer,
	VerticalDivider,
} from './item-card.styles';
import { ItemResult } from '../../types/ItemResult';
import useIsMobile from '../../hooks/is-mobile';
import Box from '../box';
import Text from '../text';
import { RightArrowUpIcon } from '../../shared/icons';
import config from '../../config';

export type LineItemMiniCardProps = {
	item: ItemResult;
};

export const LineItemCard = (props: LineItemMiniCardProps) => {
	const isMobile = useIsMobile();
	const { item } = props;
	// eslint-disable-next-line no-console
	console.log(item);
	return (
		<MainContainer isMobile={isMobile}>
			<TopContainer isMobile={isMobile}>
				<img
					src={`${config.origins.blocks.imageApi}${item.id}.jpg`}
					alt={`${item.details}`}
				/>
			</TopContainer>
			<BottomContainer isMobile={isMobile}>
				<Box>
					<Text
						kind="label-sm"
						width={isMobile ? '90px' : '128px'}
						css={styles.textBox(isMobile)}
					>
						{item.details.description}
					</Text>
				</Box>
				<VerticalDivider isMobile={isMobile} />
				<Box css={styles.iconBox}>
					<img src={RightArrowUpIcon} alt="right arrow up icon" />
				</Box>
			</BottomContainer>
		</MainContainer>
	);
};

export default React.memo(LineItemCard);
