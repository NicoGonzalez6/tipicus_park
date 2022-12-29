import React from 'react';
import styled from 'styled-components';
import Card from '../Card/Card';
import { cardInfo } from '../../utils/cardInfo';
import TitleSection from '../TitleSection/TitleSection';
import Slider from '../Slider/Slider';

const Home: React.FC = () => {
	const headerTitle = 'TIPICUS - PARQUE ACUATICO';
	const mainTitle = 'BIENVENIDOS';
	const text = `Pensamos en algo para los chicos y grandes, para que las
				vacaciones sean inolvidables…`;

	return (
		<StyledHome>
			<CardSection>
				<TitleSection
					headerTitle={headerTitle}
					mainTitle={mainTitle}
					text={text}
				/>
				<div className='card-container'>
					{cardInfo.map((card) => {
						return <Card {...card} />;
					})}
				</div>
			</CardSection>
			<GalerySection>
				<TitleSection
					text='Disfruta de tipicus como vos quieras!'
					mainTitle={'GALERIA'}
				/>
				<div className='slider-container'>
					<Slider></Slider>
				</div>
			</GalerySection>
		</StyledHome>
	);
};

export default Home;

const StyledHome = styled.section`
	min-height: 80vh;
	height: auto;
	padding: ${({ theme }) => theme.container_spacing.home_container};
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: ${({ theme }) => theme.spacing.xlg};

	@media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		width: ${({ theme }) => theme.container_widths.sm};
		margin: 0 auto;
	}

	@media (min-width: ${({ theme }) => theme.breakpoints.md}) {
		width: ${({ theme }) => theme.container_widths.md};
		margin: 0 auto;
	}

	@media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
		width: ${({ theme }) => theme.container_widths.lg};
		margin: 0 auto;
	}
`;

const CardSection = styled.section`
	display: flex;
	flex-direction: column;
	gap: ${({ theme }) => theme.spacing.xxlg};

	.card-container {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: center;
		gap: ${({ theme }) => theme.spacing.lg};

		@media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
			justify-content: space-evenly;
		}
	}
`;

const GalerySection = styled.section`
	display: flex;
	flex-direction: column;
	gap: ${({ theme }) => theme.spacing.xxlg};
	min-height: 50vh;
	width: 100%;

	.slider-container {
	}
`;
