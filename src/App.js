import React, {useState} from "react";
import "./styles.scss";

// Components
import ContactsList from './pages/ContactsList'
import Contact from './pages/Contact'

function App(props) {
	let [page, setPage] = useState('list');
	let [contact, setContact] = useState(null);

	let changePage = (newPage) => setPage(newPage);

	return (
		<div className="App">
			{ page == 'list'
				? <ContactsList changePage={changePage} setContact={setContact} />
				: <Contact changePage={changePage} contact={contact} />
			}
		</div>
	);
}

export default App;
