import classNames from 'classnames'

const ReservationsButton = ({
	title = 'Make a Reservation',
	theme = 'primary',
}) => {
	const handleClick = () => {
		const modal = document.getElementById('booking-modal')
		modal.showModal()
	}
	return (
		<button
			type='button'
			onClick={handleClick}
			className={classNames(
				'rounded-md bg-primary  px-4 py-2 font-semibold transition-colors hover:text-white hover:bg-black',
				theme === 'primary'
					? 'bg-primary text-white'
					: 'bg-secondary text-black'
			)}
		>
			{title}
		</button>
	)
}

export default ReservationsButton
