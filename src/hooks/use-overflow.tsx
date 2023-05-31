import * as React from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const useIsOverflow = (ref: React.MutableRefObject<any>) => {
	const [isOverflow, setIsOverflow] = React.useState<boolean>();

	React.useLayoutEffect(() => {
		const { current } = ref;

		const trigger = () => {
			const hasOverflow = current.scrollHeight > current.clientHeight;

			setIsOverflow(hasOverflow);
		};

		if (current) {
			if ('ResizeObserver' in window) {
				new ResizeObserver(trigger).observe(current);
			}

			trigger();
		}
	}, [ref]);

	return isOverflow;
};

export default useIsOverflow;
