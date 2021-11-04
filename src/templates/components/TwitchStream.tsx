import React from 'react';
import {AbsoluteFill, Img} from 'remotion';
import '../fonts.css';

const colorStyle: React.CSSProperties = {
	height: '100%',
	width: '100%',
};

const PreviewCard: React.FC<{
	backgroundColor?: string;
	backgroundUrl?: string;
	thumbnailUrl: string;
}> = ({backgroundColor, backgroundUrl, thumbnailUrl}) => {
	return (
		<>
			{backgroundUrl && (
				<AbsoluteFill>
					<Img src={backgroundUrl} />
				</AbsoluteFill>
			)}
			{backgroundColor && !backgroundUrl && (
				<AbsoluteFill>
					<div style={{...colorStyle, backgroundColor}} />
				</AbsoluteFill>
			)}
			<Img
				src={thumbnailUrl}
				style={{
					zIndex: 10,
					height: 240,
					position: 'absolute',
					bottom: 0,
					right: 0,
					margin: 16,
					border: '12px solid white',
				}}
			/>
		</>
	);
};

export default PreviewCard;
