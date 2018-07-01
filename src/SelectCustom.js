 import React, { Component } from 'react';
 import { Input } from 'reactstrap';

 class SelectCustom extends Component {

 	render(){

		let currencies = this.props.currencies;
		let selectedCurrency = this.props.selectedCurrency;
		const objects = Object.values(currencies).map(value => {
			return <option key={value.id} value={value.currencyId}> {value.currencyId}</option>
		});

 		return (	
 			 <Input type="select" onchange={selectedCurrency}  id="currencySelectFrom" name="customSelect" bsSize="lg">
           	 {objects}
             </Input>
 		);
 	}
}

export default SelectCustom;