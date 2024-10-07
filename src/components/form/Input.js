import { DateTime } from 'luxon'
const Input = ({
	label,
	required = false,
	name,
	type = 'text',
	value = '',
	onBlur,
	onChange,
	errorMessage,
}) => {
	const minDate = DateTime.now().setZone('America/Denver').toISODate()

	return (
		<div className='flex flex-col'>
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
				className='border-2 rounded-md border-primary px-4 py-2'
				min={type === 'date' ? minDate : ''}
			/>
			{errorMessage && <p className='text-red-600'>{errorMessage}</p>}
			{minDate}
		</div>
	)
}
export default Input
