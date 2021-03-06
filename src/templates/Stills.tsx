import React from 'react';

import {Still, StillProps} from 'remotion';

type Template = {
	description: string;
} & StillProps<any>;

const templates: Template[] = [
	{
		id: 'banner-1',
		description: 'Twitter banner',
		width: 1500,
		height: 500,
		defaultProps: {
			title: 'Hello',
			img: '',
		},
		lazyComponent: () => import('./components/PreviewCard'),
	},
	{
		id: 'twitch-1',
		description: 'Twitter banner for Twitch stream',
		width: 1500,
		height: 500,
		defaultProps: {
			backgroundColor: 'purple',
			thumbnailUrl:
				'https://static-cdn.jtvnw.net/previews-ttv/live_user_jvna-440x248.jpg',
		},
		lazyComponent: () => import('./components/TwitchStream'),
	},
];

export const RemotionVideo: React.FC = () => {
	return (
		<>
			{templates.map((template) => (
				<Still {...template} />
			))}
		</>
	);
};
