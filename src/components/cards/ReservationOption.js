import { ClockIcon, PlusIcon } from '@heroicons/react/24/outline'

const ReservationOption = ({ time, seating }) => {
	return (
		<button className='reservation-option button button--light group w-full justify-between py-4'>
			<div className='flex items-center gap-2'>
				<ClockIcon className='text-primary w-5 h-5' />
				<div className='font-bold'>{time}</div>
				<div>{seating}</div>
			</div>
			<div className='opacity-0 group-hover:opacity-100 transition-opacity duration-300 self-end'>
				<PlusIcon className='text-primary w-6 h-6' />
			</div>
		</button>
	)
}

export default ReservationOption
