import { ThemeProvider } from 'styled-components';
import defaultTheme from '../assets/styles/themes/default';

const Providers = ({ children }) => (
  <ThemeProvider theme={defaultTheme}>{children}</ThemeProvider>
);

export default Providers;
