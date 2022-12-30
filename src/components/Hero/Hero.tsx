import React from 'react';
import styled from 'styled-components';
import Slider from '../Slider/Slider';
import Text from '../Text/Text';
import { TypeAnimation } from 'react-type-animation';

const Hero: React.FC<any> = ({ images, heroText }) => {
	return (
		<StyledHero>
			<div className='banner-text'>
				<TypeAnimation
					sequence={heroText}
					speed={50}
					wrapper='span'
					repeat={Infinity}
					deletionSpeed={40}
				/>
				<Text textType='title' textColor='white'>
					Parque acuatico - diversión asegurada
				</Text>
			</div>
			<Slider images={images} showNav={false} />;
		</StyledHero>
	);
};

export default Hero;

const StyledHero = styled.div`
	position: relative;
	width: 100%;
	height: auto;

	.banner-text {
		position: absolute;
		z-index: 50000;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
		display: flex;
		flex-direction: column;
		text-align: center;
		gap: ${({ theme }) => theme.spacing.md};

		p {
			border-radius: 10px;
			background-color: ${({ theme }) => theme.tertiary};
			padding: 10px;
			box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
		}

		span {
			color: ${({ theme }) => theme.white_primary};
			font-weight: 900;
			font-size: 40px !important;
			background-color: ${({ theme }) => theme.tertiary};
			border-radius: 10px;
			padding: 10px 0;
			box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
		}
	}
`;
