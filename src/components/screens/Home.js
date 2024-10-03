import { Link } from 'react-router-dom'
import PageSection from '../layout/PageSection'
import ReservationsButton from '../ReservationsButton'
import FeatureSection from '../sections/FeatureSection'
import CardsSection from '../sections/CardsSection'

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
			<PageSection id='specials' background='white'>
				<CardsSection
					title='Specials'
					subtitle=''
					cta={
						<Link to='/menu' className='button'>
							View Full Menu
						</Link>
					}
				>
					<div className='rounded bg-primary h-48 w-36' />
					<div className='rounded bg-primary h-48 w-36' />
					<div className='rounded bg-primary h-48 w-36' />
				</CardsSection>
			</PageSection>
			<PageSection id='testimonials' background='light'>
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
