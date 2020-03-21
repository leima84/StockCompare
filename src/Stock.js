import React from 'react';
import Plot from 'react-plotly.js';

class Stock extends React.Component {
  constructor(props) {
    super(props);
    //this.state = {
    //  stockChartXValues: [],
    //  stockChartYValues: []
    //}
    this.state = {
      stocks: [],
      stockChartXValues: [],
      stockChartYValues: [],
      stockPlotData: []
    }
  }

  fetchStock(stock) {
    const pointerToThis = this;
    console.log(pointerToThis);
    const API_KEY = 'HGJWFG4N8AQ66ICD';
    let StockSymbol = stock;
    let API_Call = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${StockSymbol}&outputsize=compact&apikey=${API_KEY}`;
    let stockChartXValuesFunction = [];
    let stockChartYValuesFunction = [];
    let stockChartYValuesNormalizedFunction = [];
    pointerToThis.setState({stocks: [...pointerToThis.state.stocks, stock]});

    fetch(API_Call)
      .then(
        function(response) {
          return response.json();
        }
      )
      .then(
        function(data) {
          console.log(data);

          for (var key in data['Time Series (Daily)']) {
            stockChartXValuesFunction.push(key);
            stockChartYValuesFunction.push(data['Time Series (Daily)'][key]['1. open']);
          }
          
          stockChartYValuesNormalizedFunction = stockChartYValuesFunction.map(
            stock_price =>
            {
              return stock_price/stockChartYValuesFunction[stockChartYValuesFunction.length-1];
            }
          )

          console.log(stockChartYValuesFunction);
          pointerToThis.setState({
            stockChartXValues: [...pointerToThis.state.stockChartXValues, stockChartXValuesFunction],
            stockChartYValues: [...pointerToThis.state.stockChartYValues, stockChartYValuesFunction]
          });

          let single_stock_data={
            x: stockChartXValuesFunction,
            y: stockChartYValuesNormalizedFunction,
            type: 'scatter',
            mode: 'lines+markers',
            name: stock,
            marker: {color: '#'+Math.floor(Math.random()*16777215).toString(16)},
          };

          pointerToThis.setState({
            stockPlotData: [...pointerToThis.state.stockPlotData, single_stock_data]
          });
        }
      )
  }

  fetchStocks(){
    this.props.stocks.forEach(stock => 
      {
        if(this.state.stocks.includes(stock)===false){
          console.log(stock);
          this.fetchStock(stock);
        }
      }
    );
    console.log(this.state.stockChartYValues);
  }

  componentDidMount() {
   //this.fetchStocks();
  }

  componentDidUpdate() {
    this.fetchStocks();
  }

  shouldComponentUpdate(nextProps, nextState){
    return true;
  }

  render() {
    //{
    //  plot_data = [];
    //  this.state.stocks.map(
    //    (stock, index) => 
    //    {
    //      single_stock_data={
    //        x: this.state.stockChartXValues[index],
    //        y: this.state.stockChartYValues[index],
    //        type: 'scatter',
    //        mode: 'lines+markers',
    //        marker: {color: 'red'},
    //      };
    //      plot_data.push(single_stock_data);
    //    }
    //  )
    //}
    return (
      <div>
      
        {
          <Plot
            data={this.state.stockPlotData}
            layout={{width: 720, height: 440, title: 'Normalized Stock Prices'}}
          />
        }
      </div>
    )
  }
}

export default Stock;