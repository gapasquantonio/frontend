/** @jsxImportSource @emotion/react */
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ButtonComponent from './index';
import theme from '../../theme';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: 'components/Button',
	component: ButtonComponent,
} as ComponentMeta<typeof ButtonComponent>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ButtonComponent> = (args) => {
	return <ButtonComponent {...args} />;
};

export const Default = Template.bind({});

Default.args = {
	kind: 'outline',
	text: 'outline button',
	iconClassName: 'fas fa-arrow-right',
};

export const TextButton = Template.bind({});

TextButton.args = {
	kind: 'text',
	text: 'text button',
	background: 'black',
};
export const IconButton = Template.bind({});

IconButton.args = {
	kind: 'outline',
	text: 'Icon button',
	iconClassName: 'fas fa-arrow-right',
};

export const LargeButton = Template.bind({});

LargeButton.args = {
	kind: 'outline',
	text: 'Large button',
	scale: theme.scale.large,
};
export const XLargeButton = Template.bind({});

XLargeButton.args = {
	kind: 'outline',
	text: 'XLarge button',
	scale: theme.scale.xlarge,
};
export const SmallButton = Template.bind({});

SmallButton.args = {
	kind: 'outline',
	text: 'Small button',
	scale: theme.scale.small,
};
