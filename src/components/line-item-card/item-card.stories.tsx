import { ComponentStory, ComponentMeta } from '@storybook/react';
import ItemCardComponent from './item-card';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: 'components/ItemCard',
	component: ItemCardComponent,
} as ComponentMeta<typeof ItemCardComponent>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ItemCardComponent> = (args) => {
	return <ItemCardComponent {...args} />;
};

export const Default = Template.bind({});

Default.args = {
	item: {
		id: '0032a1b5-8b30-4e10-a27c-3bd818d2f376',
		premium: true,
		details: {
			name: 'name',
			description: 'default item',
		},
	},
};

export const LongTexts = Template.bind({});

LongTexts.args = {
	item: {
		id: '00577e1d-1c0f-4992-a680-bc29c305202d',
		premium: true,
		details: {
			name: 'Long Text',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
		},
	},
};
