import { Container } from './styles';

export default function WeatherDay({
  dawn, morning, afternoon, night,
}) {
  const momentsDay = [{
    moment: 'Dawn',
    value: dawn,
  }, {
    moment: 'Morning',
    value: morning,
  }, {
    moment: 'Afternoon',
    value: afternoon,
  }, {
    moment: 'Night',
    value: night,
  }];

  return (
    <Container>
      {momentsDay.map((momentDay) => (
        <div key={momentDay.moment}>
          <p>{momentDay.moment}</p>
          <img
            src={momentDay.value?.condition.icon}
            alt={momentDay.value?.condition.text}
            width={40}
            height={40}
          />
          <p>{`${momentDay.value?.temp_c}ºC`}</p>
        </div>
      ))}
    </Container>
  );
}
