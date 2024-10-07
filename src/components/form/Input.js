import InputGroup from './InputGroup'

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
		<InputGroup
			label={label}
			name={name}
			errorMessage={errorMessage}
			required={required}
		>
			<input
				type={type}
				id={name}
				name={name}
				onBlur={onBlur}
				onChange={onChange}
				value={value}
				{...props}
			/>
		</InputGroup>
	)
}
export default Input
