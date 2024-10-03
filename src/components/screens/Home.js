import PageSection from '../layout/PageSection'
import ReservationsButton from '../ReservationsButton'

const Home = () => {
	return (
		<>
			<PageSection id='hero' background='primary'>
				<div className='flex flex-col md:flex-row items-center justify-center py-8 gap-4'>
					<div className='max-w-prose flex flex-col gap-2'>
						<header className='text-white'>
							<h1 className='display-title leading-10'>
								Little Lemon
							</h1>
							<h2 className='subtitle leading-10'>Boulder</h2>
						</header>
						<p className='lead-text text-white pr-4 md:pr-8'>
							Known for our tapas and the town's best outdoor
							dining, we've been offering exceptional food at a
							great value for over 10 years.
						</p>
						<div className='pt-4'>
							<ReservationsButton theme='secondary' />
						</div>
					</div>
					<div className='relative'>
						<figure>
							<img
								src='/little-lemon-restaurant-01.jpg'
								width='694'
								height='463'
								alt='The Little Lemon patio'
								className='w-full max-w-sm h-auto'
							/>
						</figure>
						<figure>
							<img
								src='/little-lemon-restauran-food-01@0.5x.jpg'
								width='239'
								height='360'
								alt='Bruschetta'
								className='w-full max-w-40 h-auto'
							/>
						</figure>
					</div>
				</div>
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
				<header>
					<h1>About</h1>
				</header>
			</PageSection>
		</>
	)
}
export default Home
