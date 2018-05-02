import { combineReducers } from 'redux';
import CurrencyReducer from './reducer_currency';

const rootReducer = combineReducers({
  currency: CurrencyReducer
});

export default rootReducer;
