import HttpClient from './utils/HttpClient/HttpClient';
import { environment as ENV } from '../environments/environment';

class WeatherService {
  constructor() {
    this.httpClient = new HttpClient(`${ENV.BASE_URL}${ENV.API_KEY}`);
  }

  async get(path) {
    return this.httpClient.get(path);
  }
}

export default new WeatherService();
