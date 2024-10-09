import classNames from 'classnames'

const Checkbox = ({
	label,
	required = false,
	name,
	value,
	onBlur,
	onChange,
	errorMessage,
	...props
}) => {
	return (
		<div
			className={classNames(
				'input-group input-group--checkbox',
				errorMessage && 'invalid'
			)}
		>
			<input
				type='checkbox'
				id={name}
				name={name}
				onBlur={onBlur}
				onChange={onChange}
				value={value}
				className='form-checkbox'
				{...props}
			/>
			<label htmlFor={name}>
				{label}
				{required && <span>*</span>}
			</label>
			{errorMessage && <p>{errorMessage}</p>}
		</div>
	)
}
export default Checkbox
