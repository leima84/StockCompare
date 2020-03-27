import React from 'react';
import IndividualStock from './IndividualStock'

class ShowStock extends React.Component {  
  //constructor(props) {
  //  super(props);
  //  this.removeStock = this.removeStock.bind( this );
  //}

  removeStock = (stock) => {
    //alert(stock);
    this.props.removeStock(stock);
  }

  render() {
    return this.props.stocks.map((stock) => 
      (
        <IndividualStock stock={stock} removeStock={this.removeStock}/>
      )
    );
  }
}

export default ShowStock;