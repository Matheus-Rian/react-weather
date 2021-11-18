import faker from 'faker';
import HttpClient from './HttpClient';
import HttpClientSpy from './mock/MockHttpClient';

const makeSut = (url = faker.internet.url()) => {
  const sut = new HttpClient(url);
  const httpClientSpy = new HttpClientSpy();

  return {
    sut,
    httpClientSpy,
  };
};

describe('HttpClient', () => {
  it('should call httpClient with correct URL', async () => {
    const url = faker.internet.url();
    const { sut } = makeSut(url);
    expect(sut.baseURL).toBe(url);
  });

  it('Should return an response if HttpPostClient return 200', async () => {
    const url = faker.internet.url();
    const { httpClientSpy } = makeSut(url);
    httpClientSpy.status = 200;
    httpClientSpy.response = { data: '' };

    const response = await httpClientSpy.get('/path');
    expect(response).toEqual(httpClientSpy.response);
  });

  it('Should throw Error if HttpPostClient return different 200', async () => {
    const url = faker.internet.url();
    const { httpClientSpy } = makeSut(url);
    httpClientSpy.status = 400;

    const promise = httpClientSpy.get('/path');
    await expect(promise).rejects.toThrow(new Error());
  });
});
