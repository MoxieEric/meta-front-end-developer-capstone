import App from '../App'
import BookingConfirmation from '../components/screens/BookingConfirmation'
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
				element: <BookingConfirmation />,
			},
		],
	},
]

export default routes
