import classNames from 'classnames'

const Dropdown = ({
	label,
	required = false,
	name,
	type = 'text',
	value = '',
	onBlur,
	onChange,
	errorMessage,
	options = [],
	...props
}) => {
	return (
		<div className='input-group'>
			<label htmlFor={name}>
				{label}
				{required && <span>*</span>}
			</label>
			<select
				id={name}
				name={name}
				onBlur={onBlur}
				onChange={onChange}
				value={value}
				className={classNames(
					'border-2 rounded-md border-primary px-4 py-2',
					errorMessage && 'invalid'
				)}
				{...props}
			>
				{options.map((option) => (
					<option value={option.value}>{option.label}</option>
				))}
			</select>
			{errorMessage && <p className='text-red-600'>{errorMessage}</p>}
		</div>
	)
}
export default Dropdown
