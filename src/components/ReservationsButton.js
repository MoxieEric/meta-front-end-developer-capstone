import classNames from 'classnames'
import { Link } from 'react-router-dom'

const ReservationsButton = ({
	title = 'Make a Reservation',
	theme = 'primary',
}) => {
	return (
		<Link
			to='/reservations'
			className={classNames('button', `button--${theme}`)}
		>
			{title}
		</Link>
	)
}

export default ReservationsButton
