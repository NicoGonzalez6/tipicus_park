import { useState } from 'react';
import styled from 'styled-components';
import PageLayout from '../../components/PageLayout/PageLayout';
import PriceCard from '../../components/PriceCards/PriceCard';
import ResidentSwitcher from '../../components/ResidentSwitcher/ResidentSwitcher';
import SectionLayout from '../../components/SectionLayout/SectionLayout';
import TitleSection from '../../components/TitleSection/TitleSection';
import { pricesInfo } from '../../utils/pricesInfo';

const Prices = (): JSX.Element => {
	const [residentState, setResidentState] = useState<boolean>(false);

	const residentHandler = (): void => {
		setResidentState(!residentState);
	};

	return (
		<PageLayout>
			<SectionLayout>
				<TitleSection
					mainTitle='Precios'
					text='Tarifas'
					headerTitle='PARQUE TIPICUS'
				/>
				<ResidentSwitcher
					label='Soy de la costa?'
					value={residentState}
					onChange={residentHandler}
				/>

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
