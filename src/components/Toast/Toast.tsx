import styled from 'styled-components';

import Text from '../Text/Text';

interface ToastInterface {
	message: string;
}

const Toast = ({ message }: ToastInterface): JSX.Element => {
	return (
		<StyledToast>
			<Text textColor='white' textType='text' textBold>
				{message}
			</Text>
		</StyledToast>
	);
};

export default Toast;

const StyledToast = styled.div`
	background-color: red;
	width: 100%;
	margin: 0 auto;
	background-color: ${({ theme }) => theme.tertiary};
	padding: ${({ theme }) => theme.spacing.lg};
	box-sizing: border-box;
	border-radius: ${({ theme }) => theme.radiusses.md};
	display: flex;
	align-items: center;
	flex-direction: column;
	gap: ${({ theme }) => theme.spacing.lg};
	text-align: center;
	svg {
		color: ${({ theme }) => theme.warning};
		font-size: 30px;
	}

	@media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		max-width: 450px;
	}
`;
