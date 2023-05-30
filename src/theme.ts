// Theme specification for styled-system

// see https://theme-ui.com/theme-spec/
// and https://github.com/system-ui/theme-specification/issues/8#issuecomment-582705042
import {
	BackgroundProps,
	BorderProps,
	ColorProps,
	FlexboxProps,
	LayoutProps,
	PositionProps,
	ShadowProps,
	SpaceProps,
	TypographyProps,
	background,
	border,
	color,
	compose,
	flexbox,
	layout,
	position,
	shadow,
	space,
	typography,
} from 'styled-system';

const StyledSystemStyles = compose(
	background,
	border,
	color,
	flexbox,
	layout,
	position,
	shadow,
	typography,
	space,
);

// We should use Intersection Types instead of Union Types to create a new Type with all available properties together instead
// of just provide common properties.
// https://www.typescriptlang.org/docs/handbook/unions-and-intersections.html#unions-with-common-fields
// https://www.typescriptlang.org/docs/handbook/unions-and-intersections.html#intersection-types

type StyledSystemPropsDef = BackgroundProps &
	BorderProps &
	ColorProps &
	FlexboxProps &
	LayoutProps &
	PositionProps &
	ShadowProps &
	SpaceProps &
	TypographyProps;

const fontWeights = {
	light: 200,
	regular: 400,
	semibold: 600,
	bold: 700,
};
const fontSizes = [
	'10px', // smallest 0
	'15px', // smaller 1
	'16px', // small 2
	'18px', // medium 3
	'20px', // large 4
	'24px', // larger 5
	'28px', // largest 6
];
const lineHeights = [
	'100%', // 0
	'19px', // 1
	'20px', // 2
	'22px', // 3
	'25px', // 4
];
const spaces = [
	'0px', // 0
	'4px', // 1
	'8px', // 2
	'12px', // 3
	'16px', // 4
	'20px', // 5
	'24px', // 6
	'28px', // 7
	'32px', // 8
	'36px', // 9
	'40px', // 10
];
const borders = ['1px', '2px', '3px', '4px'];

const breakpoints = ['576px', '768px', '1024px', '1280px'];

const mediaQueries = {
	small: `@media (min-width: ${breakpoints[0]})`, // 576px
	medium: `@media (min-width: ${breakpoints[1]})`, // 768px
	large: `@media (min-width: ${breakpoints[2]})`, // 1024px
	extralarge: `@media (min-width: ${breakpoints[3]})`, // 1280px
};

const colors = {
	black: '#202020',
	blackBanner: '#242424',
	blackFooter: '#322E2E',
	white: 'white',
	whiteBackground: '#FBFBFB',
	footerBackground: '#e9e9e9',
	transparent: 'transparent',
	disabledPrimary: '#808080',
	disabledSecondary: '#CACACA',
	loaderPrimary: '#C1CAD1',
	loaderSecondary: '#E6E9EC',
	bordaCard: '#CCCCCC',
	linearGradientActive: 'linear-gradient(90deg, #A11CF3 0%, #D835C5 100%)',
	linearGradientPrimary:
		'linear-gradient(90deg, rgba(161, 28, 243, 0.6) 0%, rgba(216, 53, 197, 0.6) 100%)',
	linearGradientHover:
		'linear-gradient(90deg, rgba(161, 28, 243, 0.6) 0%, rgba(216, 53, 197, 0.6) 100%)',
};

type KindColors = {
	// text color, analagous to CSS color
	color: string;
	// stroke/border color
	stroke: string;
	// fill/background color
	fill: string;
	// optional, alternate for background color, used for when you need constrast within the fill color
	fillContrast?: string;
	// optional, outline variation for situations where subtle emphasis is needed
	outline?: string;
	// optional, outline variation for situations where even more subtle emphasis is needed
	outlineContrast?: string;
};

type KindStates = KindColors & {
	// Hover state in environments with cursor
	hover?: KindColors & {
		// hover + focus
		focus: KindColors;
		// hover + active
		active: KindColors;
		// hover + disabled
		disabled: KindColors;
	};
	// Focus state, when tabbed to or after presses
	focus?: KindColors;
	// Active state, when pressed or clicked
	active?: KindColors;
	// Disabled state, when button ignores user events
	disabled: KindColors;
};

/**
 * Default disabled color, all disable states should be identical
 */
const defaultDisabledKind = {
	color: colors.disabledPrimary,
	stroke: colors.disabledSecondary,
	fill: colors.disabledSecondary,
};
/**
 * Type for the config of Kind states
 */
type KindConfig = {
	// A default kind state unioned with two additional properties that contain alternates
	// The key for each config should derive from the kind enum to ensure we have complete configurations
	[key in kind]: KindStates;
};
// eslint-disable-next-line @typescript-eslint/naming-convention
export enum kind {
	// primary config, used for commital and happy path actions or states
	primary = 'primary',
	// neutral config, used for non-primary or secondary actions or indicators, also the default kind in most cases
	neutral = 'neutral',
}

export const kindThemes: KindConfig = {
	[kind.primary]: {
		color: colors.white,
		stroke: colors.linearGradientActive,
		fill: colors.linearGradientPrimary,
		hover: {
			color: colors.white,
			stroke: colors.linearGradientActive,
			fill: colors.linearGradientHover,
			focus: {
				color: colors.white,
				stroke: colors.linearGradientActive,
				fill: colors.linearGradientHover,
			},
			active: {
				color: colors.white,
				stroke: colors.linearGradientActive,
				fill: colors.linearGradientHover,
			},
			disabled: defaultDisabledKind,
		},
		focus: {
			color: colors.white,
			stroke: colors.linearGradientActive,
			fill: colors.linearGradientActive,
		},
		active: {
			color: colors.white,
			stroke: colors.linearGradientActive,
			fill: colors.linearGradientActive,
		},
		disabled: defaultDisabledKind,
	},
	[kind.neutral]: {
		color: colors.white,
		stroke: colors.transparent,
		fill: colors.transparent,
		hover: {
			color: colors.white,
			stroke: colors.transparent,
			fill: colors.transparent,
			focus: {
				color: colors.white,
				stroke: colors.transparent,
				fill: colors.transparent,
			},
			active: {
				color: colors.white,
				stroke: colors.transparent,
				fill: colors.transparent,
			},
			disabled: defaultDisabledKind,
		},
		focus: {
			color: colors.white,
			stroke: colors.transparent,
			fill: colors.transparent,
		},
		active: {
			color: colors.white,
			stroke: colors.transparent,
			fill: colors.transparent,
		},
		disabled: defaultDisabledKind,
	},
};

export enum Scale {
	small = 'small',
	medium = 'medium',
	large = 'large',
	xlarge = 'xlarge',
}

const theme = {
	breakpoints,
	mediaQueries,
	fontWeights,
	fontSizes,
	lineHeights,
	space: spaces,
	borders,
	kindThemes,
	scale: Scale,
	colors,
};

// This is a way of getting around the isolated modules flag that is set by default.
export type StyledSystemProps = StyledSystemPropsDef;

export { StyledSystemStyles, theme };

export default theme;
