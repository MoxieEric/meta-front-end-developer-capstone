import navigationConfig from '../../config/navigationConfig'

const Footer = () => {
	return (
		<footer className='App-Footer'>
			<div>
				<img src='/little-lemon-logo.svg' alt='Little Lemon Logo' />
				<p>&copy; Little Lemon </p>
			</div>
			<nav>
				<ul>
					{navigationConfig.main.map((link) => (
						<li key={link.label}>
							<a href={link.url} onClick={link?.onClick}>
								{link.label}
							</a>
						</li>
					))}
				</ul>
			</nav>
			<div>
				<h2>Get in Touch</h2>
				<p>+1 000-000-0000</p>
				<p>123 Some St. Boulder, CO</p>
			</div>
			<div>
				<h2>Follow Us</h2>
				<ul>
					{navigationConfig.socials.map((link) => (
						<li key={link.label}>
							<a href={link.url} target='_blank' rel='noreferrer'>
								{link.label}
							</a>
						</li>
					))}
				</ul>
			</div>
		</footer>
	)
}

export default Footer
