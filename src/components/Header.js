import navigationConfig from '../config/navigationConfig'

const Header = () => {
	return (
		<header className='App-header'>
			<img src='/little-lemon-logo.svg' alt='Little Lemon Logo' />
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
		</header>
	)
}

export default Header
