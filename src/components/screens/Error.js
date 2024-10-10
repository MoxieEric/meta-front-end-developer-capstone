import { Link, ScrollRestoration, useRouteError } from 'react-router-dom'
import Header from '../layout/Header'
import Footer from '../layout/Footer'
import { useEffect } from 'react'
import PageSection from '../layout/PageSection'
import FeatureSection from '../sections/FeatureSection'

const ErrorPage = () => {
	const error = useRouteError()
	useEffect(() => {
		console.error('Routing error: ', error)
	}, [error])

	return (
		<>
			<ScrollRestoration />
			<Header />
			<main>
				<PageSection background='primary' id='error-page'>
					<FeatureSection
						title='Coming Soon'
						subtitle='Sorry, this page does not exist yet'
					>
						<Link to='/' className='button button--secondary'>
							Go Back Home
						</Link>
					</FeatureSection>
				</PageSection>
			</main>

			<Footer />
		</>
	)
}

export default ErrorPage
