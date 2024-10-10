const CardsSection = ({ title, subtitle, cta, children }) => {
	return (
		<div className='cards-section'>
			<header>
				<div className='headings'>
					<h1 className='section-title text-nowrap'>{title}</h1>
					{subtitle && (
						<h2 className='lead-text subtitle'>{subtitle}</h2>
					)}
				</div>
				{cta && <div className='cta'>{cta}</div>}
			</header>
			<div className='content'>{children}</div>
		</div>
	)
}
export default CardsSection
