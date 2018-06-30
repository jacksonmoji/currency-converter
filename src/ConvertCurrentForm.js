import React from 'react';
import { Card,FormGroup, Input, CardTitle, Row, Col } from 'reactstrap';

const ConvertCurrentForm = ( { onSelectCurrency, onInputChange } ) => {

return (

     <Row>
       <div className="tc w-100 w-50-m w-25-l mw8 center ">
        <Card body inverse color="primary" className="shadow-2">
          <CardTitle>Special Title Treatment</CardTitle>
          <FormGroup row>
           <Col sm={4} xs={4}>
          <Input type="select" onSelect={onSelectCurrency} id="currencySelectFrom" name="customSelect" bsSize="lg">
            <option value="">BWP</option>
            <option>Value 1</option>
            <option>Value 2</option>
          </Input>
          </Col>
          
          <Col sm={8} xs={8}>
            <Input type="number" onChange={onInputChange} name="currency" id="currencyFrom" placeholder="lg" bsSize="lg" />
          </Col>
          </FormGroup>
        </Card>
      
        <Card body inverse color="success" className="shadow-2">
          <CardTitle>Special Title Treatment</CardTitle>
          <FormGroup row>
           <Col sm={4} xs={4}>
          <Input  type="select" onSelect={onSelectCurrency} id="currencySelectTo" name="customSelect" bsSize="lg"  >
            <option value="">BWP</option>
            <option>Value 1</option>
            <option>Value 2</option>
          </Input>
          </Col>
          
          <Col sm={8} xs={8}>
            <Input type="number" onChange={onInputChange} name="currency" id="currencyTo" placeholder="lg" bsSize="lg" />
          </Col>
          </FormGroup>

        </Card>
    </div>
    </Row>
    );
}

export default ConvertCurrentForm;
