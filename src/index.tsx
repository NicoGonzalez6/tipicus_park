import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { ThemeProvider } from 'styled-components';
import GlobalStyles, { defaultTheme } from './styles/index';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(
	<React.StrictMode>
		<ThemeProvider theme={defaultTheme}>
			<GlobalStyles />
			<App />
		</ThemeProvider>
	</React.StrictMode>
);
