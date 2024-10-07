import InputGroup from './InputGroup'

const Textarea = ({
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
			<textarea
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
export default Textarea
