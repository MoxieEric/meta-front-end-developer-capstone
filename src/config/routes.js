import App from '../App'
import ConfirmedBooking from '../components/screens/ConfirmedBooking'
import ErrorPage from '../components/screens/Error'
import Home from '../components/screens/Home'
import Reservations from '../components/screens/Reservations'

const routes = [
	{
		path: '/',
		element: <App />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: '/',
				element: <Home />,
			},
			{
				path: '/reservations',
				element: <Reservations />,
			},
			{
				path: '/confirmed',
				element: <ConfirmedBooking />,
			},
		],
	},
]

export default routes
