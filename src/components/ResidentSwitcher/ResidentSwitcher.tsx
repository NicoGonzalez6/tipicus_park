import styled, { css } from 'styled-components';
import Text from '../Text/Text';

interface SwitcherInterface {
	value: boolean;
	label?: string;
	onChange?: any;
}

const ResidentSwitcher = ({
	value,
	label,
	onChange,
}: SwitcherInterface): JSX.Element => {
	return (
		<StyledSwitcher value={value} onClick={onChange}>
			{label && (
				<Text textType='subtitle' textColor='primary' textBold>
					{label}
				</Text>
			)}
			<div className='switcher'>
				<input type='checkbox' checked={value} />
			</div>
		</StyledSwitcher>
	);
};

export default ResidentSwitcher;

const StyledSwitcher = styled.div<SwitcherInterface>`
	margin: 0 auto;
	width: 90%;
	display: flex;
	align-items: center;
	justify-content: space-between;

	@media (min-width: 420px) {
		width: 300px;
	}

	.switcher {
		width: 120px;
		height: 50px;
		background-color: ${({ theme }) => theme.tertiary};
		border-radius: ${({ theme }) => theme.radiusses.md};
		position: relative;
		cursor: pointer;
		box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.4);
		transition: ${({ theme }) => theme.transitions.md};
		&:hover {
			filter: brightness(90%);
		}
		input {
			-webkit-appearance: none;
			position: absolute;
			top: 45%;
			transform: translateY(-50%);
			transition: ${({ theme }) => theme.transitions.md};
			height: 35px;
			background-color: ${({ theme }) => theme.white_primary};
			border-radius: 50%;
			width: 35px;
		}

		${({ value }) => {
			if (value) {
				return css`
					input {
						left: 65px;
					}
					[type='checkbox']:checked {
						background-color: ${({ theme }) => theme.primary};
					}

					input::before {
						content: 'Si';
						-webkit-appearance: none;
						position: absolute;
						top: 50%;
						left: 11px;
						display: flex;
						align-items: center;
						transform: translateY(-52%);
						transition: 0.3s ease-in-out;
						width: 40px;
						height: 40px;
						cursor: pointer;
						border-radius: 50%;
						color: ${({ theme }) => theme.white_primary};
						font-family: 'Montserrat', sans-serif;
					}
				`;
			} else {
				return css`
					input {
						left: 10px;
					}

					input::before {
						content: 'No';
						-webkit-appearance: none;
						position: absolute;
						top: 50%;
						left: 8px;
						display: flex;
						align-items: center;
						transform: translateY(-52%);
						transition: 0.3s ease-in-out;
						width: 40px;
						height: 40px;
						cursor: pointer;
						border-radius: 50%;
						font-family: 'Montserrat', sans-serif;
					}
				`;
			}
		}}
	}
`;
