import { ScrollRestoration } from 'react-router-dom'
import { useBookingContext } from '../../context/bookingContext'
import ReservationOption from '../reservations/BookingSlot'
import ReservationsSearch from '../reservations/ReservationsSearch'
import PageSection from '../layout/PageSection'
import FeatureSection from '../sections/FeatureSection'

const Reservations = () => {
	const { bookingSlots } = useBookingContext()
	return (
		<>
			<ScrollRestoration />
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
				<div className='container'>
					<ReservationsSearch />

					<div className='reservation-options'>
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
