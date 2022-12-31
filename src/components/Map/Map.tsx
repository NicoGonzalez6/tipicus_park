import React from 'react';
//@ts-ignore
import { MapContainer, TileLayer, Marker, Tooltip } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import styled from 'styled-components';
import markerIconPng from 'leaflet/dist/images/marker-icon.png';
import { Icon } from 'leaflet';
const Map = (): JSX.Element => {
	return (
		<StyledMap>
			<MapContainer
				center={[-36.4828881087318, -56.7129887439846]}
				zoom={16}
				scrollWheelZoom={false}
			>
				<TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />

				<Marker
					position={[-36.4828881087318, -56.7129887439846]}
					icon={
						new Icon({
							iconUrl: markerIconPng,
							iconSize: [25, 41],
							iconAnchor: [12, 41],
						})
					}
				>
					<Tooltip
						direction='right'
						offset={[0, 0]}
						opacity={0.5}
						permanent
					>
						TIPÏCUS PARQUE
					</Tooltip>
				</Marker>
			</MapContainer>
		</StyledMap>
	);
};

export default Map;

const StyledMap = styled.div`
	width: 100%;

	.leaflet-container {
		width: 100%;
		height: 500px;
		border-radius: ${({ theme }) => theme.radiusses.md};
		@media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
			height: 500px;
		}
		@media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
			height: 500px;
		}
		@media (min-width: ${({ theme }) => theme.breakpoints.xl}) {
			height: 500px;
		}
	}
`;
