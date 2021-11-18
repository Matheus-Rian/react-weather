import { Back, Container } from './styles';
import arrow from '../../assets/images/arrow.svg';
import WeatherDay from '../../components/WeatherDay';
import WeatherMoreInformations from '../../components/WeatherMoreInformations';
import useFetch from '../../hooks/useFetch';
import Modal from '../../components/Modal';

export default function WeatherCity({ history }) {
  const city = history.location.pathname.split('/');
  const [loading, response, error] = useFetch(`&q=${city[city.length - 1]}&aqi=no`);

  function handleBack() {
    history.goBack();
  }

  if (error) {
    return <Modal title="Error 🔴" onBack={handleBack} />;
  }

  if (loading) { return <h1>Carregando...</h1>; }

  return (
    <Container
      tempC={response?.data.current.temp_c}
      text={response?.data.forecast.forecastday[0].day.condition.text}
    >
      <Back onClick={handleBack} className="link-back">
        <button type="button">
          <img src={arrow} alt="Voltar" width={30} height={30} />
        </button>
      </Back>
      <div className="main-information">
        <h1>{response?.data.location.name}</h1>
        <h2>{response?.data.current.condition.text}</h2>
        <div className="container-temp">
          <p>{response?.data.current.temp_c}</p>
          <div className="arrows">
            <img src={arrow} alt="arrow-top" />
            <img src={arrow} alt="arrow-bottom" />
          </div>
          <div>
            <span>ºC</span>
            <p>{`${response?.data.forecast.forecastday[0].day.maxtemp_c}º`}</p>
            <p>{`${response?.data.forecast.forecastday[0].day.mintemp_c}º`}</p>
          </div>
        </div>
        <img
          src={response?.data.current.condition.icon}
          alt={response?.data.current.condition.text}
          width={150}
          height={130}
        />
      </div>

      <WeatherDay
        dawn={response?.data.forecast.forecastday[0].hour[3]}
        morning={response?.data.forecast.forecastday[0].hour[9]}
        afternoon={response?.data.forecast.forecastday[0].hour[15]}
        night={response?.data.forecast.forecastday[0].hour[21]}
      />

      <WeatherMoreInformations
        windSpeed={response?.data.current.wind_mph}
        sunrise={response?.data.forecast.forecastday[0].astro.sunrise}
        sunset={response?.data.forecast.forecastday[0].astro.sunset}
        humidity={response?.data.current.humidity}
      />
    </Container>
  );
}
