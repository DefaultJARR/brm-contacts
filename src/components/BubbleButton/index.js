import React from "react";
import "./styles.scss";

const BubbleButton = (props) => {
	let { icon, func, funcArgs, styles } = props;

	return (
		<div className="bubble-btn" style={styles} onClick={() => func(...funcArgs)}>
			<i className={icon}></i>
		</div>
	);
};

export default BubbleButton;
