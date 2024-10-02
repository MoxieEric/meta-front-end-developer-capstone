import { Outlet } from 'react-router-dom'
import Home from '../screens/Home'

function Main() {
	return (
		<main>
			{/* <Home /> */}
			<Outlet />
		</main>
	)
}

export default Main
