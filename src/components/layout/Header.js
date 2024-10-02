import { Link, NavLink } from 'react-router-dom'
import navigationConfig from '../../config/navigationConfig'
import ReservationsButton from '../ReservationsButton'
import classNames from 'classnames'
import { useState } from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const Header = () => {
	const [menuOpen, setMenuOpen] = useState(false)
	return (
		<header className='container'>
			<Link to='/'>
				<img
					src='/little-lemon-logo.svg'
					alt='Little Lemon Logo'
					width='148'
					height='40'
					className='w-36 h-auto md:w-40'
				/>
			</Link>
			<div className='flex items-center gap-4 md:hidden'>
				<div>
					<ReservationsButton title='Reservations' />
				</div>
				<button
					onClick={() => setMenuOpen(!menuOpen)}
					className='inline-block text-gray-900 hover:text-teal-100 p-2 hover:bg-black  rounded-md transition'
				>
					{menuOpen ? (
						<XMarkIcon className='w-6 h-6' />
					) : (
						<Bars3Icon className='w-6 h-6' />
					)}
				</button>
			</div>
			<nav
				className={classNames(
					'w-full transition-all duration-500 overflow-hidden absolute -top-12 right-0 md:relative md:top-0 bg-white',
					menuOpen
						? 'h-screen top-16 opacity-100'
						: 'h-0 md:h-auto opacity-0 md:opacity-100'
				)}
			>
				<ul className='flex flex-col md:flex-row gap-4 md:gap-3 items-center justify-end '>
					{navigationConfig.main.map((link) => (
						<li key={link.label} className='text-lg font-semibold'>
							<NavLink
								to={link.url}
								className={({ isActive }) =>
									classNames(
										'text-dark hover:text-primary hover:underline',
										isActive && 'underline text-primary'
									)
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
