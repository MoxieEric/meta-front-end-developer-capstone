import classNames from 'classnames'

const Input = ({
	label,
	required = false,
	name,
	type = 'text',
	value = '',
	onBlur,
	onChange,
	errorMessage,
	...props
}) => {
	return (
		<div className='input-group'>
			<label htmlFor={name}>
				{label}
				{required && <span className='text-red-600'>*</span>}
			</label>
			<input
				type={type}
				id={name}
				name={name}
				onBlur={onBlur}
				onChange={onChange}
				value={value}
				className={classNames(errorMessage && 'invalid')}
				{...props}
			/>
			{errorMessage && <p className='text-red-600'>{errorMessage}</p>}
		</div>
	)
}
export default Input
