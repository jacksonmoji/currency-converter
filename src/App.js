import React, { Component } from 'react';
import ConvertCurrentForm from './ConvertCurrentForm'

class App extends Component {

  constructor(){
    super();
    this.state = {
      currency: [],
      currencyFrom: 0,
      currencyTo: 0,

    }
  }

  componentDidMount() {
    fetch('https://free.currencyconverterapi.com/api/v5/countries')
    .then(response => response.json())
    .then( data => this.setState({ currency: data.results }));

    console.log(this.state.currency)
  }

  onSelectChange = (event) => {
    console.log(event.target.value);
  }

  exchange(amount, currencyFrom, currencyTo) {

    fetch('https://free.currencyconverterapi.com/api/v5/countries')
    .then(response => response.json())
    .then( data => this.setState({ currency: data.results }));

  }

  onInputChange = (event) => {
    console.log(event.target.value);
  }

  render() {
    return (
        <ConvertCurrentForm currencies={this.state.currency} onSelectChange = {this.onSelectChange} onInputChange = {this.onInputChange                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  } />
    );
  }
}

export default App;