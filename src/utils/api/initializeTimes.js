import { initialBookingSlots } from '../../config/bookingSlots'
import { fetchAPI } from './bookingApi'

const initializeTimes = (date) => {
	const times = fetchAPI(new Date(date))
	const bookingSlots = initialBookingSlots.map((slot) => ({
		...slot,
		available: times.includes(slot.time.replace('pm', '')),
	}))

	return bookingSlots
}

export default initializeTimes
