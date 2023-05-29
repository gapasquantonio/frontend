import {
	TopNavContainer,
	image,
	ButtonOrgWrapper,
} from './top-navigation.styles';
import useIsMobile from '../../hooks/is-mobile';
import { LogoDesktop, LogoMobile } from '../../shared/icons';

function TopNavigation() {
	const isMobile = useIsMobile('mobileLandscape');

	const logo = isMobile ? LogoMobile : LogoDesktop;
	return (
		<TopNavContainer isMobile={isMobile}>
			<ButtonOrgWrapper isMobile={isMobile}>
				<img src={logo} alt="blocks logo" css={image} />
			</ButtonOrgWrapper>
		</TopNavContainer>
	);
}

export default TopNavigation;
