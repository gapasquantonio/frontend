import { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { css, Global } from '@emotion/react';
import TopNavigation from './top-navigation';

export default {
	title: 'features/Navigation/Top-Navigation',
	component: TopNavigation,
} as ComponentMeta<typeof TopNavigation>;

const Template: ComponentStory<typeof TopNavigation> = (args) => {
	const [isOpen, setIsOpen] = useState<boolean>(false);
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
			<TopNavigation
				{...args}
				sideNavIsOpen={isOpen}
				setSideNavIsOpen={setIsOpen}
			/>
		</div>
	);
};

export const Default: ComponentStory<typeof TopNavigation> = Template.bind({});
Default.args = {
	organization: {
		name: 'BetterCNC',
		imageSrc:
			'https://s.gravatar.com/avatar/9bf72f6ccb79cc03b534b37adb38549b?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Ffd.png',
		id: 'P14001',
		logo: 'https://static.factoryfour.com/factoryfour/logos/FF_Logo_BlackTrans_1.png',
	},
	navigationGroups: [
		{
			kind: 'default',
			linkConfigs: [
				{ title: 'Account Management', path: '/account-management' },
				{ title: 'Team Management', path: '/team-management' },
			],
		},
		{
			kind: 'default',
			linkConfigs: [
				{
					title: 'Partner Account',
					path: '/xometry-settings/account',
				},
				{ title: 'Finishes', path: '/xometry-settings/finishes' },
				{ title: 'Materials', path: '/xometry-settings/materials' },
				{
					title: 'Certifications',
					path: '/xometry-settings/certifications',
				},
				{ title: 'Machines', path: '/xometry-settings/machines' },
			],
		},
	],
};

export const NoLogo: ComponentStory<typeof TopNavigation> = Template.bind({});
NoLogo.args = {
	organization: {
		name: 'BetterCNC',
		imageSrc:
			'https://s.gravatar.com/avatar/9bf72f6ccb79cc03b534b37adb38549b?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Ffd.png',
		id: 'P14001',
	},
	navigationGroups: [
		{
			kind: 'default',
			linkConfigs: [
				{ title: 'Account Management', path: '/account-management' },
				{ title: 'Team Management', path: '/team-management' },
			],
		},
		{
			kind: 'default',
			linkConfigs: [
				{
					title: 'Partner Account',
					path: '/xometry-settings/account',
				},
				{ title: 'Finishes', path: '/xometry-settings/finishes' },
				{ title: 'Materials', path: '/xometry-settings/materials' },
				{
					title: 'Certifications',
					path: '/xometry-settings/certifications',
				},
				{ title: 'Machines', path: '/xometry-settings/machines' },
				{ title: 'Capabilities', path: '/capabilities-management' },
			],
		},
	],
};
export const LongNames: ComponentStory<typeof TopNavigation> = Template.bind(
	{},
);
LongNames.args = {
	organization: {
		name: 'BetterCNC: An Organization with an Improbably Long Name',
		imageSrc:
			'https://s.gravatar.com/avatar/9bf72f6ccb79cc03b534b37adb38549b?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Ffd.png',
		id: 'P14001',
	},
	navigationGroups: [
		{
			kind: 'default',
			linkConfigs: [
				{ title: 'Account Management', path: '/account-management' },
				{ title: 'Team Management', path: '/team-management' },
			],
		},
		{
			kind: 'default',
			linkConfigs: [
				{
					title: 'Partner Account',
					path: '/xometry-settings/account',
				},
				{ title: 'Finishes', path: '/xometry-settings/finishes' },
				{ title: 'Materials', path: '/xometry-settings/materials' },
				{
					title: 'Certifications',
					path: '/xometry-settings/certifications',
				},
				{ title: 'Machines', path: '/xometry-settings/machines' },
				{ title: 'Capabilities', path: '/capabilities-management' },
			],
		},
	],
};
