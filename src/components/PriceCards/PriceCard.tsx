import styled from 'styled-components';
import { pricesInterface } from '../../constants/pricesInfo';
import Text from '../Text/Text';
import Logo from '../../assets/Tipicus/Logo-tipicus-blanco.png';

interface PriceCardInterface extends pricesInterface {
	residentState: boolean;
}

const PriceCard = ({
	name,
	not_residents,
	residents,
	residentState,
}: PriceCardInterface): JSX.Element => {
	return (
		<CardContainer>
			<Text textType='subtitle-header' textColor='primary' textBold>
				{name}
			</Text>

			<StyledCard>
				<div className='title-container'>
					<Text textType='subtitle' textColor='white' textBold>
						{residentState ? residents.key : not_residents.key}
					</Text>
				</div>
				<div className='divider' />
				<div className='price-main'>
					<div className='price-container'>
						<Text textType='title'>
							{residentState
								? residents.full_time
								: not_residents.full_time}
						</Text>
						<Text textType='subtitle'>{`Jornada Completa`}</Text>
					</div>
					<div className='price-container'>
						<Text textType='title'>
							{residentState
								? residents.half_time
								: not_residents.half_time}
						</Text>
						<Text textType='subtitle'>{`Media Jornada`}</Text>
					</div>
				</div>
				<img src={Logo} alt='logo'></img>
			</StyledCard>
		</CardContainer>
	);
};

export default PriceCard;

const CardContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	gap: ${({ theme }) => theme.spacing.md};
`;

const StyledCard = styled.div`
	border: 1px solid black;
	height: 350px;
	width: 90%;
	max-width: 340px;
	position: relative;
	border-radius: ${({ theme }) => theme.radiusses.md};
	box-sizing: border-box;
	padding: ${({ theme }) => theme.spacing.xlg};
	background-color: ${({ theme }) => theme.white_primary};
	background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='350' height='300' preserveAspectRatio='none' viewBox='0 0 350 300'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1112%26quot%3b)' fill='none'%3e%3crect width='350' height='300' x='0' y='0' fill='rgba(10%2c 49%2c 101%2c 1)'%3e%3c/rect%3e%3cpath d='M0%2c111.004C20.326%2c112.991%2c32.828%2c88.849%2c49.767%2c77.439C66.242%2c66.342%2c88.037%2c61.912%2c98.21%2c44.851C108.72%2c27.226%2c111.972%2c4.19%2c104.939%2c-15.088C98.208%2c-33.541%2c75.347%2c-39.304%2c62.19%2c-53.888C49.416%2c-68.047%2c45.675%2c-89.691%2c29.11%2c-99.138C11.031%2c-109.449%2c-11.39%2c-112.636%2c-31.515%2c-107.329C-51.862%2c-101.963%2c-70.049%2c-88.136%2c-80.923%2c-70.12C-91.101%2c-53.257%2c-89.726%2c-32.404%2c-88.605%2c-12.74C-87.658%2c3.876%2c-83.014%2c19.668%2c-74.972%2c34.239C-67.392%2c47.972%2c-54.844%2c57.063%2c-43.884%2c68.285C-29.326%2c83.191%2c-20.737%2c108.977%2c0%2c111.004' fill='%23092e5e'%3e%3c/path%3e%3cpath d='M350 433.139C377.053 435.591 406.649 438.384 429.231 423.286 451.722 408.249 459.081 379.46299999999997 468.317 354.033 476.902 330.396 485.78200000000004 305.846 480.844 281.188 476.023 257.114 455.83799999999997 240.63 441.601 220.627 425.628 198.184 417.679 166.821 392.125 156.534 366.35 146.159 337.308 158.419 311.29200000000003 168.174 286.745 177.378 265.539 192.19400000000002 247.159 210.888 227.776 230.602 205.317 251.291 202.527 278.797 199.759 306.09 218.784 329.926 232.687 353.575 245.289 375.012 258.911 395.756 279.491 409.714 300.411 423.903 324.825 430.85699999999997 350 433.139' fill='%230b346c'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1112'%3e%3crect width='350' height='300' fill='white'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e");

	.title-container {
		height: auto;
		display: flex;
		align-items: center;
		padding-bottom: ${({ theme }) => theme.spacing.md};
		z-index: 20000;
		justify-content: space-between;
	}

	.divider {
		height: 1px;
		background-color: ${({ theme }) => theme.white_primary};
		width: 100%;
		border-radius: 50%;
	}
	.price-main {
		height: 80%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-evenly;
		.price-container {
			display: flex;
			align-items: center;
			padding: ${({ theme }) => theme.spacing.lg};
			flex-direction: column;
			justify-content: space-between;
			gap: ${({ theme }) => theme.spacing.md};
			min-height: 20%;
			box-sizing: border-box;
		}
	}

	img {
		height: 30px;
		position: absolute;
		bottom: 15px;
		left: 50%;
		transform: translateX(-50%);
	}
`;
