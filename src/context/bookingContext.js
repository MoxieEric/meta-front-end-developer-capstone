import { createContext, useContext, useState } from 'react'

const BookingContext = createContext(undefined)

export const BookingProvider = ({ children }) => {
	const [state, setState] = useState({
		modalOpen: false,
		response: 'success',
		responseMessage: '',
	})

	return (
		<BookingContext.Provider
			value={{
				...state,
				onOpen: (type, message) => setState({ isOpen: true }),
				onClose: () =>
					setState({ isOpen: false, type: '', message: '' }),
			}}
		>
			{children}
		</BookingContext.Provider>
	)
}

export const useBookingContext = () => useContext(BookingContext)
