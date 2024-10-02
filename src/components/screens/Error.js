import { useRouteError } from 'react-router-dom'
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
			<Header />
			<div id='error-page'>
				<h1>Oops!</h1>
				<p>Sorry, an unexpected error has occurred.</p>
				<p>
					<i>{error.statusText || error.message}</i>
				</p>
			</div>
			<Footer />
		</>
	)
}

export default ErrorPage
