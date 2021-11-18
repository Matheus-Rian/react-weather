class HttpClientSpy {
  constructor() {
    this.url = '';
    this.status = 200;
    this.response = {
      data: '',
    };
  }

  async get(url) {
    this.url = url;

    switch (this.status) {
      case 200: return Promise.resolve(this.response);
      default: throw new Error();
    }
  }
}

export default HttpClientSpy;
