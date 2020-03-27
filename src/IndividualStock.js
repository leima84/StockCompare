import React from 'react';

class IndividualStock extends React.Component {
  removeStock = () => {
    //alert(this.props.stock);
    //console.log('this is:', this);
    this.props.removeStock(this.props.stock);
  }

  render(){
    return (
      <button onClick={this.removeStock}>{this.props.stock}</button>
    );
  }
}

export default IndividualStock;