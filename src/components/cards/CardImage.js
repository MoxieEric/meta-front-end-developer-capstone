const CardImage = ({ src, alt = '', width, height }) => {
	return (
		<figure className='card-image'>
			<img
				src={src}
				alt={alt}
				width={width}
				height={height}
				className='w-full object-cover aspect-video'
			/>
		</figure>
	)
}

export default CardImage
