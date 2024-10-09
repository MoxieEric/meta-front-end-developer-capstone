import React from 'react'

const TableIcon = ({ className }) => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			viewBox='0 0 32 32'
			fill='none'
			className={className}
		>
			<g clipPath='url(#a)'>
				<path
					fill='currentColor'
					d='M5.167 12.444H26.81l-1.378-4.888H6.6l-1.433 4.888zm17.677 2.223H9.19l-.433 3.11h14.488l-.4-3.11zm-17.51 12l1.633-12H4c-.444 0-.794-.178-1.05-.534a1.33 1.33 0 01-.217-1.166l1.9-6.667a1.4 1.4 0 01.467-.7 1.24 1.24 0 01.8-.267h20.2c.311 0 .578.09.8.267.222.178.378.411.467.7l1.9 6.667c.11.422.039.81-.217 1.166a1.224 1.224 0 01-1.05.534h-2.933l1.6 12h-2.223l-.9-6.667H8.456l-.9 6.667H5.333z'
				></path>
			</g>
			<defs>
				<clipPath id='a'>
					<path fill='#fff' d='M0 0h32v32H0z'></path>
				</clipPath>
			</defs>
		</svg>
	)
}

export default TableIcon
