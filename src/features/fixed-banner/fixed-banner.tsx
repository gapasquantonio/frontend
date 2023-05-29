import { FixedBannerContainer } from './fixed-banner.styles';
import useIsMobile from '../../hooks/is-mobile';
import Text from '../../components/text';
import Flex from '../../components/flex';
import Button from '../../components/button';

function FixedBanner() {
	const isMobile = useIsMobile();

	return (
		<FixedBannerContainer isMobile={isMobile}>
			<Flex
				flexDirection={isMobile ? 'column' : 'row'}
				alignItems="center"
				height={isMobile ? '186px' : '67px'}
				gap={isMobile ? '0px' : '18px'}
			>
				{isMobile && (
					<Button
						id="fechar"
						kind="text"
						width={isMobile ? '223px' : '235px'}
						height="20px"
						text="Fechar"
						marginTop={isMobile ? '24px' : ''}
						iconClassName="fas fa-times"
					/>
				)}
				<Text
					isMobile={isMobile}
					kind="label"
					alignItems="center"
					display="flex"
					justifyContent="center"
					width={isMobile ? '272px' : ''}
					marginTop={isMobile ? '18px' : ''}
					textAlign="center"
				>
					Não limite sua criatividade, junte-se a familia Blocks por
					apenas &nbsp;BRL 19,99
				</Text>
				<Button
					id="a"
					kind="outline"
					width={isMobile ? '223px' : '235px'}
					height="42px"
					marginBottom={isMobile ? '24px' : ''}
					marginTop={isMobile ? '18px' : ''}
					text="Quero ser Premium"
					iconClassName="fas fa-arrow-right"
				/>
			</Flex>
		</FixedBannerContainer>
	);
}

export default FixedBanner;
