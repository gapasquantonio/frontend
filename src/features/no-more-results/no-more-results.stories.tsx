import { ComponentStory, ComponentMeta } from '@storybook/react';
import { css, Global } from '@emotion/react';
import NoMoreResult from './no-more-results';

export default {
	title: 'features/No More Results',
	component: NoMoreResult,
} as ComponentMeta<typeof NoMoreResult>;

const Template: ComponentStory<typeof NoMoreResult> = () => {
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
			<NoMoreResult />
		</div>
	);
};

export const Default: ComponentStory<typeof NoMoreResult> = Template.bind({});
