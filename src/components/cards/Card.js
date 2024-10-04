import classNames from 'classnames'
import { Link, useNavigate } from 'react-router-dom'

const Card = ({ link, background = 'white', children }) => {
	const navigate = useNavigate()
	const handleClick = (e) => {
		e.preventDefault()
		if (link) navigate(link)
	}
	return (
		<article
			className={classNames(
				'card',
				`bg-${background}`,
				link && 'card--link'
			)}
			onClick={handleClick}
		>
			{children}
		</article>
	)
}

export default Card
