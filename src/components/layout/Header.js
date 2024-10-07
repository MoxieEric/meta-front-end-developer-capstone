import { Link, NavLink } from 'react-router-dom'
import navigationConfig from '../../config/navigationConfig'
import ReservationsButton from '../ReservationsButton'
import classNames from 'classnames'
import { useState } from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const Header = () => {
	const [menuOpen, setMenuOpen] = useState(false)
	return (
		<header className='global-header container'>
			<Link to='/'>
				<img
					src='/little-lemon-logo.svg'
					alt='Little Lemon Logo'
					width='148'
					height='40'
					className='logo'
				/>
			</Link>
			<div className='mobile-links'>
				<div>
					<ReservationsButton title='Reservations' />
				</div>
				<button
					onClick={() => setMenuOpen(!menuOpen)}
					className='nav-toggle'
				>
					{menuOpen ? (
						<XMarkIcon className='icon' />
					) : (
						<Bars3Icon className='icon' />
					)}
				</button>
			</div>
			<nav
				className={classNames(
					'nav',
					menuOpen ? 'nav--open' : 'nav--closed'
				)}
			>
				<ul className='nav-links'>
					{navigationConfig.main.map((link) => (
						<li key={link.label} className='lead-text'>
							<NavLink
								to={link.url}
								className={({ isActive }) =>
									classNames(isActive && 'is-active')
								}
							>
								{link.label}
							</NavLink>
						</li>
					))}
					<li>
						<ReservationsButton />
					</li>
				</ul>
			</nav>
		</header>
	)
}

export default Header
