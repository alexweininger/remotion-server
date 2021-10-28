import {Still} from 'remotion';
import {PreviewCard} from './PreviewCard';

export const RemotionVideo: React.FC = () => {
	return (
		<>
			<Still
				id="PreviewCard"
				component={PreviewCard}
				width={1500}
				height={500}
				defaultProps={{
					title: 'Welcome to Remotion',
					img: '',
				}}
			/>
		</>
	);
};
