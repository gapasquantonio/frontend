import { useContext } from 'react';
import DeviceContext, {
	breakpointMap,
	ScreenSizeValue,
} from '../contexts/device';

function useIsMobile(includeUpTo?: ScreenSizeValue) {
	const { screenSize } = useContext(DeviceContext);
	const sizes = [...Object.values(breakpointMap), 'desktopXL'];
	const mobileSizes = includeUpTo
		? sizes.slice(0, sizes.indexOf(includeUpTo) + 1)
		: ['mobile'];
	return screenSize ? mobileSizes.includes(screenSize) : false;
}

export default useIsMobile;
