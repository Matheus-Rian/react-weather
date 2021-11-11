import { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';
import defaultTheme from '../assets/styles/themes/default';

const Providers = ({ children }) => (
  <ThemeProvider theme={defaultTheme}>{children}</ThemeProvider>
);

export default Providers;

Providers.propTypes = {
  children: PropTypes.node.isRequired,
};
