import { render, screen } from '@testing-library/react'
import App from './App'

test('Render app heading', () => {
	render(<App />)
	const heading = screen.getByTestId('homepage__heading1')
	expect(heading).toBeInTheDocument()
})
