import axios from 'axios';
import UnexpectedError from '../../../errors/UnexpectedError';

class HttpClient {
  constructor(baseURL) {
    this.baseURL = baseURL;
  }

  async get(path) {
    const httpResponse = await axios.get(`${this.baseURL}${path}`);

    switch (httpResponse.status) {
      case 200: return httpResponse;
      default: throw new UnexpectedError();
    }
  }
}

export default HttpClient;
