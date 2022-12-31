import React from 'react';
import styled from 'styled-components';
import Map from '../../components/Map/Map';
import PageLayout from '../../components/PageLayout/PageLayout';
import SectionLayout from '../../components/SectionLayout/SectionLayout';
import Text from '../../components/Text/Text';
import TitleSection from '../../components/TitleSection/TitleSection';

const Us = (): JSX.Element => {
	return (
		<PageLayout>
			<SectionLayout>
				<TitleSection
					headerTitle='TIPICUS - PARQUE ACUATICO'
					mainTitle='Donde encontrarnos'
				/>
				<StyledUs>
					<div className='map-section'>
						<Map />
					</div>
					<div className='contact-section'>
						<Text textType='title' textColor='white'>
							Dirección
						</Text>
						<Text textType='subtitle' textColor='white'>
							Estamos en RP11 KM 319 1/2, B7106, Los Toninas, La
							Costa, Bs As . Argentina
						</Text>
						<Text textType='subtitle' textColor='white'>
							Doble acceso al parque: a 500 mts. de la entrada de
							Las Toninas a través de ruta o a través de la
							rotonda principal de Las Toninas
						</Text>
						<Text textType='title' textColor='tertiary'>
							Temporada alta
						</Text>
						<Text textType='subtitle' textColor='tertiary'>
							Abiertos todos los dias - 10:00 - 19:00 hs.
						</Text>

						<Text textType='title' textColor='tertiary'>
							Temporada baja
						</Text>
						<Text textType='subtitle' textColor='tertiary'>
							Abiertos Sábados y Domingos - 10:00 - 19:00 hs.
						</Text>

						<Text textType='subtitle' textColor='tertiary'>
							+54 (2246) 58-5824 - hola@tipicus.com.ar
						</Text>
					</div>
				</StyledUs>
			</SectionLayout>
		</PageLayout>
	);
};

export default Us;

const StyledUs = styled.div`
	display: flex;
	width: 100%;
	height: 100%;
	justify-content: space-between;
	flex-direction: column;
	gap: ${({ theme }) => theme.spacing.xlg};
	padding-top: ${({ theme }) => theme.spacing.xlg};

	@media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
		flex-direction: row;
	}

	.map-section {
		width: 100%;
	}
	.contact-section {
		width: 100%;
		height: auto;
		background-color: ${({ theme }) => theme.secundary};
		padding: ${({ theme }) => theme.spacing.xlg};
		box-sizing: border-box;
		border-radius: ${({ theme }) => theme.radiusses.md};
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
		gap: ${({ theme }) => theme.spacing.lg};
		padding-bottom: 20px;
	}
`;
