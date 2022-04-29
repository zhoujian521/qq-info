import React from 'react';
import logo from '../assets/images/logo.svg';
import './style.scss';

import { QQSearch, QQHeader } from '../components';

function App() {
	return (
		<div className="app-container">
			<div className="qq-info">
				<QQSearch> </QQSearch>
				<QQHeader> </QQHeader>
			</div>
		</div>
	);
}

export default App;

{
	/* <header className="App-header">
<img src={logo} className="App-logo" alt="logo" />
<p>
	Edit <code>src/App.tsx</code> and save to reload.
</p>
<a
	className="App-link"
	href="https://reactjs.org"
	target="_blank"
	rel="noopener noreferrer">
	Learn React
</a>
</header> */
}
