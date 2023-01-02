import { useState } from 'react';
import styled from 'styled-components';
import PageLayout from '../../components/PageLayout/PageLayout';
import PriceCard from '../../components/PriceCards/PriceCard';
import ResidentSwitcher from '../../components/ResidentSwitcher/ResidentSwitcher';
import SectionLayout from '../../components/SectionLayout/SectionLayout';
import ServiceCard from '../../components/ServiceCard/ServiceCard';
import TitleSection from '../../components/TitleSection/TitleSection';
import Toast from '../../components/Toast/Toast';
import { pricesInfo } from '../../constants/pricesInfo';

const Prices = (): JSX.Element => {
	const [residentState, setResidentState] = useState<boolean>(false);

	const residentHandler = (): void => {
		setResidentState(!residentState);
	};

	return (
		<PageLayout>
			<SectionLayout>
				<TitleSection
					mainTitle='PRECIOS'
					text='Tarifas'
					headerTitle='PARQUE TIPICUS'
				/>
				<ResidentSwitcher
					label='Soy de la costa?'
					value={residentState}
					onChange={residentHandler}
				/>

				{residentState && (
					<Toast message='Presentando DNI con domicilio en LA COSTA' />
				)}

				<PriceContainer>
					{pricesInfo.map((price) => {
						return (
							<PriceCard
								{...price}
								residentState={residentState}
							/>
						);
					})}
				</PriceContainer>
				<Toast message='El costo del estacionamiento es de $200' />
			</SectionLayout>
			<SectionLayout>
				<TitleSection
					mainTitle='JORNADAS'
					headerTitle='PARQUE TIPICUS'
					text='Horarios'
				/>

				<ServiceCard
					title='Jornada Completa'
					text='11:00hs a 19:00hs.'
				/>
				<ServiceCard title='Media jornada' text='11:00hs a 19:00hs.' />
			</SectionLayout>
		</PageLayout>
	);
};

export default Prices;

const PriceContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: ${({ theme }) => theme.spacing.md};

	@media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		flex-direction: row;
		justify-content: space-between;
		padding-top: ${({ theme }) => theme.spacing.lg};
	}
`;

const InfoContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: ${({ theme }) => theme.spacing.md};
`;
