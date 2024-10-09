import {
	CalendarIcon,
	SparklesIcon,
	UsersIcon,
} from '@heroicons/react/24/outline'
import { useBookingContext } from '../../context/bookingContext'
import TableIcon from '../icons/TableIcon'
import { useEffect, useState } from 'react'
import { DateTime } from 'luxon'

const ReservationDetails = () => {
	const { reservation, user } = useBookingContext()
	const [reservationDate, setReservationDate] = useState('')
	useEffect(() => {
		const label = DateTime.fromJSDate(new Date(reservation.date)).toFormat(
			'cccc LLL. d,'
		)
		setReservationDate(label)
	}, [reservation])
	return (
		<div className='reservation-details'>
			<div className='item'>
				<CalendarIcon className='icon' />
				<p className='lead-text'>
					{reservationDate} at {reservation.time}
				</p>
			</div>
			<div className='item'>
				<UsersIcon className='icon' />
				<p className='lead-text'>{reservation.guests} People</p>
			</div>
			<div className='item'>
				<TableIcon className='icon' />
				<p className='lead-text'>{reservation.seating}</p>
			</div>
			{user?.occasion && (
				<div className='item'>
					<SparklesIcon className='icon' />
					<p className='lead-text'>{user.occasion}</p>
				</div>
			)}
		</div>
	)
}
export default ReservationDetails
