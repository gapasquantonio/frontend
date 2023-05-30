import React, { useRef } from 'react';
import LoadingBar, { LoadingBarRef } from 'react-top-loading-bar';
import { theme } from '../../theme';

export interface LoaderBarProps {
	className?: string;
	color?: string;
	shadow?: boolean;
	isLoading?: boolean;
}

const LoaderBar: React.FC<LoaderBarProps> = (props) => {
	const { color, shadow, className, isLoading } = props;
	const defaultColor = theme.colors.linearGradientPrimary;
	const ref = useRef<LoadingBarRef>(null);

	React.useEffect(() => {
		if (isLoading) {
			ref.current?.continuousStart();
		}
	}, [isLoading]);

	return (
		<div data-testid="LoaderBar">
			<LoadingBar
				className={className}
				color={color || defaultColor}
				shadow={shadow}
				ref={ref}
				onLoaderFinished={ref.current?.complete}
			/>
		</div>
	);
};

LoaderBar.defaultProps = {
	shadow: false,
	isLoading: false,
	color: theme.colors.linearGradientPrimary,
	className: undefined,
};
export default React.memo(LoaderBar);
