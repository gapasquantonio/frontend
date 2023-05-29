import { css } from '@emotion/react';

const pageContainer = css(`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 1329px;
    box-sizing: border-box;
	background:#FBFBFB;
`);

const pageFlex = css`
	box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15);
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	gap: 4px;
`;

const contentBox = css`
	flex: 1 1 auto;
	display: flex;
	flex-direction: column;
	gap: 12px;
`;
const linhaGradiente = css`
	height: 1px;
	width: 100%;
	background: linear-gradient(90deg, #a11cf3 0%, #d835c5 100%),
		linear-gradient(0deg, #fbfbfb, #fbfbfb);
	border-top: 1px solid;
	border-image-source: linear-gradient(90deg, #a11cf3 0%, #d835c5 100%);
`;
const linhaGradienteUnderScore = css`
	background: linear-gradient(90deg, #a11cf3 0%, #d835c5 100%);
	width: 34px;
	height: 4px;
	border-radius: 50px;
`;
export default {
	pageContainer,
	pageFlex,
	contentBox,
	linhaGradiente,
	linhaGradienteUnderScore,
};
