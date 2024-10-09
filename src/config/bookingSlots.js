const bookingTimeOptions = [
	{ value: '4:30pm', label: '4:30pm' },
	{ value: '5:00pm', label: '5:00pm' },
	{ value: '5:30pm', label: '5:30pm' },
	{ value: '6:00pm', label: '6:00pm' },
	{ value: '6:30pm', label: '6:30pm' },
	{ value: '7:00pm', label: '7:00pm' },
	{ value: '7:30pm', label: '7:30pm' },
	{ value: '8:00pm', label: '8:00pm' },
	{ value: '8:30pm', label: '8:30pm' },
	{ value: '9:00pm', label: '9:00pm' },
]

const initialBookingSlots = [
	{
		available: true,
		time: '4:30pm',
		seating: 'On the Patio',
		date: '10/08/2024',
	},
	{
		available: false,
		time: '5:00pm',
		seating: 'At the Bar',
		date: '10/08/2024',
	},
	{
		available: true,
		time: '5:30pm',
		seating: 'In the Dining Room',
		date: '10/08/2024',
	},
	{
		available: true,
		time: '6:00pm',
		seating: 'On the Patio',
		date: '10/08/2024',
	},
	{
		available: true,
		time: '6:30pm',
		seating: 'On the Patio',
		date: '10/08/2024',
	},
	{
		available: true,
		time: '7:00pm',
		seating: 'On the Patio',
		date: '10/08/2024',
	},
	{
		available: true,
		time: '7:30pm',
		seating: 'On the Patio',
		date: '10/08/2024',
	},
	{
		available: true,
		time: '8:00pm',
		seating: 'On the Patio',
		date: '10/08/2024',
	},
	{
		available: true,
		time: '8:30pm',
		seating: 'On the Patio',
		date: '10/08/2024',
	},
	{
		available: true,
		time: '9:00pm',
		seating: 'On the Patio',
		date: '10/08/2024',
	},
]

export { bookingTimeOptions, initialBookingSlots }
