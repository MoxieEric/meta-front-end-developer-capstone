import { DateTime } from 'luxon'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import Input from './Input'
import Dropdown from './Dropdown'
import Textarea from './Textarea'

const BookingForm = () => {
	const minDate = DateTime.now().setZone('America/Denver').toISODate()
	const formik = useFormik({
		initialValues: {
			firstName: '',
			email: '',
			date: minDate,
			time: '7:00pm',
			comment: '',
			guests: 2,
		},
		onSubmit: (values) => console.log(values),
		validationSchema: Yup.object().shape({
			firstName: Yup.string().required('Required'),
			email: Yup.string()
				.required('Required')
				.email('Invalid email address'),
			guests: Yup.number().min(1).max(10),
			date: Yup.date()
				.min('10/07/2024')
				.required('You must enter a date'),
			comment: Yup.string().optional(),
		}),
	})
	return (
		<form method='POST' onSubmit={formik.handleSubmit}>
			<div className='flex flex-col gap-4'>
				<Input
					name='date'
					label='Date'
					type='date'
					required
					errorMessage={
						formik.getFieldMeta('date').error &&
						formik.getFieldMeta('date').touched &&
						formik.errors.date
					}
					onBlur={formik.handleBlur}
					onChange={formik.handleChange}
					value={formik.values.date}
					min={minDate}
				/>
				<Dropdown
					name='guests'
					label='Guests'
					required
					errorMessage={
						formik.getFieldMeta('date').error &&
						formik.getFieldMeta('date').touched &&
						formik.errors.date
					}
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
						{ value: 20, label: 20 },
					]}
				/>
				<Dropdown
					name='time'
					label='Time'
					required
					errorMessage={
						formik.getFieldMeta('time').error &&
						formik.getFieldMeta('time').touched &&
						formik.errors.time
					}
					onBlur={formik.handleBlur}
					onChange={formik.handleChange}
					value={formik.values.time}
					options={[
						{ value: '6:45pm', label: '6:45pm' },
						{ value: '7:00pm', label: '7pm' },
					]}
				/>
				<Input
					name='firstName'
					label='First Name'
					required
					errorMessage={
						formik.getFieldMeta('firstName').error &&
						formik.getFieldMeta('firstName').touched &&
						formik.errors.firstName
					}
					onBlur={formik.handleBlur}
					onChange={formik.handleChange}
					value={formik.values.firstName}
				/>
				<Input
					name='email'
					label='Email Address'
					type='email'
					required={true}
					errorMessage={
						formik.getFieldMeta('email').error &&
						formik.getFieldMeta('email').touched &&
						formik.errors.email
					}
					onBlur={formik.handleBlur}
					onChange={formik.handleChange}
					value={formik.values.email}
				/>
				<Textarea
					name='comment'
					label='Special requests'
					type='comment'
					errorMessage={
						formik.getFieldMeta('comment').error &&
						formik.getFieldMeta('comment').touched &&
						formik.errors.comment
					}
					onBlur={formik.handleBlur}
					onChange={formik.handleChange}
					value={formik.values.comment}
				/>
				<button type='submit' className='button'>
					Submit
				</button>
			</div>
		</form>
	)
}

export default BookingForm
