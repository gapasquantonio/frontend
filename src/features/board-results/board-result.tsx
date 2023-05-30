/* eslint-disable no-nested-ternary */
/** @jsxImportSource @emotion/react */
import { QueryFunctionContext, useInfiniteQuery } from 'react-query';

import React, { useCallback, useEffect, useMemo } from 'react';
import LineItemMiniCard from '../../components/line-item-card';
import useBlocksApi from '../../hooks/queries';
import { ItemResult } from '../../types/ItemResult';
import Box from '../../components/box';
import styles from './board-result.styles';
import { pageSize } from './utils';
import Text from '../../components/text';
import useIsMobile from '../../hooks/is-mobile';
import { ResultMockCard } from '../card-loader/card-loader';
import NoMoreResults from '../no-more-results/no-more-results';

export interface IInfinitePage {
	nextCursor: number | undefined;
	page: ItemResult[];
}
export type Orders = ItemResult[];
const BoardResult = () => {
	const blocksApi = useBlocksApi();
	const isMobile = useIsMobile();

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
		staleTime: 10000,
	});

	const showLoader =
		isLoading || isFetchingNextPage || isIdle || isRefetching;
	const onScrolledBottom = useCallback(async () => {
		if (!hasNextPage || isFetchingNextPage) {
			return;
		}

		await fetchNextPage({ cancelRefetch: false });
	}, [fetchNextPage, isFetchingNextPage, hasNextPage]);

	const columnLength = useMemo(
		() => data?.pages.flat().length ?? 0,
		[data?.pages],
	);

	useEffect(() => {
		if (columnLength < pageSize && hasNextPage) {
			// If the first page is too small to trigger a scroll, fetch the next page immediately
			onScrolledBottom();
		}
	}, [columnLength, hasNextPage, onScrolledBottom]);
	const onScroll = (e: React.UIEvent<HTMLDivElement, UIEvent>) => {
		// eslint-disable-next-line no-console
		console.log(e);
		const scrolledSoFar =
			e.currentTarget.scrollHeight - e.currentTarget.scrollTop;

		const nearBottom = scrolledSoFar < e.currentTarget.clientHeight + 100;

		if (nearBottom) {
			onScrolledBottom?.();
		}
	};
	return (
		<Box
			paddingLeft={isMobile ? '14px' : '199px'}
			paddingTop={isMobile ? '28px' : '34px'}
			onScroll={onScroll}
			overflow="auto"
		>
			<Box>
				<Box paddingBottom={isMobile ? '14px' : '18px'}>
					<Text kind="body-title">Resultados</Text>
				</Box>
				<Box
					flexWrap="wrap"
					display="flex"
					css={styles.imagesContainer}
				>
					{data?.pages.map((infinitePage, i) => {
						return (
							// eslint-disable-next-line react/no-array-index-key
							<React.Fragment key={i}>
								{infinitePage.map((result) =>
									!showLoader ? (
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
									) : (
										hasNextPage && (
											<ResultMockCard key={result.id} />
										)
									),
								)}
							</React.Fragment>
						);
					})}
					{!hasNextPage && <NoMoreResults />}
				</Box>
			</Box>
		</Box>
	);
};

BoardResult.defaultProps = {
	isInitialLoading: false,
};

export default BoardResult;
