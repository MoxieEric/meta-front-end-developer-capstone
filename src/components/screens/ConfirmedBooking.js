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
import {
	TrashIcon,
	MapPinIcon,
	PencilIcon,
	DocumentDuplicateIcon,
	PhoneIcon,
} from '@heroicons/react/20/solid'
import paymentMethods from '../../config/paymentMethods'
import Pill from '../atoms/Pill'

const ConfirmedBooking = () => {
	const [reservation, setReservation] = useState(null)
	useEffect(() => {
		const storedReservation = localStorage.getItem('reservation')
		setReservation(JSON.parse(storedReservation))
	}, [])

	return (
		<>
			<PageSection id='reservation-confirmed' background='primary'>
				<FeatureSection
					title='Reservation Confirmed'
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
						See you soon, {reservation?.firstName}!
					</p>
				</FeatureSection>
			</PageSection>
			<PageSection id='reservation-details' background='white'>
				<CardsSection
					title='Reservation Details'
					cta={
						<button className='button button--primary'>
							Share Reservation
							<DocumentDuplicateIcon className='icon' />
						</button>
					}
				>
					<div className='details-group'>
						<ReservationDetails reservation={reservation} />
						<button className='button button--ghost '>
							<PencilIcon className='icon' />
							Edit Reservation
						</button>
						<button className='button button--ghost '>
							<TrashIcon className='icon' />
							Cancel Reservation
						</button>
					</div>

					<div className='details-group'>
						<div className='reservation-details'>
							<figure>
								<img
									src='/map-01.png'
									alt='Map of Little Lemon location'
								/>
								<div className='map-pin'>
									<MapPinIcon />
								</div>
							</figure>
							<div className='detail-item'>
								<MapPinIcon className='icon' />
								<p className='lead-text'>
									123 Pearl Street, Boulder, CO
								</p>
							</div>
							<div className='detail-item'>
								<PhoneIcon className='icon' />
								<p className='lead-text'>
									<a href='tel:+11233210000'>
										+1 123-321-0000
									</a>
								</p>
							</div>
						</div>
						<h3 className='category-title'>Accepted Payments</h3>
						<div className='pill-group'>
							{paymentMethods.map((item) => (
								<Pill key={item}>{item}</Pill>
							))}
						</div>
					</div>
				</CardsSection>
			</PageSection>

			<PageSection id='specials' background='light'>
				<CardsSection
					title='Explore the Menu'
					subtitle='See what we have to offer before you arrive.'
					cta={
						<Link to='/menu' className='button'>
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
			<PageSection id='info' background='white'>
				<FeatureSection
					title='Imortant Information'
					subtitle='A few things to know before you arrive'
					color='dark'
				>
					<ol>
						<li>
							Please arrive on time, if you are more than 15
							minutes late we may offer your table to another
							party.
						</li>
						<li>
							If you are driving there is parking along the street
							or a free public lot two blocks south.
						</li>
						<li>
							We love dogs, but please leave yours at home. Only
							service animals are allowed on the premises,
							including the patio.
						</li>
					</ol>
					<p className='lead-text'>
						If you hae additional questions please see our{' '}
						<Link to='/faqs' className=''>
							FAQs page
						</Link>
						.
					</p>
				</FeatureSection>
			</PageSection>
		</>
	)
}
export default ConfirmedBooking
