import { ClockIcon, NoSymbolIcon, PlusIcon } from '@heroicons/react/24/outline'
import { useBookingContext } from '../../context/bookingContext'

const BookingSlot = ({ date, time, seating, guests, available }) => {
	const { onOpen } = useBookingContext()
	const handleClick = (e) => {
		e.preventDefault()
		onOpen({
			date,
			time,
			guests,
			seating,
		})
	}
	return (
		<button
			className='reservation-option button button--light'
			disabled={!available}
			onClick={handleClick}
		>
			<div className='content'>
				<ClockIcon className='icon' />
				<div className='font-bold'>{time}</div>
				<div>{seating}</div>
			</div>
			<div className='icons'>
				<PlusIcon className='icon icon--add' />
				<NoSymbolIcon className='icon icon--disabled' />
			</div>
		</button>
	)
}

export default BookingSlot
