import { FixedBannerContainer } from './fixed-banner.styles';
import useIsMobile from '../../hooks/is-mobile';
import Text from '../../components/text';
import Flex from '../../components/flex';

function FixedBanner() {
	const isMobile = useIsMobile();

	return (
		<FixedBannerContainer isMobile={isMobile}>
			<Flex gap="18px">
				<Text isMobile={isMobile} kind="label">
					Não limite sua criatividade, junte-se a familia Blocks por
					apenas <b>BRL 19,99</b>
				</Text>
				<button type="submit">a</button>
			</Flex>
		</FixedBannerContainer>
	);
}

export default FixedBanner;
