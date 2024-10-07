import { DateTime } from 'luxon'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import Input from './Input'

const BookingForm = () => {
	const minDate = DateTime.now().setZone('America/Denver').toISODate()
	const formik = useFormik({
		initialValues: {
			firstName: '',
			email: '',
			date: minDate,
			// time: '',
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
				/>
				<Input
					name='guests'
					label='Guests'
					type='number'
					required
					errorMessage={
						formik.getFieldMeta('date').error &&
						formik.getFieldMeta('date').touched &&
						formik.errors.date
					}
					onBlur={formik.handleBlur}
					onChange={formik.handleChange}
					value={formik.values.guests}
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
				<Input
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
