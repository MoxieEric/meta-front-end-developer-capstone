import { DateTime } from 'luxon'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useBookingContext } from '../../context/bookingContext'
import { useEffect } from 'react'
import { UsersIcon } from '@heroicons/react/20/solid'
import Input from '../form/Input'
import Dropdown from '../form/Dropdown'

const ReservationsSearch = () => {
	const { getAvailableSlots } = useBookingContext()
	const minDate = DateTime.now().setZone('America/Denver').toISODate()

	const formik = useFormik({
		initialValues: {
			date: minDate,
			guests: 2,
		},
		onSubmit: (values) => console.log(values),
		validationSchema: Yup.object().shape({
			guests: Yup.number().min(1).max(10),
			date: Yup.date().min(minDate).required('You must enter a date'),
		}),
	})

	useEffect(() => {
		getAvailableSlots(formik.values.date, formik.values.guests)
		// eslint-disable-next-line
	}, [formik.values.date, formik.values.guests])

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
			<Dropdown
				name='guests'
				label='Party Size'
				onBlur={formik.handleBlur}
				onChange={formik.handleChange}
				value={formik.values.guests}
				icon={<UsersIcon className='w-5 h-5' />}
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
	)
}

export default ReservationsSearch
