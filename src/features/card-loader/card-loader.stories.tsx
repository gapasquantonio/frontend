/** @jsxImportSource @emotion/react */
import { ComponentStory, ComponentMeta } from '@storybook/react';
import CardLoaderComponent from './card-loader';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: 'components/Card Loader',
	component: CardLoaderComponent,
} as ComponentMeta<typeof CardLoaderComponent>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof CardLoaderComponent> = () => {
	return <CardLoaderComponent />;
};

export const Default = Template.bind({});
