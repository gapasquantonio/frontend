import { FixedBannerContainer } from './fixed-banner.styles';
import useIsMobile from '../../hooks/is-mobile';
import Text from '../../components/text';
import Flex from '../../components/flex';
import Button from '../../components/button';

function FixedBanner() {
	const isMobile = useIsMobile();

	return (
		<FixedBannerContainer isMobile={isMobile}>
			<Flex gap="18px" flexDirection={isMobile ? 'column' : 'row'}>
				{isMobile && <button type="submit">fechar</button>}
				<Text
					isMobile={isMobile}
					kind="label"
					alignItems="center"
					display="flex"
				>
					Não limite sua criatividade, junte-se a familia Blocks por
					apenas &nbsp;<b>BRL 19,99</b>
				</Text>
				<Button id="a" kind="outline" width="235px" height="42px" />
			</Flex>
		</FixedBannerContainer>
	);
}

export default FixedBanner;
