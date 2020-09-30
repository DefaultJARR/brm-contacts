import React from 'react';
import "./styles.scss";

// images
import searchImg from "../../assets/img/zoom.svg";
import logo from "../../assets/img/chat (1).svg";

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
				<li className="contact">
					<img
						src="https://png.pngtree.com/png-clipart/20190516/original/pngtree-users-vector-icon-png-image_3725294.jpg"
						alt="user"
					/>
					<div className="contact-info">
						<p className="contact-name">
							Johan Andres Ramirez Rivera
						</p>
						<p className="contact-phone">313 416 69 64</p>
						<p className="contact-age"><b>Age:</b> 22</p>
					</div>
				</li>
				<li className="contact">
					<img
						src="https://png.pngtree.com/png-clipart/20190516/original/pngtree-users-vector-icon-png-image_3725294.jpg"
						alt="user"
					/>
					<div className="contact-info">
						<p className="contact-name">
							Salomé Corredor Rivera
						</p>
						<p className="contact-phone">313 416 69 64</p>
						<p className="contact-age"><b>Age:</b> 22</p>
					</div>
				</li>
				<li className="contact">
					<img
						src="https://png.pngtree.com/png-clipart/20190516/original/pngtree-users-vector-icon-png-image_3725294.jpg"
						alt="user"
					/>
					<div className="contact-info">
						<p className="contact-name">
							Johan Andres Ramirez Rivera
						</p>
						<p className="contact-phone">313 416 69 64</p>
						<p className="contact-age"><b>Age:</b> 22</p>
					</div>
				</li>
				<li className="contact">
					<img
						src="https://png.pngtree.com/png-clipart/20190516/original/pngtree-users-vector-icon-png-image_3725294.jpg"
						alt="user"
					/>
					<div className="contact-info">
						<p className="contact-name">
							Johan Andres Ramirez Rivera
						</p>
						<p className="contact-phone">313 416 69 64</p>
						<p className="contact-age"><b>Age:</b> 22</p>
					</div>
				</li>
				<li className="contact">
					<img
						src="https://png.pngtree.com/png-clipart/20190516/original/pngtree-users-vector-icon-png-image_3725294.jpg"
						alt="user"
					/>
					<div className="contact-info">
						<p className="contact-name">
							Johan Andres Ramirez Rivera
						</p>
						<p className="contact-phone">313 416 69 64</p>
						<p className="contact-age"><b>Age:</b> 22</p>
					</div>
				</li>
				<li className="contact">
					<img
						src="https://png.pngtree.com/png-clipart/20190516/original/pngtree-users-vector-icon-png-image_3725294.jpg"
						alt="user"
					/>
					<div className="contact-info">
						<p className="contact-name">
							Johan Andres Ramirez Rivera
						</p>
						<p className="contact-phone">313 416 69 64</p>
						<p className="contact-age"><b>Age:</b> 22</p>
					</div>
				</li>
				<li className="contact">
					<img
						src="https://png.pngtree.com/png-clipart/20190516/original/pngtree-users-vector-icon-png-image_3725294.jpg"
						alt="user"
					/>
					<div className="contact-info">
						<p className="contact-name">
							Johan Andres Ramirez Rivera
						</p>
						<p className="contact-phone">313 416 69 64</p>
						<p className="contact-age"><b>Age:</b> 22</p>
					</div>
				</li>
				<li className="contact">
					<img
						src="https://png.pngtree.com/png-clipart/20190516/original/pngtree-users-vector-icon-png-image_3725294.jpg"
						alt="user"
					/>
					<div className="contact-info">
						<p className="contact-name">
							Johan Andres Ramirez Rivera
						</p>
						<p className="contact-phone">313 416 69 64</p>
						<p className="contact-age"><b>Age:</b> 22</p>
					</div>
				</li>
				<li className="contact">
					<img
						src="https://png.pngtree.com/png-clipart/20190516/original/pngtree-users-vector-icon-png-image_3725294.jpg"
						alt="user"
					/>
					<div className="contact-info">
						<p className="contact-name">
							Johan Andres Ramirez Rivera
						</p>
						<p className="contact-phone">313 416 69 64</p>
						<p className="contact-age"><b>Age:</b> 22</p>
					</div>
				</li>
				<li className="contact">
					<img
						src="https://png.pngtree.com/png-clipart/20190516/original/pngtree-users-vector-icon-png-image_3725294.jpg"
						alt="user"
					/>
					<div className="contact-info">
						<p className="contact-name">
							Johan Andres Ramirez Rivera
						</p>
						<p className="contact-phone">313 416 69 64</p>
						<p className="contact-age"><b>Age:</b> 22</p>
					</div>
				</li>
				<li className="contact">
					<img
						src="https://png.pngtree.com/png-clipart/20190516/original/pngtree-users-vector-icon-png-image_3725294.jpg"
						alt="user"
					/>
					<div className="contact-info">
						<p className="contact-name">
							Johan Andres Ramirez Rivera
						</p>
						<p className="contact-phone">313 416 69 64</p>
						<p className="contact-age"><b>Age:</b> 22</p>
					</div>
				</li>
				<li className="contact">
					<img
						src="https://png.pngtree.com/png-clipart/20190516/original/pngtree-users-vector-icon-png-image_3725294.jpg"
						alt="user"
					/>
					<div className="contact-info">
						<p className="contact-name">
							Johan Andres Ramirez Rivera
						</p>
						<p className="contact-phone">313 416 69 64</p>
						<p className="contact-age"><b>Age:</b> 22</p>
					</div>
				</li>
			</ul>
			<div className="main-btn" onClick={() => changePage('user')}>+</div>
		</div>
    );
}

export default ContactsList;
