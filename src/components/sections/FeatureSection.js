const FeatureSection = ({ title, subtitle, images = [], children }) => {
	return (
		<div className='feature-section'>
			<div className='max-w-prose flex flex-col gap-2'>
				<header className='text-white'>
					<h1 className='display-title'>{title}</h1>
					<h2 className='subtitle'>{subtitle}</h2>
				</header>
				<div className='content'>{children}</div>
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
