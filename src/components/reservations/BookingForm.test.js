/* eslint-disable testing-library/no-unnecessary-act */
import { fireEvent, screen } from '@testing-library/react'
import { initialBookingSlots } from '../../config/bookingSlots'
import renderWithContext from '../../utils/testing/renderWithContext'
import BookingForm from './BookingForm'
import { act } from 'react'

const value = {
	isOpen: false,
	bookingSlots: initialBookingSlots,
	reservation: {
		...initialBookingSlots[0],
	},
	activeReservationSlot: {
		...initialBookingSlots[0],
	},
	getAvailableSlots: (date, guests) => jest.fn(),
	onOpen: (activeReservationSlot) => jest.fn(),
	onClose: () => jest.fn(),
	bookReservation: (reservation) => jest.fn,
}

describe('Booking Form', () => {
	test('Render Booking Form', async () => {
		const providerProps = {
			value,
		}
		renderWithContext(<BookingForm />, { providerProps })

		const heading = screen.getByText('Confirm Reservation')
		expect(heading).toBeInTheDocument()
	})
	test('Update form values and check validity', async () => {
		const providerProps = {
			value,
		}
		renderWithContext(<BookingForm />, { providerProps })

		const firstName = screen.getByLabelText(/First\sName/)
		const lastName = screen.getByLabelText(/Last\sName/)
		const email = screen.getByLabelText(/Email\sAddress/)
		const terms = screen.getByTestId('terms-checkbox')
		const bookingForm = screen.getByTestId('booking-form')
		const submitButton = screen.getByTestId('book-button')

		await act(async () => {
			fireEvent.change(email, { target: { value: 'bob' } })
			fireEvent.blur(email)

			fireEvent.focus(terms)
			fireEvent.blur(terms)
		})

		expect(bookingForm).toBeInvalid()

		await act(async () => {
			fireEvent.change(firstName, { target: { value: 'Bob' } })
			fireEvent.blur(firstName)

			fireEvent.change(lastName, { target: { value: 'Smith' } })
			fireEvent.blur(lastName)

			fireEvent.change(email, { target: { value: 'bob@example.com' } })
			fireEvent.blur(email)

			fireEvent.click(terms)
			fireEvent.blur(terms)
		})

		expect(firstName).toHaveValue('Bob')
		expect(lastName).toHaveValue('Smith')
		expect(email).toHaveValue('bob@example.com')
		expect(terms).toBeChecked()
		expect(bookingForm).toBeValid()
	})
	test('Submit booking, save to local storage', async () => {
		const providerProps = {
			value,
		}
		renderWithContext(<BookingForm />, { providerProps })

		const firstName = screen.getByLabelText(/First\sName/)
		const lastName = screen.getByLabelText(/Last\sName/)
		const email = screen.getByLabelText(/Email\sAddress/)
		const terms = screen.getByTestId('terms-checkbox')
		const bookingForm = screen.getByTestId('booking-form')
		const submitButton = screen.getByTestId('book-button')

		await act(async () => {
			fireEvent.change(firstName, { target: { value: 'Bob' } })
			fireEvent.blur(firstName)

			fireEvent.change(lastName, { target: { value: 'Smith' } })
			fireEvent.blur(lastName)

			fireEvent.change(email, { target: { value: 'bob@example.com' } })
			fireEvent.blur(email)

			fireEvent.click(terms)
			fireEvent.blur(terms)
		})

		const spyLocalStorageBooking = jest.spyOn(localStorage, 'setItem')

		await act(async () => {
			fireEvent.click(submitButton)
		})

		expect(spyLocalStorageBooking).toHaveBeenCalled()
	})
})
