import { Container } from './styles';
import { citys } from '../../utils/citys';
import world from '../../assets/images/world.svg';
import ButtonCity from '../../components/ButtonCity';

export default function Home({ history }) {
  function handleCity(city) {
    history.push(`/weather/${city}`);
  }

  return (
    <Container>
      <h1>weather</h1>
      <h2>select a city</h2>
      <img src={world} alt="World" height={200} width={100} />
      <div>
        {citys.map((city) => (
          <ButtonCity key={city} city={city} onCity={handleCity}>
            {' '}
            {city}
          </ButtonCity>
        ))}
      </div>
    </Container>
  );
}
