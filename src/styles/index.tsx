import { createGlobalStyle, DefaultTheme } from 'styled-components';

export default createGlobalStyle`

    body{
        margin: 0;
        padding: 0;
        outline:0;
        box-sizing:border-box;
        font-family: 'Montserrat', sans-serif;
        background-color: ${({ theme }) => theme.white_secundary};
    }

    ul,p{
        padding: 0;
        margin: 0;
        list-style: none;
        text-decoration: none;
    }

	
`;

export const defaultTheme: DefaultTheme = {
	white_primary: '#fff',
	white_secundary: '#f8f9f9',
	secundary: '#222222',
	primary: '#0a3165',
	spacing: {
		sm: '6px',
		md: '10px',
		lg: '12px',
		xlg: '15px',
		xxlg: '25px',
	},
	container_spacing: {
		container: '5px 20px',
		home_container: '20px',
	},
	transitions: {
		sm: '0.1s',
		md: '0.2s',
		lg: '0.3s',
	},
	breakpoints: {
		sm: '768px',
		md: '960px',
		lg: '1250px',
		xl: '1450px',
	},
	container_widths: {
		full: '100%',
		sm: '90%',
		md: '80%',
		lg: '70%',
	},
	radiusses: {
		sm: '6px',
		md: '10px',
		lg: '12px',
	},
};
