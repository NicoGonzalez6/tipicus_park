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
import PageLayout from '../../components/PageLayout/PageLayout';

const Home: React.FC = () => {
	return (
		<PageLayout>
			<SectionLayout id='home-section'>
				<Hero images={heroImg} heroText={heroBannerText} />
			</SectionLayout>
			<SectionLayout cardSection={true} id='cards-section'>
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
			<SectionLayout id='ticket-section'>
				<TitleSection
					mainTitle='ENTRADAS'
					text={`Ofertas especiales!`}
				/>
				{ticketInfo.map((service) => {
					return <ServiceCard {...service}></ServiceCard>;
				})}
			</SectionLayout>
			<SectionLayout id='galery-section'>
				<TitleSection
					text='¡Disfruta de tipicus como vos quieras!'
					mainTitle='GALERIA'
				/>
				<Slider images={images} />
			</SectionLayout>
		</PageLayout>
	);
};

export default Home;
