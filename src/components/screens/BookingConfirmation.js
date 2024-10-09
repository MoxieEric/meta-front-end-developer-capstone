import { useEffect, useState } from 'react'
import PageSection from '../layout/PageSection'
import ReservationDetails from '../reservations/ReservationDetails'
import FeatureSection from '../sections/FeatureSection'
import CardsSection from '../sections/CardsSection'
import { Link } from 'react-router-dom'
import Card from '../cards/Card'
import CardImage from '../cards/CardImage'
import CardHeader from '../cards/CardHeader'
import CardBody from '../cards/CardBody'
import specialsContent from '../../config/specialsContent'

const BookingConfirmation = () => {
	const [reservation, setReservation] = useState(null)
	useEffect(() => {
		const storedReservation = localStorage.getItem('reservation')
		setReservation(JSON.parse(storedReservation))
	}, [])

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
						See you soon, {reservation?.firstName}
					</p>
				</FeatureSection>
			</PageSection>
			<PageSection id='reservation-details' background='light'>
				<CardsSection
					title='Reservation Details'
					cta={<button>Share</button>}
				>
					<ReservationDetails
						reservation={reservation}
						title={'Reservation Details'}
					/>
					<ReservationDetails
						reservation={reservation}
						title={'Reservation Details'}
					/>
				</CardsSection>
			</PageSection>

			<section>
				<header>
					<h1>Good to Know</h1>
				</header>
			</section>
			<PageSection id='specials' background='white'>
				<CardsSection
					title='Explore the Menu'
					subtitle=''
					cta={
						<Link to='/menu' className='button button--link'>
							View Full Menu
						</Link>
					}
				>
					{specialsContent.map((item) => (
						<Card link={item.link} key={item.id}>
							<CardImage src={item.image} alt={item.title} />
							<CardHeader>
								<h1>{item.title}</h1>
							</CardHeader>
							<CardBody>
								<p>{item.description}</p>
							</CardBody>
						</Card>
					))}
				</CardsSection>
			</PageSection>
		</>
	)
}
export default BookingConfirmation
