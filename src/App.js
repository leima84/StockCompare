import React, { Component } from 'react';
import Stock from './Stock';
import AddStock from './AddStock';
import './App.css';

class App extends Component {
  state = {
    //stocks: ['WDC', 'MMM', 'CY', 'AUY']
    stocks: []
  }

  addStock = (stock) => {
    this.setState({stocks: [...this.state.stocks, stock]});
    console.log(this.state.stocks);
  }

  render(){
    return (
      <div className="App">
          <h1>Stock Market</h1>
        <AddStock addStock={this.addStock}/>
        <Stock stocks={this.state.stocks} />
      </div>
    );
  }
}

export default App;
