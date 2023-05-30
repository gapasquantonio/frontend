import { TopNavContainer, ButtonOrgWrapper } from './top-navigation.styles';
import useIsMobile from '../../hooks/is-mobile';
import { LogoDesktop, LogoMobile } from '../../shared/icons';
import FixedBanner from '../fixed-banner';

function TopNavigation() {
	const isMobile = useIsMobile();

	const logo = isMobile ? LogoMobile : LogoDesktop;
	return (
		<TopNavContainer isMobile={isMobile}>
			{!isMobile && <FixedBanner />}
			<ButtonOrgWrapper isMobile={isMobile}>
				<img src={logo} alt="blocks logo" />
			</ButtonOrgWrapper>
		</TopNavContainer>
	);
}

export default TopNavigation;
