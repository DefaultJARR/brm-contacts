import React from 'react';
import "./styles.scss";

// DATA
import contacts from '../../assets/data.json'

// Components
import ContactItem from '../../components/ContactItem'

// images
import searchImg from "../../assets/img/zoom.svg";
import logo from "../../assets/img/chat.svg";

const ContactsList = (props) => {

	let {changePage} = props;

    return (
        <div>
			<div className="header">
				<img className="logo" src={logo} alt="logo" />
				<h3 className="title">Contacts</h3>
			</div>
			<div className="search">
				<label htmlFor="search">
					<img src={searchImg} alt="search" />
				</label>
				<input type="text" name="search" />
			</div>
			<ul className="contacts-list">
				{contacts.list.map((contact, i) => {
					return <ContactItem contact={contact} key={i} />
				})}
			</ul>
			<div className="main-btn" onClick={() => changePage('user')}>+</div>
		</div>
    );
}

export default ContactsList;
