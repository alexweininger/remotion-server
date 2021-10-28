import React from 'react';
import './fonts.css';

const fontFamily = 'Inter';

const titleStyle: React.CSSProperties = {
	fontSize: '5.5em',
	marginTop: 0,
	fontWeight: 700,
	marginBottom: 0,
};

const gradientText: React.CSSProperties = {
	background: 'linear-gradient(to right, black, #666)',
	WebkitBackgroundClip: 'text',
	WebkitTextFillColor: 'transparent',
	fontFamily,
};

export const PreviewCard: React.FC<{
	title: string;
	img: string;
}> = ({title, img}) => {
	return (
		<div
			style={{backgroundImage: `url(${img})`, height: '100%', width: '100%'}}
		>
			<div style={titleStyle}>
				<span style={gradientText}>{title}</span>
			</div>
		</div>
	);
};
