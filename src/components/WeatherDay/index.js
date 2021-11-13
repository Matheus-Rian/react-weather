import rain from '../../assets/images/rain.svg';
import { Container } from './styles';
import { momentsDay } from '../../utils/momentsDay';

export default function WeatherDay() {
  return (
    <Container>
      {momentsDay.map((momentDay) => (
        <div>
          <p>{momentDay}</p>
          <img src={rain} alt="rain" width={40} height={40} />
          <p>-13ºC</p>
        </div>
      ))}
    </Container>
  );
}
