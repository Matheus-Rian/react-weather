import { Fragment } from 'react';
import LineHorizontal from '../LineHorizontal';
import { Container } from './styles';

export default function WeatherMoreInformations({
  windSpeed, sunrise, sunset, humidity,
}) {
  const info = [{
    name: 'wind speed',
    value: `${windSpeed} m/s`,
  }, {
    name: 'sunrise',
    value: sunrise,
  },
  {
    name: 'sunset',
    value: sunset,
  },
  {
    name: 'humidity',
    value: `${humidity}%`,
  }];

  return (
    <Container>
      {info.map((information, i) => (
        <Fragment key={information.name}>
          <div>
            <p>{information.name}</p>
            <span>{information?.value}</span>
          </div>
          {(info.length - 1) !== i && <LineHorizontal />}
        </Fragment>
      ))}
    </Container>
  );
}
