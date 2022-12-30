import React from 'react';
import styled from 'styled-components';
import Card from '../../components/Card/Card';
import { cardInfo } from '../../utils/cardInfo';
import TitleSection from '../../components/TitleSection/TitleSection';
import Slider from '../../components/Slider/Slider';
import { images, heroImg } from '../../utils/images';
import Hero from '../../components/Hero/Hero';
import { heroBannerText } from '../../utils/heroText';
import SectionLayout from '../../components/SectionLayout/SectionLayout';
import { ticketInfo } from '../../utils/ticketInfo';
import ServiceCard from '../../components/ServiceCard/ServiceCard';

const Home: React.FC = () => {
	return (
		<StyledHome>
			<SectionLayout>
				<Hero images={heroImg} heroText={heroBannerText} />
			</SectionLayout>
			<SectionLayout cardSection={true}>
				<TitleSection
					headerTitle='TIPICUS - PARQUE ACUATICO'
					mainTitle='BIENVENIDOS'
					text={`Pensamos en algo para los chicos y grandes, para que las
				vacaciones sean inolvidables…`}
				/>
				<div className='card-container'>
					{cardInfo.map((card) => {
						return <Card {...card} />;
					})}
				</div>
			</SectionLayout>
			<SectionLayout>
				<TitleSection
					mainTitle='ENTRADAS'
					text={`Ofertas especiales!`}
				/>
				{ticketInfo.map((service) => {
					return <ServiceCard {...service}></ServiceCard>;
				})}
			</SectionLayout>
			<SectionLayout>
				<TitleSection
					text='¡Disfruta de tipicus como vos quieras!'
					mainTitle='GALERIA'
				/>
				<Slider images={images} />
			</SectionLayout>
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
