import classNames from 'classnames'

const InputGroup = ({ label, name, required, errorMessage, children }) => {
	return (
		<div className={classNames('input-group', errorMessage && 'invalid')}>
			<label htmlFor={name}>
				{label}
				{required && <span>*</span>}
			</label>
			{children}
			{errorMessage && <p>{errorMessage}</p>}
		</div>
	)
}

export default InputGroup
