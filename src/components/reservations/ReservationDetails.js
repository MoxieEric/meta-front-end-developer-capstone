import {
	CalendarIcon,
	SparklesIcon,
	UsersIcon,
} from '@heroicons/react/24/outline'
import TableIcon from '../icons/TableIcon'
import { useEffect, useState } from 'react'
import { DateTime } from 'luxon'

const ReservationDetails = ({ reservation }) => {
	const [reservationDate, setReservationDate] = useState('')
	useEffect(() => {
		const label = DateTime.fromJSDate(new Date(reservation?.date))
			.setZone('utc')
			.toFormat('cccc LLL. d,')
		setReservationDate(label)
	}, [reservation])
	return (
		<div className='reservation-details'>
			<div className='detail-item'>
				<CalendarIcon className='icon' />
				<p className='lead-text'>
					{reservationDate} at {reservation?.time}
				</p>
			</div>
			<div className='detail-item'>
				<UsersIcon className='icon' />
				<p className='lead-text'>{reservation?.guests} People</p>
			</div>
			<div className='detail-item'>
				<TableIcon className='icon' />
				<p className='lead-text'>{reservation?.seating}</p>
			</div>
			{reservation?.occasion && (
				<div className='detail-item'>
					<SparklesIcon className='icon' />
					<p className='lead-text capitalize'>
						{reservation.occasion}
					</p>
				</div>
			)}
		</div>
	)
}
export default ReservationDetails
