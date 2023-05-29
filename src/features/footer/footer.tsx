import { FooterContainer } from './footer.styles';
import useIsMobile from '../../hooks/is-mobile';
import FixedBanner from '../fixed-banner';
import Flex from '../../components/flex';
import Text from '../../components/text';
import { FooterItem } from '../../types/Footer';

const mockedFooter: FooterItem[] = [
	{ name: 'Sobre', id: '1 ' },
	{ name: 'FAQ', id: '2' },
	{ name: 'Termos de uso', id: '3' },
	{ name: 'Politica de privacidade', id: '4' },
];
function Footer() {
	const isMobile = useIsMobile('mobileLandscape');

	return (
		<FooterContainer isMobile={isMobile}>
			<Flex
				height="65px"
				alignItems="center"
				justifyContent="center"
				gap="36px"
			>
				{mockedFooter.map(({ name, id }) => {
					return (
						<Text kind="footer" id={id} key={id}>
							{name}
						</Text>
					);
				})}
			</Flex>
			{isMobile && <FixedBanner />}
		</FooterContainer>
	);
}

export default Footer;
