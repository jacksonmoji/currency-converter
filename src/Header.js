import React from 'react';
import logo from './images/currency_exchange_logo.png'


const header = () => {

	return(
		<header className="tc pv3 pv3-ns">
		<img src={logo} className="w4" alt="avatar"/>
		<h1>Currency Converter</h1>
		</header>
	);
}

export default header;