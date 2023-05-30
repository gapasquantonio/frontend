/** @jsxImportSource @emotion/react */
import React from 'react';
import Box from '../../components/box';
import Button from '../../components/button';
import Text from '../../components/text';
import useIsMobile from '../../hooks/is-mobile';
import styles from './no-more-results.styles';

const NoMoreResults = () => {
	const isMobile = useIsMobile();

	return (
		<Box css={styles.pageFlex} paddingY="29px">
			<Text kind="page-title">Faça um upgrade</Text>

			<div css={styles.linhaGradienteUnderScore} />
			<Text kind="body-title">Você atingiu o limite de resultados</Text>

			<Text kind="label-sm">
				Acesse nosso site para gerenciar sua conta
			</Text>

			<Text kind="label-sm">www.blocksrvt.com</Text>
			<a href="https://www.blocksrvt.com" target="blank">
				<Button
					id="a"
					kind="outline"
					width={isMobile ? '223px' : '235px'}
					height="42px"
					marginBottom={isMobile ? '24px' : ''}
					marginTop={isMobile ? '18px' : ''}
					text="Acessar"
				/>
			</a>
		</Box>
	);
};
export default React.memo(NoMoreResults);
