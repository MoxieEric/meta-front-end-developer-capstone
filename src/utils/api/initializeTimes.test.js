import initializeTimes from './initializeTimes'
import { initialBookingSlots } from '../../config/bookingSlots'

test('Initialize Times', () => {
	const times = initializeTimes(new Date(), 2)
	expect(times).toHaveLength(initialBookingSlots.length)
})
