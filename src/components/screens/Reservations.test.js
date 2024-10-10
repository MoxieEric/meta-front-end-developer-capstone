import { fireEvent, screen } from '@testing-library/react'
import Reservations from './Reservations'
import { initialBookingSlots } from '../../config/bookingSlots'
import renderWithContext from '../../utils/testing/renderWithContext'

const value = {
	isOpen: false,
	bookingSlots: [],
	reservation: {},
	activeReservationSlot: null,
	getAvailableSlots: (date, guests) => jest.fn(),
	onOpen: (activeReservationSlot) => jest.fn(),
	onClose: () => jest.fn(),
	// bookReservation: (reservation) => {
	// 	dispatch({ type: actions.BOOK, reservation })
	// 	localStorage.setItem('reservation', JSON.stringify(reservation))
	// },
}

describe('Reservations Page', () => {
	test('Render Reservations List', async () => {
		const providerProps = {
			value,
		}
		renderWithContext(<Reservations />, { providerProps })

		const heading = screen.getByText('Make a Reservation')
		expect(heading).toBeInTheDocument()
		const subheading = screen.getByText('Available Tables')
		expect(subheading).toBeInTheDocument()
		const bookingOptions = screen.queryAllByTestId('booking-slot')
		expect(bookingOptions).toHaveLength(initialBookingSlots.length)
	})
	test('Update options on date change', async () => {
		const providerProps = {
			value,
		}
		renderWithContext(<Reservations />, { providerProps })

		const bookingDate = '2024-10-31'
		const dateInput = screen.getByLabelText(/Date/)
		const initialTimeOptions = (
			await screen.findAllByTestId('booking-slot')
		).filter((option) => option.disabled)
		fireEvent.change(dateInput, { target: { value: bookingDate } })
		fireEvent.blur(dateInput)
		const updatedTimeOptions = (
			await screen.findAllByTestId('booking-slot')
		).filter((option) => option.disabled)

		expect(dateInput).toHaveValue(bookingDate)
		expect(updatedTimeOptions).not.toHaveLength(initialTimeOptions.length)
	})
})
