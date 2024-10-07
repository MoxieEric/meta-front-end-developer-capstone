import { XMarkIcon } from '@heroicons/react/24/solid'
import { useEffect, useRef } from 'react'
import BookingForm from '../form/BookingForm'

const Modal = () => {
	const modalRef = useRef()
	const closeModal = () => modalRef.current.close()

	useEffect(() => {
		const handleClick = (e) => {
			if (e.target.nodeName === 'DIALOG') closeModal()
		}
		const dialog = document.getElementById('booking-modal')
		dialog.addEventListener('click', handleClick)

		return () => {
			dialog.removeEventListener('click', handleClick)
		}
	}, [])

	return (
		<>
			<dialog className='modal' id='booking-modal' ref={modalRef}>
				<div className='modal-container'>
					<div className='modal-header'>
						<h1 className='section-title'>Make a Reservation</h1>
					</div>
					<div className='p-4'>
						<BookingForm />
					</div>
					<button
						className='close-button button button--link absolute top-0 right-2'
						onClick={closeModal}
					>
						<XMarkIcon className='w-6 h-6' />
					</button>
				</div>
			</dialog>
		</>
	)
}
export default Modal
