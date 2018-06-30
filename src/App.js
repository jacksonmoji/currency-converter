import React, { Component } from 'react';
import ConvertCurrentForm from './ConvertCurrentForm'

class App extends Component {

  constructor(){
    super();
    this.state = {
      input: '',
      select: '',
    }
  }

  onSelectChange = (event) => {
    console.log(event.target.value);
  }

  onInputChange = (event) => {
    console.log(event.target.value);
  }

  render() {
    return (
        <ConvertCurrentForm onSelectChange = {this.onSelectChange} onInputChange = {this.onInputChange} />
    );
  }
}

export default App;
