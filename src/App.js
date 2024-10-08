import Footer from './components/layout/Footer'
import Header from './components/layout/Header'
import Main from './components/layout/Main'
import Modal from './components/layout/Modal'
import { BookingProvider } from './context/bookingContext'

function App() {
	return (
		<>
			<BookingProvider>
				<Header />
				<Main />
				<Footer />
				<Modal />
			</BookingProvider>
		</>
	)
}

export default App
