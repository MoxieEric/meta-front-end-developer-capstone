const CardsSection = ({ title, subtitle, cta, children }) => {
	return (
		<div className='cards-section'>
			<header>
				<div className='headings'>
					<h1 className='section-title'>{title}</h1>
					{subtitle && <h2 className='category-title'>{subtitle}</h2>}
				</div>
				{cta && <div className='cta'>{cta}</div>}
			</header>
			<div className='content'>{children}</div>
		</div>
	)
}
export default CardsSection
