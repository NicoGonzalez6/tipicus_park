import React from 'react';
import styled from 'styled-components';
import Text from '../Text/Text';
import { AiOutlineInstagram, AiOutlineFacebook } from 'react-icons/ai';

const Footer = (): JSX.Element => {
	const redirect = (url: string) => {
		window.open(url, '_blank');
	};

	return (
		<StyledFooter>
			<div className='social-media'>
				<AiOutlineInstagram
					target='_blank'
					onClick={() =>
						redirect(
							'https://www.instagram.com/parqueacuaticotipicus/'
						)
					}
				/>
				<AiOutlineFacebook
					target='_blank'
					onClick={() =>
						redirect(
							'https://www.facebook.com/parqueacuaticotipicus/'
						)
					}
				/>
			</div>
			<Text textColor='white' textType='text'>
				@2022 Tipicus.com.ar
			</Text>
		</StyledFooter>
	);
};

export default Footer;

const StyledFooter = styled.div`
	height: 10vh;
	background-color: ${({ theme }) => theme.secundary};
	padding: ${({ theme }) => theme.container_spacing.container};
	box-sizing: border-box;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	gap: ${({ theme }) => theme.spacing.sm};

	.social-media {
		display: flex;
		gap: ${({ theme }) => theme.spacing.sm};
		cursor: pointer;
	}
	svg {
		color: ${({ theme }) => theme.white_primary};
		font-size: 20px;
	}
`;
