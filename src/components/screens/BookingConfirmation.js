import { useBookingContext } from '../../context/bookingContext'
import PageSection from '../layout/PageSection'
import ReservationDetails from '../reservations/ReservationDetails'
import FeatureSection from '../sections/FeatureSection'

const BookingConfirmation = () => {
	const { user } = useBookingContext()
	return (
		<>
			<PageSection id='reservation' background='primary'>
				<FeatureSection
					title='Reservation Confirmed!'
					images={[
						{
							src: '/little-lemon-restaurant-01.jpg',
							alt: 'The Little Lemon patio',
							width: '360',
							height: '200',
						},
					]}
				>
					<p className='lead-text text-white'>
						See you soon, {user.firstName}
					</p>
				</FeatureSection>
			</PageSection>
			<PageSection id='reservation-details' background='white'>
				<ReservationDetails />
			</PageSection>

			<section>
				<header>
					<h1>Good to Know</h1>
				</header>
			</section>
			<section>
				<header>
					<h1>Menu</h1>
				</header>
			</section>
		</>
	)
}
export default BookingConfirmation
