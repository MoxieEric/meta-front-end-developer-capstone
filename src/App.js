import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'

function App() {
	return (
		<>
			<Header />
			<main>
				<section>
					<header>
						<h1>Little Lemon</h1>
					</header>
				</section>
				<section>
					<header>
						<h1>Specials</h1>
					</header>
				</section>
				<section>
					<header>
						<h1>Testimonials</h1>
					</header>
				</section>
				<section>
					<header>
						<h1>About</h1>
					</header>
				</section>
			</main>
			<Footer />
		</>
	)
}

export default App
