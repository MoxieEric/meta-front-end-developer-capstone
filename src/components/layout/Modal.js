import { useEffect } from 'react'

const Modal = () => {
	const closeModal = () => {
		const modal = document.getElementById('booking-modal')
		modal.close()
	}

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
			<dialog className='modal' id='booking-modal'>
				<div className='modal-container'>
					<h1>Make a Reservation</h1>
					<p>...</p>
					<button className='close-button' onClick={closeModal}>
						Close modal
					</button>
				</div>
			</dialog>
		</>
	)
}
export default Modal
