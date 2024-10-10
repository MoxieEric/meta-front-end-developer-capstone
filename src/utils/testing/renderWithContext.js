import { render } from '@testing-library/react'
import { BookingProvider } from '../../context/bookingContext'
import { MemoryRouter } from 'react-router-dom'

const renderWithContext = (ui, { providerProps, ...renderOptions }) => {
	return render(
		<MemoryRouter>
			<BookingProvider {...providerProps}>{ui}</BookingProvider>
		</MemoryRouter>,
		renderOptions
	)
}
export default renderWithContext
