import { Ancora, Container } from './styles';
import rain from '../../assets/images/rain.svg';
import arrow from '../../assets/images/arrow.svg';
import WeatherDay from '../../components/WeatherDay';
import WeatherMoreInformations from '../../components/WeatherMoreInformations';

export default function WeatherCity() {
  return (
    <>
      <Ancora className="link-back" to="/">
        <img src={arrow} alt="Voltar" />
        <span>Voltar</span>
      </Ancora>
      <Container>
        <div className="main-information">
          <h1>London</h1>
          <h2>rainy</h2>
          <div className="temp">
            <p>17</p>
            <div className="arrows">
              <img src={arrow} alt="arrow-top" />
              <img src={arrow} alt="arrow-bottom" />
            </div>
            <div>
              <span>ºC</span>
              <p>{`${0}º`}</p>
              <p>-8º</p>
            </div>
          </div>
          <img src={rain} alt="rain" width={100} height={100} />
        </div>

        <WeatherDay />
        <WeatherMoreInformations />
      </Container>
    </>
  );
}
