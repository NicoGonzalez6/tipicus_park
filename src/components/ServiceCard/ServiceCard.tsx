import React from 'react';
import styled from 'styled-components';
import { ticketInfoInterface } from '../../utils/ticketInfo';
import Text from '../Text/Text';

const ServiceCard = ({ title, text }: ticketInfoInterface): JSX.Element => {
	return (
		<StyledCard>
			<Text textType='subtitle' textColor='primary' textBold>
				{title}
			</Text>
			<Text textType='text' textColor='black'>
				{text}
			</Text>
		</StyledCard>
	);
};

export default ServiceCard;

const StyledCard = styled.div`
	min-height: 80px;
	background-color: ${({ theme }) => theme.white_primary};
	border-radius: ${({ theme }) => theme.radiusses.md};
	box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.1);
	cursor: pointer;
	transition: ${({ theme }) => theme.transitions.lg};
	display: flex;
	flex-direction: column;
	box-sizing: border-box;
	padding: ${({ theme }) => theme.spacing.xlg};
	gap: 10px;
	text-align: justify;

	&:hover {
		box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.3);
	}
`;
