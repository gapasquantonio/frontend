import { FixedBannerContainer } from './fixed-banner.styles';
import useIsMobile from '../../hooks/is-mobile';

function FixedBanner() {
	const isMobile = useIsMobile('mobileLandscape');

	return (
		<FixedBannerContainer isMobile={isMobile}>
			Não limite sua criatividade, junte-se a familia Blocks por apenas
			BRL 19,99
		</FixedBannerContainer>
	);
}

export default FixedBanner;
