import PropTypes from 'prop-types';
import { Button } from './styles';

export default function ButtonCity({ children }) {
  return (
    <Button type="button">{ children }</Button>
  );
}

ButtonCity.propTypes = {
  children: PropTypes.node.isRequired,
};
