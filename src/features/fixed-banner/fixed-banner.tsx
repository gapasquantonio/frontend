import { FixedBannerContainer } from './fixed-banner.styles';
import useIsMobile from '../../hooks/is-mobile';
import Text from '../../components/text';
import Flex from '../../components/flex';

function FixedBanner() {
	const isMobile = useIsMobile();

	return (
		<FixedBannerContainer isMobile={isMobile}>
			<Flex gap="18px" flexDirection={isMobile ? 'column' : 'row'}>
				{isMobile && <button type="submit">fechar</button>}
				<Text isMobile={isMobile} kind="label" alignItems="center">
					Não limite sua criatividade, junte-se a familia Blocks por
					apenas <b>BRL 19,99</b>
				</Text>
				<button type="submit">Quero ser Premium</button>
			</Flex>
		</FixedBannerContainer>
	);
}

export default FixedBanner;
