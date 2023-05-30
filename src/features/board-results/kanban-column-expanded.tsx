/* eslint-disable no-console */
import { SerializedStyles } from '@emotion/react';

import React from 'react';

import styles, { ExpandedColumnSection } from './board-result.styles';
import Box from '../../components/box';

interface KanbanColumnExpandedSectionProps {
	children?: React.ReactNode;
}

export const KanbanColumnExpandedSection = ({
	children,
}: KanbanColumnExpandedSectionProps) => {
	const containerStyles: SerializedStyles[] = [];

	let overlay: React.ReactNode;

	return (
		<ExpandedColumnSection css={containerStyles} flexGrow={1}>
			{children}
			{overlay}
		</ExpandedColumnSection>
	);
};

KanbanColumnExpandedSection.defaultProps = {
	children: null,
};

interface KanbanColumnExpandedProps {
	children?: React.ReactNode;
}

const KanbanColumnExpanded = ({ children }: KanbanColumnExpandedProps) => {
	const containerStyles: SerializedStyles[] = [styles.defaultExpandedColumn];

	return (
		<Box css={containerStyles}>
			<Box
				overflowY="auto"
				overflowX="hidden"
				height="100%"
				display="flex"
				flexDirection="column"
				position="relative"
			>
				{React.Children.map(children, (child) => {
					return child;
				})}
			</Box>
		</Box>
	);
};

KanbanColumnExpanded.defaultProps = {
	children: null,
};

export default KanbanColumnExpanded;
