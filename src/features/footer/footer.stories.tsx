import { ComponentStory, ComponentMeta } from '@storybook/react';
import { css, Global } from '@emotion/react';
import { useState } from 'react';
import Footer from './footer';

export default {
	title: 'features/Footer',
	component: Footer,
} as ComponentMeta<typeof Footer>;

const Template: ComponentStory<typeof Footer> = () => {
	const [isBannerClosed, setBannerClosed] = useState(false);
	return (
		<div
			css={{
				width: '100%',
				height: '100%',
				backgroundColor: 'lightgray',
			}}
		>
			<Global
				styles={css(`
					html, body, #root {
						height: 100%;
						width: 100%;
					}
				`)}
			/>
			<Footer
				setBannerClosed={setBannerClosed}
				isBannerClosed={isBannerClosed}
			/>
		</div>
	);
};

export const Default: ComponentStory<typeof Footer> = Template.bind({});
