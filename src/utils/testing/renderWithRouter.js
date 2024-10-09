import { render } from '@testing-library/react'
import { createMemoryRouter, RouterProvider } from 'react-router-dom'

const renderWithRouter = (ui, { routes, initialEntries = ['/'] } = {}) => {
	const router = createMemoryRouter(routes, { initialEntries })

	return {
		...render(<RouterProvider router={router}>{ui}</RouterProvider>),
		router,
	}
}

export default renderWithRouter
