import { css } from '@emotion/react';
import { theme } from '../../theme';

const imagesContainer = css`
	gap: 16px;
`;

const resultadosContainer = css`
	${theme.mediaQueries.extralarge} {
		padding-left: 199px;
		padding-right: 0px;
	}
`;
export default {
	imagesContainer,
	resultadosContainer,
};
