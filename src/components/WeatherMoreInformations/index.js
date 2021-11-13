import LineHorizontal from '../LineHorizontal';
import { Container } from './styles';
import { informations } from '../../utils/weatherMoreInformations';

export default function WeatherMoreInformations() {
  return (
    <Container>
      {informations.map((information, i) => (
        <>
          <div>
            <p>{information}</p>
            <span>5.1 m/s</span>
          </div>
          {(informations.length - 1) !== i && <LineHorizontal />}
        </>
      ))}
    </Container>
  );
}
