import axios from 'axios';

const ROOT_URL = `https://api.coinmarketcap.com/v1/ticker/`;

export const fetch_Data = 'fetch_Data';

export function fetchData(currency) {
  const url = `${ROOT_URL}${currency}/`;

  const request = axios.get(url);

  return {
    type: fetch_Data,
    payload: request
  };
}
