import React from 'react';
import classnames from 'classnames';
import { Scale, theme } from '../../theme';
import Text from '../text';
import { Button, ButtonKind, ButtonProps } from './styles';

interface IconButtonProps extends ButtonProps {
	id: string;
	iconClassName?: string | undefined;
	scale?: Scale;
	kind?: ButtonKind | string;
	className?: string;
}

const IconButton: React.FC<IconButtonProps> = (iconButtonProps) => {
	const { iconClassName, className, id, ...res } = iconButtonProps;

	return (
		<Button css={className} id={id} {...res}>
			<Text kind="button">Quero ser Premium</Text>
			<i className={classnames(iconClassName)} />
		</Button>
	);
};

const defaultIconButtonProps = {
	iconClassName: 'fas fa-arrow-right',
	scale: theme.scale.medium,
	kind: 'outline',
	className: undefined,
};

IconButton.defaultProps = defaultIconButtonProps;

export default React.memo(IconButton);
