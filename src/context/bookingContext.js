import { createContext, useContext, useReducer } from 'react'
import initializeTimes from '../utils/api/initializeTimes'

const BookingContext = createContext(null)

export const BookingProvider = ({ children }) => {
	const initialState = {
		isOpen: false,
		bookingSlots: [],
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
			comment: '',
			occasion: '',
		},
		response: 'success',
		responseMessage: '',
	}
	const actions = {
		OPEN: 'OPEN',
		CLOSE: 'CLOSE',
		BOOK: 'BOOK',
		GET_TIMES: 'GET_TIMES',
	}
	function bookingReducer(state, action) {
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
				}
			}
			case actions.BOOK: {
				return {
					...state,
					user: action.user,
				}
			}
			case actions.GET_TIMES: {
				const times = initializeTimes(action.date, action.guests)
				return {
					...state,
					bookingSlots: times,
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
		getAvailableSlots: (date, guests) => {
			dispatch({ type: actions.GET_TIMES, date, guests })
		},
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
