import styled from '@emotion/styled';
import React from 'react';
import { StyledSystemProps, StyledSystemStyles } from '../../theme';

const Box = styled.div<StyledSystemProps>`
	${StyledSystemStyles}
`;

export default React.memo(Box);
