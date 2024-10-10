import { Link, ScrollRestoration, useRouteError } from 'react-router-dom'
import Header from '../layout/Header'
import Footer from '../layout/Footer'
import { useEffect } from 'react'

const ErrorPage = () => {
	const error = useRouteError()
	useEffect(() => {
		console.error('Routing error: ', error)
	}, [error])

	return (
		<>
			<ScrollRestoration />
			<Header />
			<div className='bg-light w-full min-h-screen flex flex-col items-center justify-center'>
				<div className='container mx-auto flex flex-col items-center justify-center gap-4'>
					<h1 className='display-title'>Coming Soon</h1>
					<p className='lead-text'>
						Sorry, this page does not yet exist.
					</p>
					<Link to='/' className='button'>
						Go Back Home
					</Link>
				</div>
			</div>
			<Footer />
		</>
	)
}

export default ErrorPage
