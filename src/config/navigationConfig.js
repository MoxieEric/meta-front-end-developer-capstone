const navigationConfig = {
	main: [
		{
			label: 'About',
			url: '/about',
		},
		{
			label: 'Menu',
			url: '/menu',
		},
		{
			label: 'Order Online',
			url: '/order',
		},
		{
			label: 'Reservations',
			url: null,
			onClick: () => {
				const modal = document.getElementById('booking-modal')
				modal.showModal()
			},
		},
		{
			label: 'Login',
			url: null,
			onClick: () => null,
		},
	],
	socials: [
		{
			label: 'Facebook',
			url: null,
		},
		{
			label: 'Instagram',
			url: null,
		},
		{
			label: 'TikTok',
			url: null,
		},
	],
}
export default navigationConfig
