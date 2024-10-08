import { createContext, useContext, useState } from 'react'

const BookingContext = createContext(undefined)

export const BookingProvider = ({ children }) => {
	const [state, setState] = useState({
		isOpen: false,
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
		},
		response: 'success',
		responseMessage: '',
	})

	return (
		<BookingContext.Provider
			value={{
				...state,
				onOpen: (reservation) => {
					setState({ ...state, isOpen: true, reservation })
				},
				onClose: () => setState({ ...state, isOpen: false }),
			}}
		>
			{children}
		</BookingContext.Provider>
	)
}

export const useBookingContext = () => useContext(BookingContext)
