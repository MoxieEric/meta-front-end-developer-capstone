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
			className={classNames('button', `button--${theme}`)}
		>
			{title}
		</button>
	)
}

export default ReservationsButton
