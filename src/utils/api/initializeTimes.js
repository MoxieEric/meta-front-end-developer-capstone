import { initialBookingSlots } from '../../config/bookingSlots'
import { fetchAPI } from './bookingApi'

const initializeTimes = (date, guests = 2) => {
	const times = fetchAPI(new Date(date))
	const bookingSlots = initialBookingSlots.map((slot) => ({
		...slot,
		guests,
		date,
		available: times.includes(slot.time.replace('pm', '')),
	}))

	return bookingSlots
}

export default initializeTimes
