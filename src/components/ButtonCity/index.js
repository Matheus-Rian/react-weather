import { Button } from './styles';

export default function ButtonCity({ children, onCity, city }) {
  return (
    <Button onClick={() => onCity(city)} type="button">{ children }</Button>
  );
}
