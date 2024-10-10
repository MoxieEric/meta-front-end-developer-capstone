import { useEffect, useRef } from 'react'
import BookingForm from '../form/BookingForm'
import ReservationDetails from '../reservations/ReservationDetails'
import { useBookingContext } from '../../context/bookingContext'
import { XMarkIcon } from '@heroicons/react/24/solid'

const Modal = () => {
	const modalRef = useRef()
	const { isOpen, onClose, activeReservationSlot } = useBookingContext()
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
		// eslint-disable-next-line
	}, [])

	useEffect(() => {
		if (isOpen) {
			modalRef.current.showModal()
		} else closeModal()
	}, [isOpen])

	return (
		<>
			<dialog className='modal' id='booking-modal' ref={modalRef}>
				<div className='modal-container'>
					<div className='modal-header'>
						<h1 className='section-title'>Reservation Details</h1>
					</div>

					<div className='modal-body'>
						<ReservationDetails
							reservation={activeReservationSlot}
						/>
						<BookingForm />
					</div>

					<button
						className='close-button button button--link'
						onClick={onClose}
						aria-label='Close Modal'
					>
						<XMarkIcon />
					</button>
				</div>
			</dialog>
		</>
	)
}
export default Modal
