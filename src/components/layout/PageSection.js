import classNames from 'classnames'

const PageSection = ({ id, background, children }) => {
	const backgroundClass = `bg-${background}`
	return (
		<section
			id={id}
			className={classNames(backgroundClass, 'page-section')}
		>
			<div className='container'>{children}</div>
		</section>
	)
}

export default PageSection
