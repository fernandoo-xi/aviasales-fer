import axios from 'axios';

export default class AviasalesServise {
  constructor() {
    this.baseURL = 'https://aviasales-test-api.kata.academy/';
  }

  getSearchID = async () => {
    const { data } = await axios.get(`${this.baseURL}search`);
    return data.searchId;
  };

  getTickets = async (searchID) => {
    const { data } = await axios.get(`${this.baseURL}tickets?searchId=${searchID}`);
    return data;
  };
}
