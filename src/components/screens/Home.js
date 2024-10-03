import { Link } from 'react-router-dom'
import PageSection from '../layout/PageSection'
import ReservationsButton from '../ReservationsButton'
import FeatureSection from '../sections/FeatureSection'

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
				<header>
					<h1>Specials</h1>
				</header>
			</PageSection>
			<PageSection id='testimonials' background='light'>
				<header>
					<h1>Testimonials</h1>
				</header>
			</PageSection>
			<PageSection id='about' background='primary'>
				<FeatureSection
					title='Our Story'
					subtitle='Founded in 2010 by 2 best friends'
					images={[
						{
							src: '/mario-adrian-01.jpg',
							alt: 'The Little Lemon patio',
							width: '694',
							height: '463',
						},
						{
							src: '/little-lemon-restauran-food-01@0.5x.jpg',
							alt: 'The Little Lemon patio',
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
