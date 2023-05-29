import React, { useMemo } from 'react';
import { theme } from '../theme';

type Props = {
	width?: number;
	children: React.ReactNode;
};

export const breakpointMap = {
	[theme.breakpoints[0] as string]: 'mobile',
	[theme.breakpoints[1] as string]: 'mobileLandscape',
	[theme.breakpoints[2] as string]: 'tablet',
	[theme.breakpoints[3] as string]: 'desktop',
} as const;

type ScreenSizeKey = keyof typeof breakpointMap;
export type ScreenSizeValue =
	| (typeof breakpointMap)[ScreenSizeKey]
	| 'desktopXL';

type Device = {
	width: number | null;
	screenSize: ScreenSizeValue | null;
};

const DeviceContext = React.createContext<Device>({
	width: null,
	screenSize: null,
});

const getScreenSize = (width: number): ScreenSizeValue => {
	// Which breakpoint is the window within?
	const [, screenSize] = Object.entries(breakpointMap).find(
		([breakpoint]) => width <= +breakpoint.replace('px', ''),
	) ?? ['', 'desktopXL'];
	return screenSize;
};

export const DeviceProvider = ({ width, children }: Props) => {
	const device = useMemo(
		() => ({
			width: width ?? null,
			screenSize: width ? getScreenSize(width) : null,
		}),
		[width],
	);

	return (
		<DeviceContext.Provider value={device}>
			{children}
		</DeviceContext.Provider>
	);
};
DeviceProvider.defaultProps = {
	width: undefined,
};

export const withDevice = <P extends object>(
	Component: React.ComponentType<P>,
) =>
	function ComponentwithDevice(props: P & Device) {
		return (
			<DeviceContext.Consumer>
				{(value) => <Component {...props} device={value} />}
			</DeviceContext.Consumer>
		);
	};

export default DeviceContext;
