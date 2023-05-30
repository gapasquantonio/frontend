/* eslint-disable no-nested-ternary */
/** @jsxImportSource @emotion/react */
import { QueryFunctionContext, useInfiniteQuery } from 'react-query';

import React from 'react';
import LineItemMiniCard from '../../components/line-item-card';
import useBlocksApi from '../../hooks/queries';
import { ItemResult } from '../../types/ItemResult';
import Box from '../../components/box';
import styles from './board-result.styles';

export interface IInfinitePage {
	nextCursor: number | undefined;
	page: ItemResult[];
}
export type Orders = ItemResult[];
const KanbanColumn = () => {
	const blocksApi = useBlocksApi();

	const fetchProducts = ({ pageParam = 0 }: QueryFunctionContext) => {
		const data = blocksApi.getFamilies({
			skip: pageParam,
			...(pageParam || {}),
		});

		return data;
	};
	const {
		data,
		fetchNextPage,
		hasNextPage,
		isFetchingNextPage,
		isLoading,
		isIdle,
		isRefetching,
	} = useInfiniteQuery<ItemResult[], Error>('infinite', fetchProducts, {
		getNextPageParam: (
			lastPage: ItemResult[],
			allPages: ItemResult[][],
		) => {
			if (lastPage.length === 0) {
				return undefined;
			}

			return {
				skip: allPages.length * 10,
			};
		},
	});

	const showLoader =
		isLoading || isFetchingNextPage || isIdle || isRefetching;

	return showLoader ? (
		<>carregamdo</>
	) : (
		<Box flexWrap="wrap" display="flex" css={styles.imagesContainer}>
			{data?.pages.map((infinitePage, i) => {
				return (
					// eslint-disable-next-line react/no-array-index-key
					<React.Fragment key={i}>
						{infinitePage.map((result) => (
							<LineItemMiniCard
								item={{
									id: '1',
									premium: false,
									details: {
										name: 'a',
										description: 'ao',
									},
								}}
								key={result.id}
							/>
						))}
					</React.Fragment>
				);
			})}

			<button
				type="button"
				onClick={() => fetchNextPage()}
				disabled={!hasNextPage || isFetchingNextPage}
			>
				{isFetchingNextPage
					? 'Loading more...'
					: hasNextPage
					? 'Load More'
					: 'Nothing more to load'}
			</button>
		</Box>
	);
};

KanbanColumn.defaultProps = {
	isInitialLoading: false,
};

export default KanbanColumn;
