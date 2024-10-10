import { useBookingContext } from '../../context/bookingContext'
import ReservationOption from '../reservations/BookingSlot'
import ReservationsSearch from '../reservations/ReservationsSearch'
import PageSection from '../layout/PageSection'
import FeatureSection from '../sections/FeatureSection'

const Reservations = () => {
	const { bookingSlots } = useBookingContext()
	return (
		<>
			<PageSection id='reservations-intro' background='primary'>
				<FeatureSection
					title='Make a Reservation'
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
						Book now to skip the wait!
					</p>
				</FeatureSection>
			</PageSection>
			<PageSection id='reservations' background='white'>
				<div className='w-full max-w-xl mx-auto'>
					<ReservationsSearch />

					<div className='reservation-options max-w-xl flex flex-col gap-2 mx-auto py-4'>
						<h2 className='section-title'>Available Tables</h2>
						{bookingSlots.map((option) => (
							<ReservationOption
								key={`${option.time}${option.seating}`}
								time={option.time}
								date={option.date}
								seating={option.seating}
								guests={option.guests}
								available={option.available}
							/>
						))}
					</div>
				</div>
			</PageSection>
		</>
	)
}
export default Reservations
