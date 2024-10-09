import { render, screen } from '@testing-library/react'
import App from './App'
import renderWithRouter from './utils/testing/renderWithRouter'
import Home from './components/screens/Home'

const routes = [
	{
		path: '/',
		element: <Home />,
	},
]

test('Render app heading', () => {
	const { router } = renderWithRouter(<App />, { routes })
	const heading = screen.getByText('Little Lemon')
	expect(heading).toBeInTheDocument()
})
