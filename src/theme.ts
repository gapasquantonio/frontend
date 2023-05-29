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
const theme = {
	breakpoints,
	fontWeights,
	fontSizes,
	lineHeights,
};

export { theme };

export default theme;
