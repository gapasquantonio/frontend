/* eslint-disable no-console */
/* eslint-disable no-nested-ternary */
/** @jsxImportSource @emotion/react */
import { QueryFunctionContext, useInfiniteQuery } from 'react-query';

import React, { useCallback, useEffect, useMemo, useRef } from 'react';
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
import useIsOverflow from '../../hooks/use-overflow';

export interface IInfinitePage {
	nextCursor: number | undefined;
	page: ItemResult[];
}
export type Orders = ItemResult[];
const BoardResult = () => {
	const blocksApi = useBlocksApi();
	const isMobile = useIsMobile();
	const isMobileOrTabletView = useIsMobile('mobileLandscape');
	const ref = useRef(null);
	const isOverflow = useIsOverflow(ref);

	console.log(isOverflow);
	const fetchProducts = ({ pageParam = 0 }: QueryFunctionContext) => {
		const data = blocksApi.getFamilies({
			skip: pageParam,
			limit: pageSize,
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
				skip: allPages.length * pageSize,
			};
		},
		staleTime: 10000,
	});

	const showLoader =
		isLoading || isFetchingNextPage || isIdle || isRefetching;
	const onScrolledBottom = useCallback(
		async (pageParam?: number) => {
			if (!hasNextPage || isFetchingNextPage) {
				return;
			}

			await fetchNextPage({ cancelRefetch: false, pageParam });
		},
		[fetchNextPage, isFetchingNextPage, hasNextPage],
	);

	const columnLength = useMemo(
		() => data?.pages.flat().length ?? 0,
		[data?.pages],
	);

	useEffect(() => {
		// If the first page is too small to trigger a scroll, fetch the next page immediately
		if (!isOverflow && hasNextPage) {
			onScrolledBottom(pageSize);
		}
	}, [columnLength, hasNextPage, isOverflow, onScrolledBottom]);

	const onScroll = (e: React.UIEvent<HTMLDivElement, UIEvent>) => {
		const scrolledSoFar =
			e.currentTarget.scrollHeight - e.currentTarget.scrollTop;

		const nearBottom = scrolledSoFar < e.currentTarget.clientHeight + 100;

		if (nearBottom) {
			onScrolledBottom?.();
		}
	};

	return (
		<Box
			paddingX={isMobile ? '14px' : '34px'}
			paddingTop={isMobile ? '28px' : '34px'}
			onScroll={onScroll}
			overflow="auto"
			ref={ref}
			css={styles.resultadosContainer}
		>
			<Box>
				<Box paddingBottom={isMobile ? '14px' : '18px'}>
					<Text kind="body-title">Resultados</Text>
				</Box>
				<Box
					flexWrap="wrap"
					display="flex"
					justifyContent={isMobileOrTabletView ? 'center' : 'start'}
					css={styles.imagesContainer}
				>
					{data?.pages.map((infinitePage, i) => {
						return (
							// eslint-disable-next-line react/no-array-index-key
							<React.Fragment key={i}>
								{infinitePage.map((item) =>
									!showLoader ? (
										<LineItemMiniCard
											item={item}
											key={item.id}
										/>
									) : (
										hasNextPage && (
											<ResultMockCard key={item.id} />
										)
									),
								)}
							</React.Fragment>
						);
					})}
					{!hasNextPage && !showLoader && <NoMoreResults />}
				</Box>
			</Box>
		</Box>
	);
};

BoardResult.defaultProps = {
	isInitialLoading: false,
};

export default BoardResult;
