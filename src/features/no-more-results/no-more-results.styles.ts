import { css } from '@emotion/react';

const linhaGradienteUnderScore = css`
	background: linear-gradient(90deg, #a11cf3 0%, #d835c5 100%);
	width: 34px;
	height: 4px;
	border-radius: 50px;
`;
const pageFlex = css`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	gap: 4px;
`;
export default {
	pageFlex,
	linhaGradienteUnderScore,
};
