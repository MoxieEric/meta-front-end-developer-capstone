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
				{...props}
			>
				{options.map((option) => (
					<option value={option.value} key={option.value}>
						{option.label}
					</option>
				))}
			</select>
		</InputGroup>
	)
}
export default Dropdown
