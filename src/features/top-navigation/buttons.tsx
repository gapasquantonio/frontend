import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { theme } from '@xometry/xometry_loft';

type ButtonProps = {
	onClick: () => void;
	icon: string;
	iconSize: number;
};

const TopNavButton = styled.button<{ isOpen?: boolean }>`
	height: 32px;
	width: 32px;
	outline: 0;
	cursor: pointer;
	background: none;
	border: none;
	padding: 0px;
	align-items: center;
	box-sizing: border-box;
	text-decoration: none;
	flex-shrink: 0;
	${({ isOpen }) =>
		isOpen &&
		`
        background-color: ${theme.colors.blues[10]};
        border-radius: 25px;
    `}
`;

const iconStyle = (size: number) => css`
	color: ${theme.colors.darkBlues[75]};
	font-size: ${size}px;
`;

const IconButton: React.FC<ButtonProps> = ({ onClick, icon, iconSize }) => (
	<TopNavButton onClick={onClick}>
		<i className={icon} css={iconStyle(iconSize)} />
	</TopNavButton>
);

const Scan = ({ onClick }: { onClick: () => void }) => (
	<IconButton onClick={onClick} icon="far fa-barcode-read" iconSize={24} />
);

const Notifications = ({ onClick }: { onClick: () => void }) => (
	<IconButton onClick={onClick} icon="far fa-bell" iconSize={24} />
);

const Information = ({ onClick }: { onClick: () => void }) => (
	<IconButton onClick={onClick} icon="fas fa-info-circle" iconSize={16} />
);

const AppSwitcher = ({ onClick }: { onClick: () => void }) => (
	<IconButton onClick={onClick} icon="fas fa-th" iconSize={20} />
);

type ToggleButtonProps = {
	isOpen: boolean;
	setIsOpen: (isOpen: boolean) => void;
};

const SideNavToggle: React.FC<ToggleButtonProps> = ({ setIsOpen, isOpen }) => (
	<TopNavButton onClick={() => setIsOpen(!isOpen)} isOpen={isOpen}>
		<i
			className="far fa-bars"
			css={css`
				color: ${theme.colors.darkBlues[90]};
				font-size: 16px;
			`}
		/>
	</TopNavButton>
);

export { SideNavToggle, Scan, Notifications, Information, AppSwitcher };
