import React from 'react';
import styled from '@emotion/styled';
import { StyledSystemProps, StyledSystemStyles, theme } from '../../theme';

export type Kind =
	| 'page-title'
	| 'body-title'
	| 'button'
	| 'label'
	| 'label-sm'
	| 'footer';

export type TextProps = {
	kind?: Kind;
	isMobile?: boolean;
} & StyledSystemProps &
	React.ComponentProps<'text'>;

const Text = styled.span<TextProps>`
	color: ${theme.colors.black};
	font-weight: ${theme.fontWeights.regular};
	line-height: ${theme.lineHeights[0]};
	font-style: normal;
	font-family: Open Sans;

	${(props) =>
		props.kind === 'page-title' &&
		`
   
    font-weight: ${theme.fontWeights.bold};
    font-size: ${props.isMobile ? theme.fontSizes[5] : theme.fontSizes[6]};
    
  `}

	${(props) =>
		props.kind === 'body-title' &&
		`
    font-size: ${props.isMobile ? theme.fontSizes[4] : theme.fontSizes[5]};
    font-weight: ${theme.fontWeights.semibold};
  `}

  ${(props) =>
		props.kind === 'button' &&
		`
    color: ${theme.colors.white};
    font-size: ${theme.fontSizes[2]};
    line-height: ${theme.lineHeights[3]};
  `}

  ${(props) =>
		props.kind === 'label' &&
		`
    font-size: ${props.isMobile ? theme.fontSizes[1] : theme.fontSizes[3]};
    line-height: ${
		props.isMobile ? theme.lineHeights[2] : theme.lineHeights[4]
	};
    color: ${theme.colors.white};
  `}

  ${(props) =>
		props.kind === 'label-sm' &&
		`
    font-size: ${theme.fontSizes[0]};
    font-weight: ${theme.fontWeights.semibold};
  `}

  ${(props) =>
		props.kind === 'footer' &&
		`
    color: ${theme.colors.blackFooter};
    font-size: ${props.isMobile ? theme.fontSizes[1] : theme.fontSizes[2]};
    line-height: ${
		props.isMobile ? theme.lineHeights[1] : theme.lineHeights[3]
	};
  `}
  ${StyledSystemStyles}
`;

Text.defaultProps = {
	kind: 'label' as Kind,
};

export default React.memo(Text);
