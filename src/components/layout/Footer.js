import { NavLink } from 'react-router-dom'
import navigationConfig from '../../config/navigationConfig'
import { EnvelopeIcon, MapPinIcon, PhoneIcon } from '@heroicons/react/20/solid'

const Footer = () => {
	return (
		<footer className='global-footer'>
			<div className='container'>
				<div className='column'>
					<img
						src='/logo-vertical.png'
						alt='Little Lemon Icon'
						width='200'
						height='352'
						className='logo'
					/>
				</div>

				<nav className='column'>
					<ul>
						{navigationConfig.footer.map((link) => (
							<li key={link.label}>
								<NavLink
									to={link.url}
									className='button button--link'
								>
									{link.label}
								</NavLink>
							</li>
						))}
					</ul>
				</nav>

				<div className='column'>
					<h2 className='highlight-text'>Get in Touch</h2>
					<a href='tel:+13031234321' className='button button--link'>
						<PhoneIcon className='icon' />
						<span>(303) 123-4321</span>
					</a>
					<a
						href='https://www.google.com/maps/place/1023+Pearl+St,+Boulder,+CO+80302'
						target='_blank'
						rel='noreferrer'
						className='button button--link'
					>
						<MapPinIcon className='icon' />
						<span>1023 Pearl St. Boulder, CO</span>
					</a>
					<a
						href='mailto:hello@littlelemon.com'
						className='button button--link'
					>
						<EnvelopeIcon className='icon' />
						<span>hello@littlelemon.com</span>
					</a>
				</div>

				<div className='column'>
					<h2 className='highlight-text'>Follow Us</h2>
					<ul>
						{navigationConfig.socials.map((link) => (
							<li key={link.label}>
								<a
									href={link.url}
									target='_blank'
									rel='noreferrer'
									className='button button--link w-full justify-center'
								>
									{link.label}
								</a>
							</li>
						))}
					</ul>
				</div>
			</div>
			<div className='copyright'>
				<p>&copy; Little Lemon 2024</p>
			</div>
		</footer>
	)
}

export default Footer
