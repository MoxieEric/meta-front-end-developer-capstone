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
} from '@heroicons/react/20/solid'
import { PhoneIcon } from '@heroicons/react/24/outline'
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
						<button className='button button--primary gap-2 items-center justify-center'>
							Share Reservation
							<DocumentDuplicateIcon className='icon w-5 h-5' />
						</button>
					}
				>
					<div className='flex flex-col gap-4'>
						<ReservationDetails reservation={reservation} />
						<button className='button button--ghost w-full gap-2 items-center justify-center'>
							<PencilIcon className='icon w-5 h-5' />
							Edit Reservation
						</button>
						<button className='button button--ghost w-full gap-2 items-center justify-center'>
							<TrashIcon className='icon w-5 h-5' />
							Cancel Reservation
						</button>
					</div>
					<div className='flex flex-col gap-4'>
						<div className='reservation-details'>
							<figure className='rounded-lg overflow-hidden shadow-md mb-2 relative'>
								<img
									src='/map-01.png'
									alt='Map of Little Lemon location'
									className='w-full h-auto object-cover min-w-16 aspect-video'
								/>
								<div className='absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center'>
									<MapPinIcon className='w-10 h-10 text-dark shadow-md' />
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
						<h3 className='category-title pt-2'>
							Accepted Payments
						</h3>
						<div className='flex items-center gap-2'>
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
					<ol className='list-decimal list-outside pl-4 max-w-prose space-y-2 py-2'>
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
					<p>
						If you hae additional questions please see our{' '}
						<Link to='/faqs' className='!text-primary underline'>
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
