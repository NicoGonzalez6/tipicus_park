import ReactDOM from 'react-dom/client';
import './index.css';
import { ThemeProvider } from 'styled-components';
import GlobalStyles, { defaultTheme } from './styles/index';
import { RouterProvider } from 'react-router-dom';
import { router } from '../src/router/index';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(
	<ThemeProvider theme={defaultTheme}>
		<GlobalStyles />
		<RouterProvider router={router} />
	</ThemeProvider>
);
