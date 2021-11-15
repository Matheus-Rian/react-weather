import { render } from '@testing-library/react';
import Home from '.';
import Providers from '../../utils/testsProvider';

describe('Home page', () => {
  it('Should contain texts in page', () => {
    const { getByText } = render(<Home />, { wrapper: Providers });
    const title = getByText('weather');
    const subTitle = getByText('select a city');
    expect(title).toBeInTheDocument();
    expect(subTitle).toBeInTheDocument();
  });

  it('Should contain image', () => {
    const { getByRole } = render(<Home />, { wrapper: Providers });
    const image = getByRole('img');

    expect(image).toBeInTheDocument();
  });
});
