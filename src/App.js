import React, {useState} from "react";
import "./styles.scss";

import ContactsList from './pages/ContactsList'
import Contact from './pages/Contact'

function App(props) {
	let [page, setPage] = useState('list');

	let changePage = (newPage) => setPage(newPage);

	return (
		<div className="App">
			{ page == 'list'
				? <ContactsList changePage={changePage} />
				: <Contact changePage={changePage}/>
			}
		</div>
	);
}

export default App;
