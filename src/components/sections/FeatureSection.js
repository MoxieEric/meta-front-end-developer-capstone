import classNames from 'classnames'

const FeatureSection = ({
	title,
	subtitle,
	images = [],
	color = 'white',
	children,
}) => {
	return (
		<div className={classNames('feature-section', `text-${color}`)}>
			<div className='content'>
				<header>
					<h1 className='display-title'>{title}</h1>
					<h2 className='subtitle'>{subtitle}</h2>
				</header>
				<div className='body'>{children}</div>
			</div>
			<div className='relative images'>
				{images.map((image, index) => (
					<figure key={image.src}>
						<img
							src={image.src}
							alt={image.alt}
							width={image.width}
							height={image.height}
							className={`image-${index}`}
						/>
					</figure>
				))}
			</div>
		</div>
	)
}

export default FeatureSection
