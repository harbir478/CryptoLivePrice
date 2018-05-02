import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchBar from './search_bar';

class Currency_List extends Component {
  renderCurrency(currencyData) {
    const name = currencyData.name;
    const sign = currencyData.symbol;
    const priceUSD = currencyData.price_usd;
    const priceBTC = currencyData.price_btc;
    const change = currencyData.percent_change_24h;

    return (
      <tr>
        <td>{name}</td>
        <td>{sign}</td>
        <td>{priceUSD}</td>
        <td>{priceBTC}</td>
        <td>{change}%</td>
      </tr>
    );
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Name</th>
            <th>Symbol</th>
            <th>Price (U$D)</th>
            <th>Price (BTC)</th>
            <th>Change 24h (%)</th>
            <th />
          </tr>
        </thead>
        <tbody>{this.props.currency.map(this.renderCurrency)}</tbody>
      </table>
    );
  }
}

function mapStateToProps({ currency }) {
  return { currency };
}

export default connect(mapStateToProps)(Currency_List);
