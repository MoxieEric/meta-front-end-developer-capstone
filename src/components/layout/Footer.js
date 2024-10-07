import { NavLink } from 'react-router-dom'
import navigationConfig from '../../config/navigationConfig'

const Footer = () => {
	return (
		<footer className='global-footer'>
			<div className='container'>
				<div className='column'>
					<img
						src='/little-lemon-logo.svg'
						alt='Little Lemon Logo'
						width='148'
						height='40'
					/>
					<div className='w-full'>
						<p>&copy; Little Lemon 2024</p>
					</div>
				</div>

				<nav className='column'>
					<ul>
						{navigationConfig.footer.map((link) => (
							<li key={link.label}>
								<NavLink to={link.url}>{link.label}</NavLink>
							</li>
						))}
					</ul>
				</nav>

				<div className='column'>
					<h2 className='highlight-text'>Get in Touch</h2>
					<div>+1 303-123-4321</div>
					<p>123 Some St. Boulder, CO</p>
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
									className='transition-color'
								>
									{link.label}
								</a>
							</li>
						))}
					</ul>
				</div>
			</div>
		</footer>
	)
}

export default Footer
