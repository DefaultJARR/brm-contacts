import React from "react";
import "./styles.scss";

const InputComponent = (props) => {
	let { inputName, inputClases, labelText, type} = props;

	return (
		<div className="input-wrap">
			<input
				className={inputClases}
				type={type || 'text'}
				name={inputName}
				id={inputName}
				required
			/>
			<label htmlFor={inputName}>{labelText}</label>
			<div className="input-border"></div>
		</div>
	);
};

export default InputComponent;
