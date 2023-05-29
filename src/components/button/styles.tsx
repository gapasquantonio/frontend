import { css } from '@emotion/react';
import styled from '@emotion/styled';
import {
	Scale,
	StyledSystemProps,
	StyledSystemStyles,
	kind,
	theme,
} from '../../theme';

export type ButtonKind = 'outline' | 'text';

export type ButtonProps = {
	scale?: Scale;
	kind?: string;
	icon?: boolean;
} & StyledSystemProps &
	React.ComponentProps<'button'>;

const ButtonStyles = (props: ButtonProps) => css`
	outline: 0;
	cursor: pointer;
	border-radius: 8px;
	border-width: ${theme.borders[0]};
	border: 1px solid;
	font-weight: ${theme.fontWeights.semibold};
	gap: 15px;
	justify-content: center;
	display: flex;
	align-items: center;
	text-align: center;

	&:disabled {
		cursor: not-allowed;
	}

	${(() => {
		let mappedKind: string | kind = props.kind!;
		// detemermine if kind is a text only option
		const textOnly = props.kind && props.kind.includes('text');
		switch (props.kind) {
			case 'outline':
				mappedKind = kind.primary;
				break;

			case 'text':
			default:
				mappedKind = kind.primary;
				break;
		}
		const kindTheme =
			theme.kindThemes[mappedKind as keyof typeof theme.kindThemes];

		return css`
			border-width: ${!textOnly ? theme.borders[0] : '0px'};
			color: ${kindTheme.color};
			background: ${kindTheme.fill};
			border-image-source: ${kindTheme.focus?.fill};
			&:hover {
				color: ${kindTheme.hover?.color};
				border-image-source: ${kindTheme.hover?.stroke};
				background: ${kindTheme.hover?.fill};

				&:focus {
					color: ${kindTheme.hover?.focus.color};
					border-image-source: ${kindTheme.hover?.focus.stroke};
					background: ${kindTheme.hover?.focus.fill};
				}
				&:active {
					color: ${kindTheme.hover?.active.color};
					border-image-source: ${kindTheme.hover?.active.stroke};
					background: ${kindTheme.hover?.active.fill};
				}
				&:disabled {
					color: ${kindTheme.hover?.disabled.color};
					border-image-source: ${kindTheme.hover?.disabled.stroke};
					background: ${kindTheme.hover?.disabled.fill};
				}
			}

			&:focus {
				color: ${kindTheme.focus?.color};
				border-image-source: ${kindTheme.focus?.stroke};
				background: ${kindTheme.focus?.fill};

				&:not(:active) {
					color: ${kindTheme.focus?.color};
					border-image-source: ${kindTheme.focus?.stroke};
					background: ${kindTheme.focus?.fill};
					box-shadow: 0 0 ${theme.space[1]} 1px
						${kindTheme.focus?.stroke};
				}
			}

			&:active {
				color: ${kindTheme.active?.color};
				border-image-source: ${kindTheme.active?.stroke};
				background: ${kindTheme.active?.fill};
				box-shadow: none;
			}

			&:disabled {
				color: ${kindTheme.disabled?.color};
				border-image-source: ${kindTheme.disabled?.stroke};
				background: ${kindTheme.disabled?.fill};
			}
		`;
	})()}

	${(() => {
		switch (props.scale) {
			case theme.scale.small:
				return css`
					min-height: calc(
						${theme.lineHeights[2]} + (${theme.space[1]} * 2) +
							(${theme.borders[0]} * 2)
					);
					font-size: ${theme.fontSizes[0]};
					line-height: ${theme.lineHeights[2]};
				`;
			case theme.scale.large:
				return css`
					min-height: calc(
						${theme.lineHeights[3]} + (${theme.space[2]} * 2) +
							(${theme.borders[0]} * 2)
					);
					padding: ${theme.space[2]} ${theme.space[3]};
				`;
			case theme.scale.xlarge:
				return css`
					min-height: calc(
						${theme.lineHeights[4]} + (${theme.space[3]} * 2) +
							(${theme.borders[0]} * 2)
					);
					font-size: ${theme.fontSizes[3]};
					line-height: ${theme.lineHeights[4]};
					padding: ${theme.space[3]} ${theme.space[4]};
				`;
			case theme.scale.medium:
			default:
				break;
		}
		return null;
	})()}
`;

export const Button = styled.button<ButtonProps>`
	${(props) => ButtonStyles(props)}

	${StyledSystemStyles}
`;
