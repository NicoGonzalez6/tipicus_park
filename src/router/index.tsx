import { createBrowserRouter } from 'react-router-dom';
import Home from '../Page/Home/Home';
import Prices from '../Page/Prices/Prices';
import Tickets from '../Page/Tickets/Tickets';
import Us from '../Page/Us/Us';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <Home />,
	},
	{
		path: '/prices',
		element: <Prices />,
	},
	{
		path: '/us',
		element: <Us />,
	},
	{
		path: '/tickets',
		element: <Tickets />,
	},
]);
