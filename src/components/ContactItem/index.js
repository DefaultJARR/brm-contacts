import React from "react";
import "./styles.scss";

const ContactItem = (props) => {
	let { contact, fun } = props;

	return (
		<li className="contact" onClick={() => fun(contact)} key={contact.key}>
			<img
				src="https://png.pngtree.com/png-clipart/20190516/original/pngtree-users-vector-icon-png-image_3725294.jpg"
				alt="contact"
			/>
			<div className="contact-info">
				<p className="contact-name">
					{contact.name + " " + contact.lastname}
				</p>
				<p className="contact-phone">{contact.phone}</p>
				<p className="contact-age">
					<b>Age:</b> {contact.age}
				</p>
			</div>
		</li>
	);
};

export default ContactItem;
