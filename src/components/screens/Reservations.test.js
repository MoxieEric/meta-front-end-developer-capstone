import { screen } from '@testing-library/react'
import renderWithRouter from '../../utils/testing/renderWithRouter'
import Reservations from './Reservations'
import App from '../../App'
import Home from './Home'
import { act } from 'react'

const routes = [
	{
		path: '/',
		element: <Home />,
	},
	{
		path: '/reservations',
		element: <Reservations />,
	},
]

test('Render Reservations heading', async () => {
	const { router } = renderWithRouter(<App />, { routes })
	act(async () => {
		await router.navigate('/reservations')
	})
	const heading = screen.getByText('Make a Reservation')
	expect(heading).toBeInTheDocument()
})
