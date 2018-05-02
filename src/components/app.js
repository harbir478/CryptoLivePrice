import React, { Component } from 'react';
import SearchBar from './search_bar';
import CurrencyList from './Currency_List';

export default class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <CurrencyList />
      </div>
    );
  }
}
