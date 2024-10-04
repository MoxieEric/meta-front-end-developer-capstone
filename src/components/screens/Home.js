import { Link } from 'react-router-dom'
import PageSection from '../layout/PageSection'
import ReservationsButton from '../ReservationsButton'
import FeatureSection from '../sections/FeatureSection'
import CardsSection from '../sections/CardsSection'
import specialsContent from '../../config/specialsContent'
import Card from '../cards/Card'
import CardImage from '../cards/CardImage'
import CardHeader from '../cards/CardHeader'
import CardBody from '../cards/CardBody'
import CardFooter from '../cards/CardFooter'

const Home = () => {
	return (
		<>
			<PageSection id='hero' background='primary'>
				<FeatureSection
					title='Little Lemon'
					subtitle='Boulder'
					images={[
						{
							src: '/little-lemon-restaurant-01.jpg',
							alt: 'The Little Lemon patio',
							width: '694',
							height: '463',
						},
						{
							src: '/little-lemon-restauran-food-03@0.5x.jpg',
							alt: 'The Little Lemon patio',
							width: '512',
							height: '329',
						},
					]}
				>
					<p className='lead-text text-white'>
						Known for our tapas and the town's best outdoor dining,
						we've been offering exceptional food at a great value
						for over 10 years.
					</p>
					<div className=''>
						<ReservationsButton theme='secondary' />
					</div>
				</FeatureSection>
			</PageSection>
			<PageSection id='specials' background='light'>
				<CardsSection
					title='Specials'
					subtitle=''
					cta={
						<Link to='/menu' className='button button--link'>
							View Full Menu
						</Link>
					}
				>
					{specialsContent.map((item) => (
						<Card link={item.link}>
							<CardImage src={item.image} alt={item.title} />
							<CardHeader>
								<h1>{item.title}</h1>
							</CardHeader>
							<CardBody>
								<p>{item.description}</p>
							</CardBody>
							<CardFooter>
								<Link
									className='button button--secondary bg-light'
									to='/menu'
								>
									Add to Order
								</Link>
							</CardFooter>
						</Card>
					))}
				</CardsSection>
			</PageSection>
			<PageSection id='testimonials' background='white'>
				<CardsSection title='Testimonials' subtitle=''>
					<div className='rounded bg-primary h-48 w-36' />
					<div className='rounded bg-primary h-48 w-36' />
					<div className='rounded bg-primary h-48 w-36' />
					<div className='rounded bg-primary h-48 w-36' />
				</CardsSection>
			</PageSection>
			<PageSection id='about' background='primary'>
				<FeatureSection
					title='Our Story'
					subtitle='Founded in 2010 by 2 best friends'
					images={[
						{
							src: '/mario-adrian-01.jpg',
							alt: 'Adrian and Mario',
							width: '694',
							height: '463',
						},
						{
							src: '/little-lemon-restauran-food-01@0.5x.jpg',
							alt: 'Our signature dish',
							width: '512',
							height: '329',
						},
					]}
				>
					<p className='text-white'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						A sint eius dolores aspernatur corporis! Alias et ipsum
						molestiae accusamus id, optio earum esse laboriosam
						delectus sit cumque, non saepe fuga.
					</p>
					<div>
						<Link to='/about' className='highlight-text'>
							Learn more
						</Link>
					</div>
				</FeatureSection>
			</PageSection>
		</>
	)
}
export default Home
