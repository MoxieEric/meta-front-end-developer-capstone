import { useFormik } from 'formik'
import * as Yup from 'yup'
import Input from './Input'
import Textarea from './Textarea'
import Checkbox from './Checkbox'
import Dropdown from './Dropdown'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useBookingContext } from '../../context/bookingContext'
import sleep from '../../utils/api/sleep'
import { submitAPI } from '../../utils/api/bookingApi'

const BookingForm = () => {
	const navigate = useNavigate()
	const { onClose, bookReservation } = useBookingContext()

	const handleSubmit = async ({
		firstName,
		lastName,
		occasion,
		email,
		comment,
	}) => {
		if (submitAPI({ firstName, lastName, occasion, email, comment })) {
			bookReservation({
				firstName,
				lastName,
				email,
				occasion,
				comment,
			})
			await sleep(300)
			onClose()
			navigate('/confirmed')
		}
	}

	const formik = useFormik({
		initialValues: {
			firstName: '',
			lastName: '',
			email: '',
			comment: '',
			occasion: 'none',
			terms: false,
		},
		onSubmit: (values) => handleSubmit(values),
		validationSchema: Yup.object().shape({
			firstName: Yup.string().required('Required'),
			lastName: Yup.string().required('Required'),
			email: Yup.string()
				.required('Required')
				.email('Invalid email address'),
			comment: Yup.string().optional(),
			terms: Yup.boolean().oneOf([true], 'Required').required(),
			occasion: Yup.string().optional(),
		}),
	})

	useEffect(() => {
		return () => formik.resetForm()
		// eslint-disable-next-line
	}, [])

	return (
		<form method='POST' onSubmit={formik.handleSubmit}>
			<div className='flex flex-col gap-4'>
				<div className='flex items-start gap-4'>
					<Input
						name='firstName'
						label='First Name'
						required
						autoFocus
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
						name='lastName'
						label='Last Name'
						required
						errorMessage={
							formik.getFieldMeta('lastName').error &&
							formik.getFieldMeta('lastName').touched &&
							formik.errors.lastName
						}
						onBlur={formik.handleBlur}
						onChange={formik.handleChange}
						value={formik.values.lastName}
					/>
				</div>
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
				<Dropdown
					name='occasion'
					label='Occasion'
					errorMessage={
						formik.getFieldMeta('occasion').error &&
						formik.getFieldMeta('occasion').touched &&
						formik.errors.occasion
					}
					onBlur={formik.handleBlur}
					onChange={formik.handleChange}
					value={formik.values.occasion}
					options={[
						{ value: 'none', label: 'Special Occasion?' },
						{ value: 'birthday', label: 'Birthday' },
						{ value: 'anniversary', label: 'Anniversary' },
						{ value: 'graduation', label: 'Graduation' },
					]}
				/>
				<Textarea
					name='comment'
					label='Special requests'
					errorMessage={
						formik.getFieldMeta('comment').error &&
						formik.getFieldMeta('comment').touched &&
						formik.errors.comment
					}
					onBlur={formik.handleBlur}
					onChange={formik.handleChange}
					value={formik.values.comment}
				/>
				<Checkbox
					name='terms'
					label='I agree to the terms and conditions'
					required
					errorMessage={
						formik.getFieldMeta('terms').error &&
						formik.getFieldMeta('terms').touched &&
						formik.errors.terms
					}
					onBlur={formik.handleBlur}
					onChange={formik.handleChange}
					value={formik.values.terms}
				/>

				<button
					type='submit'
					className='button w-full justify-center flex'
				>
					Confirm Reservation
				</button>
			</div>
		</form>
	)
}

export default BookingForm
