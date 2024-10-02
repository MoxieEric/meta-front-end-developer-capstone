const ReservationsButton = ({ title = 'Make a Reservation' }) => {
	const handleClick = () => {
		const modal = document.getElementById('booking-modal')
		modal.showModal()
	}
	return (
		<button
			type='button'
			onClick={handleClick}
			className='rounded-md bg-primary text-white px-4 py-2 font-semibold hover:text-white hover:bg-black transition-colors'
		>
			{title}
		</button>
	)
}

export default ReservationsButton
