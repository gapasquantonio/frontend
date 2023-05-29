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
	text?: string | undefined;
}

const IconButton: React.FC<IconButtonProps> = (iconButtonProps) => {
	const { iconClassName, className, id, text, ...res } = iconButtonProps;

	return (
		<Button css={className} id={id} {...res}>
			<Text kind="button">{text}</Text>
			<i className={classnames(iconClassName)} />
		</Button>
	);
};

const defaultIconButtonProps = {
	iconClassName: 'fas fa-arrow-right',
	scale: theme.scale.medium,
	kind: 'outline',
	className: undefined,
	text: undefined,
};

IconButton.defaultProps = defaultIconButtonProps;

export default React.memo(IconButton);
