import { render, screen } from '@testing-library/react'
import Reservations from './Reservations'
import { BookingProvider } from '../../context/bookingContext'
import { initialBookingSlots } from '../../config/bookingSlots'
import renderWithContext from '../../utils/testing/renderWithContext'

describe('Reservations Page', () => {
	test('Render Reservations heading', async () => {
		const value = {
			isOpen: false,
			bookingSlots: [],
			reservation: {},
			activeReservationSlot: null,
			getAvailableSlots: (date, guests) => jest.fn(),
			// getAvailableSlots: (date, guests) => {
			// 	dispatch({ type: actions.GET_TIMES, date, guests })
			// },
			// onOpen: (activeReservationSlot) => {
			// 	dispatch({ type: actions.OPEN, activeReservationSlot })
			// },
			// onClose: () => {
			// 	dispatch({ type: actions.CLOSE })
			// },
			// bookReservation: (reservation) => {
			// 	dispatch({ type: actions.BOOK, reservation })
			// 	localStorage.setItem('reservation', JSON.stringify(reservation))
			// },
		}

		const providerProps = {
			value,
		}
		renderWithContext(<Reservations />, { providerProps })

		const heading = screen.getByText('Make a Reservation')
		expect(heading).toBeInTheDocument()

		const bookingOptions = screen.queryAllByTestId('booking-slot')
		expect(bookingOptions).toHaveLength(initialBookingSlots.length)
	})
})
