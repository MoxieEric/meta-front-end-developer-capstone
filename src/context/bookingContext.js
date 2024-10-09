import { createContext, useContext, useReducer } from 'react'
import { initialBookingSlots } from '../config/bookingSlots'

const BookingContext = createContext(null)

export const BookingProvider = ({ children }) => {
	const initialState = {
		isOpen: false,
		bookingSlots: [...initialBookingSlots],
		reservation: {
			date: '',
			time: '',
			guests: 0,
			seating: '',
		},
		user: {
			firstName: '',
			lastName: '',
			email: '',
			comments: '',
			occasion: '',
		},
		response: 'success',
		responseMessage: '',
	}
	const actions = {
		OPEN: 'OPEN',
		CLOSE: 'CLOSE',
		BOOK: 'BOOK',
	}
	function bookingReducer(state, action) {
		console.log('Dispatch: ', action, state)
		switch (action.type) {
			case actions.OPEN: {
				return {
					...state,
					isOpen: true,
					reservation: action.reservation,
				}
			}
			case actions.CLOSE: {
				return {
					...state,
					isOpen: false,
					reservation: {
						id: '',
						date: '',
						time: '',
						guests: 0,
						seating: '',
					},
				}
			}
			case actions.BOOK: {
				return {
					...state,
					user: action.user,
				}
			}
			default: {
				console.error('Unknown action: ' + action)
				return state
			}
		}
	}

	const [state, dispatch] = useReducer(bookingReducer, initialState)

	const value = {
		isOpen: state.isOpen,
		bookingSlots: state.bookingSlots,
		reservation: state.reservation,
		user: state.user,
		onOpen: (reservation) => {
			dispatch({ type: actions.OPEN, reservation })
		},
		onClose: () => {
			dispatch({ type: actions.CLOSE })
		},
		bookReservation: (user) => {
			dispatch({ type: actions.BOOK, user })
		},
	}

	return (
		<BookingContext.Provider value={value}>
			{children}
		</BookingContext.Provider>
	)
}

export const useBookingContext = () => useContext(BookingContext)
