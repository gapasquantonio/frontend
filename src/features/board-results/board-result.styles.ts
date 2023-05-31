import { css } from '@emotion/react';
import styled from '@emotion/styled';
import Text from '../../components/text';

import Box from '../../components/box';
import theme from '../../theme';

const customBorder = css`
	// https://dev.to/afif/border-with-gradient-and-radius-387f
	// Magic happening here to make border radius work with border image

	position: relative;

	&::before {
		content: '';
		position: absolute;
		inset: 0;
		border-style: solid;
		border-width: 1px;
		border: dashed 1px $red; // use as fallback
		border-image-source: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABASURBVHgB7dWhEQAgDAPAhAEwbMlAbIlhATgsV9GDCkRe9q6RCXPtE4fRCuFg/drHSzsrIdj/gSLiorZ5xugJWPAMFmdSl+pAAAAAAElFTkSuQmCC');
		border-image-slice: 1;
		border-image-repeat: round;
		-webkit-mask: linear-gradient(#fff 0 0) padding-box,
			linear-gradient(#fff 0 0);
		-webkit-mask-composite: xor;
		mask-composite: exclude;
		// Prevent this border from interfering with drag-and-drop
		pointer-events: none;
	}
`;

const defaultExpandedColumn = css`
	display: flex;
	flex-direction: column;
	min-width: 216px;
	max-width: 216px;
	border-radius: 3px;
	height: 100%;
	min-height: 300px;
	background-color: rgba(230, 233, 236, 0.5);
`;

const defaultCollapsedColumn = css`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: min-content;
	border-radius: 3px;
	background-color: rgba(230, 233, 236, 0.5);
`;

const dropdownOptionContainer = css`
	display: flex;
	align-items: baseline;
	white-space: nowrap;
	font-size: 13px;
	line-height: 20px;
	i {
		margin-right: 8px;
	}
`;

const draggableToColumn = css`
	background: red;
	border: dashed 1px red;
	height: 100%;
`;

const draggableToExpandedColumnSection = css`
	background: red;
	margin: 0;
	flex-grow: 1;
	opacity: 1;

	${customBorder};
	z-index: 20;

	&:first-of-type::before {
		border-top-style: none;
	}
	&:last-child::before {
		border-bottom-left-radius: 3px;
		border-bottom-right-radius: 3px;
	}
`;

const hoveringOverDraggableToArea = css`
	background: red;
`;

const draggableToHeader = css`
	background: red;
	${customBorder};
	&::before {
		border-top-right-radius: 3px;
		border-top-left-radius: 3px;
		border-bottom-style: none;
	}
`;

const hoveringOverDraggableToHeader = css`
	${customBorder};
	&::before {
		border-top-right-radius: 3px;
		border-top-left-radius: 3px;
		border-bottom-style: none;
	}
`;

export const ExpandedColumnTitle = styled.div`
	font-size: 13px;
	font-weight: 600;
	padding-right: 8px;
	color: $red;
`;

export const ExpandedColumnSection = styled(Box)`
	position: relative;
	opacity: 1;
	&:last-child {
		padding-bottom: 8px;
	}
`;

export const ExpandedColumnSectionListOverlay = styled(Box)`
	position: sticky;
	display: flex;
	flex-direction: column;
	top: 0;
	left: 0;
	height: 100%;
	width: 100%;
	z-index: 10;
`;

export const ExpandedColumnSectionList = styled(Box)`
	display: flex;
	flex-direction: column;
	gap: 8px;
	padding: 0 8px 8px 8px;
	border-radius: 3px;
`;

export const ExpandedColumnSectionOverlay = styled(Box)`
	background: none;
	position: absolute;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	z-index: 10;
	color: red;
	pointer-events: none;
`;

export const CollapsedColumnTitle = styled(Text)`
	text-orientation: mixed;
	writing-mode: vertical-rl;
	font-weight: 600;
	font-size: 13px;
	margin-bottom: 12px;
	color: red;
`;

export const CollapsedColumnCount = styled(Text)`
	text-orientation: mixed;
	writing-mode: vertical-rl;
	font-weight: 600;
	font-size: 13px;
	color: red;
`;

export const ExpandedColumnDescription = styled(Text)`
	padding: 12px 8px;
`;

const imagesContainer = css`
	gap: 16px;
`;

const pageFlex = css`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	gap: 4px;
`;

const linhaGradienteUnderScore = css`
	background: linear-gradient(90deg, #a11cf3 0%, #d835c5 100%);
	width: 34px;
	height: 4px;
	border-radius: 50px;
`;
const resultadosContainer = css`
	${theme.mediaQueries.extralarge} {
		padding-left: 199px;
		padding-right: 199px;
	}
`;
export default {
	defaultExpandedColumn,
	defaultCollapsedColumn,
	dropdownOptionContainer,
	draggableToHeader,
	draggableToColumn,
	draggableToExpandedColumnSection,
	hoveringOverDraggableToArea,
	hoveringOverDraggableToHeader,
	imagesContainer,
	pageFlex,
	linhaGradienteUnderScore,
	resultadosContainer,
};
