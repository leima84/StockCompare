import React, { Component } from 'react';
import Stock from './Stock';
import AddStock from './AddStock';
//import IndividualStock from './IndividualStock'
import ShowStock from './ShowStock'
import './App.css';

class App extends Component {
  state = {
    //stocks: ['WDC', 'MMM', 'CY', 'AUY']
    stocks: []
  }

  addStock = (stock) => {
    if(this.state.stocks.includes(stock)===true){
      alert("This stock has already been added!");
    }else{
      this.setState({stocks: [...this.state.stocks, stock]});
      console.log(this.state.stocks);
    }
  }

  removeStock = (stock) => {
    var curStocks = this.state.stocks;
    var index = curStocks.indexOf(stock);
    if(index!==-1){
      curStocks.splice(index, 1);
      this.setState({stocks: curStocks});
    }
    console.log(this.state.stocks);
  }

  render(){
    return (
      <div className="App">
          <h1>Stock Market</h1>
        <AddStock addStock={this.addStock} />
        <ShowStock stocks={this.state.stocks} removeStock={this.removeStock}/>
        <Stock stocks={this.state.stocks} />
      </div>
    );
  }
}

export default App;
