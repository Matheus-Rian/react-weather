import axios from 'axios';

class HttpClient {
  constructor(baseURL) {
    this.baseURL = baseURL;
  }

  async get(path) {
    const httpResponse = await axios.get(`${this.baseURL}${path}`);

    switch (httpResponse.status) {
      case 200: return httpResponse;
      default: throw new Error();
    }
  }
}

export default HttpClient;
