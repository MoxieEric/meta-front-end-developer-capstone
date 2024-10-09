import { DateTime } from 'luxon'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import Input from './Input'
import Dropdown from './Dropdown'
import { useState } from 'react'

const initialAvailableTimes = [
	{ value: 'all', label: 'All' },
	{ value: '4:30pm', label: '4:30pm' },
	{ value: '5:00pm', label: '5:00pm' },
	{ value: '5:30pm', label: '5:30pm' },
	{ value: '6:00pm', label: '6:00pm' },
	{ value: '6:30pm', label: '6:30pm' },
	{ value: '7:00pm', label: '7:00pm' },
	{ value: '7:30pm', label: '7:30pm' },
	{ value: '8:00pm', label: '8:00pm' },
	{ value: '8:30pm', label: '8:30pm' },
	{ value: '9:00pm', label: '9:00pm' },
]

const ReservationsSearch = () => {
	const minDate = DateTime.now().setZone('America/Denver').toISODate()
	const [availableTimes, setAvailableTimes] = useState([
		...initialAvailableTimes,
	])
	const formik = useFormik({
		initialValues: {
			date: minDate,
			time: '6:00pm',
			guests: 2,
		},
		onSubmit: (values) => console.log(values),
		validationSchema: Yup.object().shape({
			guests: Yup.number().min(1).max(10),
			date: Yup.date()
				.min('10/07/2024')
				.required('You must enter a date'),
			time: Yup.string(),
		}),
	})

	return (
		<div className='reservations-search'>
			<Input
				name='date'
				label='Date'
				type='date'
				onChange={formik.handleChange}
				value={formik.values.date}
				min={minDate}
			/>
			<div className='flex items-center gap-4 w-full'>
				<Dropdown
					name='time'
					label='Time'
					errorMessage={
						formik.getFieldMeta('time').error &&
						formik.getFieldMeta('time').touched &&
						formik.errors.time
					}
					onBlur={formik.handleBlur}
					onChange={formik.handleChange}
					value={formik.values.time}
					options={availableTimes}
				/>
				<Dropdown
					name='guests'
					label='Guests'
					onBlur={formik.handleBlur}
					onChange={formik.handleChange}
					value={formik.values.guests}
					options={[
						{ value: 1, label: 1 },
						{ value: 2, label: 2 },
						{ value: 3, label: 3 },
						{ value: 4, label: 4 },
						{ value: 5, label: 5 },
						{ value: 6, label: 6 },
						{ value: 7, label: 7 },
						{ value: 8, label: 8 },
						{ value: 9, label: 9 },
						{ value: 10, label: 10 },
					]}
				/>
			</div>
		</div>
	)
}

export default ReservationsSearch
