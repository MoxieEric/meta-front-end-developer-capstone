const CardImage = ({ src, alt = '', width, height }) => {
	return (
		<figure className='card-image'>
			<img src={src} alt={alt} width={width} height={height} />
		</figure>
	)
}

export default CardImage
