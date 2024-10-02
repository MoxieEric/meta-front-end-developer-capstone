import PageSection from '../layout/PageSection'

const Home = () => {
	return (
		<>
			<PageSection id='hero' background='primary'>
				<header>
					<h1>Little Lemon</h1>
					<h2>Boulder</h2>
				</header>
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
