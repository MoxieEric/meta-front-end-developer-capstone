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
			firstName: '',
			lastName: '',
			email: '',
			comment: '',
			occasion: '',
		},
		activeReservationSlot: null,
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
					activeReservationSlot: action.activeReservationSlot,
				}
			}
			case actions.CLOSE: {
				return {
					...state,
					isOpen: false,
					activeReservationSlot: null,
				}
			}
			case actions.BOOK: {
				return {
					...state,
					reservation: action.reservation,
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
		activeReservationSlot: state.activeReservationSlot,
		getAvailableSlots: (date, guests) => {
			dispatch({ type: actions.GET_TIMES, date, guests })
		},
		onOpen: (activeReservationSlot) => {
			dispatch({ type: actions.OPEN, activeReservationSlot })
		},
		onClose: () => {
			dispatch({ type: actions.CLOSE })
		},
		bookReservation: (reservation) => {
			dispatch({ type: actions.BOOK, reservation })
			localStorage.setItem('reservation', JSON.stringify(reservation))
		},
	}

	return (
		<BookingContext.Provider value={value}>
			{children}
		</BookingContext.Provider>
	)
}

export const useBookingContext = () => useContext(BookingContext)
