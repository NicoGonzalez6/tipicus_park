import React from 'react';
import styled from 'styled-components';
import Text from '../Text/Text';
import { cardInfoInterface } from '../../utils/cardInfo';

const Card: React.FC<cardInfoInterface> = ({ title, text, img }) => {
	return (
		<StyledCard>
			<div className='img-container'>
				<img src={img} alt='imagenes del parque' />
			</div>
			<div className='title-container'>
				<Text textType='subtitle' textColor='primary' textBold={true}>
					{title}
				</Text>
			</div>
			<div className='text-container'>
				<Text textType='text' textColor='primary'>
					{text}
				</Text>
			</div>
		</StyledCard>
	);
};

export default Card;

const StyledCard = styled.div`
	display: flex;
	flex-direction: column;
	height: 280px;
	width: 100%;
	max-width: 340px;
	box-sizing: border-box;
	border-radius: ${({ theme }) => theme.radiusses.sm};

	gap: 4px;
	cursor: pointer;
	transition: ${({ theme }) => theme.transitions.md} ease-in-out;

	.img-container {
		height: 190px;
		width: 100%;

		img {
			display: block;
			object-fit: cover;
			width: 100%;
			height: 190px;
			border-radius: ${({ theme }) => {
				return ` ${theme.radiusses.sm} `;
			}};
			filter: contrast(85%);
		}
	}

	.title-container {
		text-align: center;
		padding-top: ${({ theme }) => theme.spacing.md};
	}

	.text-container {
		text-align: center;
		padding-top: ${({ theme }) => theme.spacing.sm};
	}
`;
