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
const breakpoints = ['576px', '768px', '1024px', '1280px'];
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
const theme = {
	breakpoints,
	fontWeights,
	fontSizes,
	lineHeights,
	space: spaces,
};

// This is a way of getting around the isolated modules flag that is set by default.
export type StyledSystemProps = StyledSystemPropsDef;

export { StyledSystemStyles, theme };

export default theme;
