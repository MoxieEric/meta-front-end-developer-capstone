import ReservationOption from '../cards/ReservationOption'
import ReservationsSearch from '../form/ReservationsSearch'
import PageSection from '../layout/PageSection'
import FeatureSection from '../sections/FeatureSection'

const resOptions = [
	{ time: '4:30pm', seating: 'On the Patio', date: '10/08/2024' },
	{ time: '5:00pm', seating: 'At the Bar', date: '10/08/2024' },
	{ time: '5:30pm', seating: 'In the Dining Room', date: '10/08/2024' },
	{ time: '6:00pm', seating: 'On the Patio', date: '10/08/2024' },
	{ time: '6:30pm', seating: 'On the Patio', date: '10/08/2024' },
	{ time: '7:00pm', seating: 'On the Patio', date: '10/08/2024' },
	{ time: '7:30pm', seating: 'On the Patio', date: '10/08/2024' },
	{ time: '8:00pm', seating: 'On the Patio', date: '10/08/2024' },
	{ time: '8:30pm', seating: 'On the Patio', date: '10/08/2024' },
	{ time: '9:00pm', seating: 'On the Patio', date: '10/08/2024' },
]

const Reservations = () => {
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
						{resOptions.map((option) => (
							<ReservationOption
								key={`${option.time}${option.seating}`}
								time={option.time}
								date={option.date}
								seating={option.seating}
								guests={2}
							/>
						))}
					</div>
				</div>
			</PageSection>
		</>
	)
}
export default Reservations
