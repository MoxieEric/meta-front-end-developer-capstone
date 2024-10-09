import { XMarkIcon } from '@heroicons/react/24/solid'
import { CalendarIcon, UsersIcon } from '@heroicons/react/24/outline'
import { useEffect, useRef, useState } from 'react'
import BookingForm from '../form/BookingForm'
import { useBookingContext } from '../../context/bookingContext'
import { DateTime } from 'luxon'
import TableIcon from '../icons/TableIcon'

const Modal = () => {
	const modalRef = useRef()
	const [reservationDate, setReservationDate] = useState('')
	const { isOpen, onClose, reservation } = useBookingContext()
	const closeModal = () => modalRef.current.close()

	useEffect(() => {
		const handleClick = (e) => {
			if (e.target.nodeName === 'DIALOG') onClose()
		}
		const dialog = modalRef.current
		dialog.addEventListener('click', handleClick)

		return () => {
			dialog.removeEventListener('click', handleClick)
		}
	}, [onClose])

	useEffect(() => {
		if (isOpen) {
			modalRef.current.showModal()
		} else closeModal()
	}, [isOpen])

	useEffect(() => {
		const label = DateTime.fromJSDate(new Date(reservation.date)).toFormat(
			'cccc LLL. d,'
		)
		setReservationDate(label)
	}, [reservation])

	return (
		<>
			<dialog className='modal' id='booking-modal' ref={modalRef}>
				<div className='modal-container'>
					<div className='modal-header'>
						<h1 className='section-title'>Reservation Details</h1>
					</div>
					<div className='flex flex-col gap-4'>
						<div className='p-4 flex flex-col gap-2 border-b-2 border-b-light w-full max-w-sm mx-auto'>
							<div className='flex items-center gap-4'>
								<CalendarIcon className='icon text-primary w-6 h-6' />
								<p className='lead-text'>
									{reservationDate} at {reservation.time}
								</p>
							</div>
							<div className='flex items-center gap-4'>
								<UsersIcon className='icon text-primary w-6 h-6' />
								<p className='lead-text'>
									{reservation.guests} People
								</p>
							</div>
							<div className='flex items-center gap-4'>
								<TableIcon className='icon text-primary w-6 h-6' />
								<p className='lead-text'>
									{reservation.seating}
								</p>
							</div>
						</div>
						<BookingForm />
					</div>
					<button
						className='close-button button button--link absolute top-2 right-2 hover:bg-dark hover:text-light aspect-square p-2 rounded-md'
						onClick={onClose}
					>
						<XMarkIcon className='w-6 h-6' />
					</button>
				</div>
			</dialog>
		</>
	)
}
export default Modal
