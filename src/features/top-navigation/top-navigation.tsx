import { useState, useRef, useCallback, useEffect } from 'react';
import { useParams, useLocation, Link, useNavigate } from 'react-router-dom';
import { Text } from '@xometry/xometry_loft';
import { useIntl, PortalModal } from '@xometry/react-patterns';
import { css } from '@emotion/react';
import { CourierProvider } from '@trycourier/react-provider';

import {
	TopNavContainer,
	image,
	OrgLogo,
	gravatar,
	GravatarLogo,
	ButtonOrgWrapper,
	OrgName,
} from './top-navigation.styles';
import { Spacer, SpaceFiller } from '../../../components/layout';
import { SideNavToggle } from './buttons';
import { Organization, NavigationGroup } from '../types';
import AccountToggle from '../account-toggle';
import useIsMobile from '../../../hooks/is-mobile';
import subNavigationStyles from '../sub-navigation/sub-navigation.styles';
import AppSwitcher from '../../../components/app-switcher';
import UniversalSearchBar from '../../../components/universal-search-bar';
import TooltipOnTruncate from '../../../components/tooltip-on-truncate';
import { useIsSplitFeatureReady } from '../../../hooks/util';
import config from '../../../config';
import useAuth from '../../../hooks/auth';
import { useCourierHMAC } from '../../../hooks/queries';
import { CourierNotification } from '../notification/types';
import NotificationContainer from '../notification/notification-toggle/notification-container';
import { notificationsLoaded } from '../../../analytics';

type Props = {
	sideNavIsOpen: boolean;
	setSideNavIsOpen: (isOpen: boolean) => void;
	organization: Organization;
	navigationGroups: NavigationGroup[];
};

function TopNavigation(props: Props) {
	const isMobile = useIsMobile('mobileLandscape');
	const { sideNavIsOpen, setSideNavIsOpen, organization, navigationGroups } =
		props;
	const [open, toggleSearchModal] = useState(false);
	const [mewMessage, setNewMessage] = useState<CourierNotification>();
	const { id } = useParams();
	const { pathname } = useLocation();
	const intl = useIntl();
	const isSpecificPage = !!id;
	const parentPage = pathname.split(`/${id}`)[0];
	const orgName = useRef<HTMLDivElement>(null);
	const userId = useAuth().user?.xometry.id;
	const { data: HMAC } = useCourierHMAC();
	const jobDiscussionsEnabled = useIsSplitFeatureReady(
		'SAAS-1564-xwc-job-discussions',
	);

	useEffect(() => {
		if (jobDiscussionsEnabled) {
			notificationsLoaded();
		}
	}, [jobDiscussionsEnabled]);

	const navigate = useNavigate();
	const logoClickHandler = () => {
		navigate('/');
	};
	const handleMessage = useCallback((message) => {
		setNewMessage(message);
		return message;
	}, []);

	return (
		<CourierProvider
			userId={userId}
			clientKey={config.courier.key}
			userSignature={HMAC?.signature}
			onMessage={handleMessage}
		>
			<TopNavContainer isMobile={isMobile}>
				{isSpecificPage && isMobile ? (
					<>
						{parentPage && (
							<Link
								to={parentPage}
								css={subNavigationStyles.linkText(true)}
							>
								{intl.formatMessage({
									defaultMessage: 'Back',
									id: '@xometry/xometry-workcenter:ezQCfM',
									description:
										'[action][button] Navigate backwards to the previous page',
								})}
							</Link>
						)}
						<SpaceFiller />
						<Text css={subNavigationStyles.linkText(false)}>
							{id}
						</Text>
					</>
				) : (
					<ButtonOrgWrapper>
						<SideNavToggle
							isOpen={sideNavIsOpen}
							setIsOpen={setSideNavIsOpen}
						/>
						<Spacer horizontal={16} />
						<OrgLogo onClick={logoClickHandler}>
							<Link
								to="/"
								css={{
									textDecoration: 'none',
								}}
							>
								{organization.logo ? (
									<img
										src={organization.logo}
										alt={`${organization.name} logo`}
										css={image}
									/>
								) : (
									<TooltipOnTruncate
										textRef={orgName}
										tooltipChildren={
											<Text kind="body-sm" color="white">
												{organization.name}
											</Text>
										}
										tooltipStyles={css`
											transform: translateX(
												8px
											) !important;
											background-color: #00334d !important;
											border-radius: 3px;
											z-index: 1001 !important;
											i::after {
												border-bottom-color: #00334d;
											}
										`}
									>
										<GravatarLogo>
											<img
												src={organization.imageSrc}
												alt={`${organization.name} logo`}
												css={gravatar}
											/>
											<Spacer horizontal={4} />
											<div css={OrgName} ref={orgName}>
												{organization.name}
											</div>
										</GravatarLogo>
									</TooltipOnTruncate>
								)}
							</Link>
						</OrgLogo>
					</ButtonOrgWrapper>
				)}
				{isMobile ? (
					<>
						<SpaceFiller />
						<UniversalSearchBar
							isModal={false}
							closeModal={() => toggleSearchModal(true)}
							isMobile={isMobile}
							isModalOpen={open}
						/>
						<PortalModal fullScreen isOpen={open}>
							<UniversalSearchBar
								isModal
								isMobile={isMobile}
								closeModal={() => toggleSearchModal(false)}
								isModalOpen={open}
							/>
						</PortalModal>
					</>
				) : (
					<>
						<UniversalSearchBar
							isModal={false}
							closeModal={() => toggleSearchModal(true)}
							isMobile={isMobile}
							isModalOpen={open}
						/>
						<SpaceFiller />
					</>
				)}
				{isMobile && jobDiscussionsEnabled && (
					<NotificationContainer newMessage={mewMessage} />
				)}

				<AccountToggle navigationGroups={navigationGroups} />
				{!isMobile && jobDiscussionsEnabled && (
					<>
						<NotificationContainer newMessage={mewMessage} />
						<AppSwitcher />
					</>
				)}
			</TopNavContainer>
		</CourierProvider>
	);
}

export default TopNavigation;
