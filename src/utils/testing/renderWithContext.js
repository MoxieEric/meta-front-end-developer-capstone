import { render } from '@testing-library/react'
import { BookingProvider } from '../../context/bookingContext'

const renderWithContext = (ui, { providerProps, ...renderOptions }) => {
	return render(
		<BookingProvider {...providerProps}>{ui}</BookingProvider>,
		renderOptions
	)
}
export default renderWithContext
