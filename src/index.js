import React from 'react'
import ReactDOM from 'react-dom/client'
import reportWebVitals from './reportWebVitals'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './styles/app.css'
import './styles/tailwind.min.css'
import ErrorPage from './components/screens/Error'
import App from './App'
import Home from './components/screens/Home'
import BookingConfirmation from './components/screens/BookingConfirmation'
import Reservations from './components/screens/Reservations'

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: '/',
				element: <Home />,
			},
			{
				path: '/reservations',
				element: <Reservations />,
			},
			{
				path: '/confirmed',
				element: <BookingConfirmation />,
			},
		],
	},
])

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
