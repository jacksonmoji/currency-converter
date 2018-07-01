import React from 'react';

const CurrencyLabel = ({ selectedCurrency }) => {

	render(){
		return(
				 <CardTitle>{selectedCurrency}</CardTitle>
			);
	}
}

export default CurrencyLabel;