import classNames from 'classnames'
import InputGroup from './InputGroup'

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
	icon,
	...props
}) => {
	return (
		<InputGroup
			label={label}
			name={name}
			errorMessage={errorMessage}
			required={required}
		>
			<select
				id={name}
				name={name}
				onBlur={onBlur}
				onChange={onChange}
				value={value}
				className={classNames(icon && 'with-icon')}
				{...props}
			>
				{options.map((option) => (
					<option value={option.value} key={option.value}>
						{option.label}
					</option>
				))}
			</select>
			{icon && <div className='absolute bottom-3 left-4'>{icon}</div>}
		</InputGroup>
	)
}
export default Dropdown
