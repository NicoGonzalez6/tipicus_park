import React from 'react';
import styled from 'styled-components';
import Slider from '../Slider/Slider';
import Text from '../Text/Text';
import { TypeAnimation } from 'react-type-animation';

const Hero = ({ images, heroText }: any): JSX.Element => {
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
			<Slider images={images} showNav={false} />
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
		width: 100%;
		box-sizing: border-box;

		p {
			border-radius: ${({ theme }) => theme.radiusses.md};
			background-color: ${({ theme }) => theme.tertiary};
			padding: 5px 5px;
			box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
			font-size: 14px !important;
			margin: 0 auto;
			max-width: 340px;
			box-sizing: border-box;
			text-align: center;

			@media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
				font-size: 18px !important;
				max-width: 400px;
			}
		}

		span {
			color: ${({ theme }) => theme.white_primary};
			font-weight: 900;
			font-size: 25px !important;
			background-color: ${({ theme }) => theme.tertiary};
			border-radius: ${({ theme }) => theme.radiusses.md};
			padding: 5px 10px;
			box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
			max-width: 280px;
			box-sizing: border-box;
			margin: 0 auto;

			@media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
				font-size: 35px !important;
				max-width: 400px;
			}
		}
	}
`;
