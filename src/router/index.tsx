import { createBrowserRouter } from 'react-router-dom';
import Home from '../Page/Home/Home';
import Prices from '../Page/Prices/Prices';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <Home />,
	},
	{
		path: '/prices',
		element: <Prices />,
	},
]);
