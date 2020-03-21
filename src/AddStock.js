import React from 'react';
import Plot from 'react-plotly.js';
import './App.css';

class AddStock extends React.Component {
  state = {
    stock: ''
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.addStock(this.state.stock);
    //console.log(this.state.stock);
    this.setState({stock: ''});
  }

  onChange = (e) => this.setState({stock: e.target.value});

  render() {
    return (
      <form onSubmit={this.onSubmit} style={{ display: 'flex' }}>
        <input
          type="text"
          name="title"
          className="inputStock"
          style={{ flex: '7', padding: '5px'}}
          placeholder="Add Stock Symbol ..."
          value={this.state.stock}
          onChange={this.onChange}
        />
        <input
          type="submit"
          value="Submit"
          className="btn"
          style={{flex: '1'}}
        />
      </form>
    )
  }
}


export default AddStock;