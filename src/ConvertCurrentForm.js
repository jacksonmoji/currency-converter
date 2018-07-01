import React, { Component } from 'react';
import { Card,FormGroup, Input, CardTitle, Row, Col } from 'reactstrap';
import  Image_Exchange from './images/exchange.svg';

class ConvertCurrentForm extends Component {

	constructor(){
		super();
		this.state = {
			currency_label_from: null,
			currency_label_to: '',
		}
	}

	onLabelChange1 = (event) => {
			this.setState({ currency_label_from: event.target.value});
			console.log(event.target.value.id)
	}

	onLabelChange2 = (event) => {
			this.setState({ currency_label_to: event.target.value});
	}

    labelName = () => {

    	Object.values(this.props.currencies).filter( currency => {
			return currency.currencyId.includes('AFN');
		
	})
	}

 	render(){

 		//declaring values from App.js
		let currencies = this.props.currencies;
		let selectedCurrency = this.props.selectedCurrency;
		let onInputChange = this.props.onInputChange;
		
		const objects = Object.values(currencies).map(value => {
			return <option key={value.id} value={value.currencyName}> {`${value.currencyId}  -- ${value.currencySymbol} ${value.currencyName}`}</option>
		});

 		return (

		     <Row>
		       <div className="tc w-100 w-50-m w-25-l mw6 center ">
		        <Card body inverse color="primary" className="shadow-2">
		         {/* <CardTitle>{this.state.currency_label_from !== '' ? this.state.currency_label_from : this.onLabelChange1.currencyId }</CardTitle>*/}
		          <FormGroup row>
		           <Col sm={4} xs={4}>
			          <Input type="select" onChange={this.onLabelChange1}  id="currencySelectFrom" name="customSelect" bsSize="lg">
	           	      {objects}
	                  </Input>
		          </Col>
		          
		          <Col sm={8} xs={8}>
		            <Input type="number" onChange={onInputChange} name="currency" id="currencyFrom" placeholder="0.00" bsSize="lg" />
		          </Col>
		          </FormGroup>
		        </Card>
		      
		        <Card body inverse color="success" className="shadow-2">
		         {/* <CardTitle>Special Title Treatment</CardTitle>*/}
		          <FormGroup row>
		           <Col sm={4} xs={4}>
			          <Input type="select" onChange={this.onLabelChange2}  id="currencySelectFrom" name="customSelect" bsSize="lg">
	           	      {objects}
	                  </Input>
		          </Col>
		          
		          <Col sm={8} xs={8}>
		            <Input type="number" onChange={onInputChange} name="currency" id="currencyTo" placeholder="0.00" bsSize="lg" />
		          </Col>
		          </FormGroup>

		        </Card>
		    </div>
		    </Row>
 	
 		);
 	}
}

export default ConvertCurrentForm;
