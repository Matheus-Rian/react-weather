import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../../assets/styles/global';
import defaultTheme from '../../assets/styles/themes/default';
import { Container } from './styles';
import Home from '../../pages/Home';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <Container>
        <Home />
      </Container>
    </ThemeProvider>
  );
}

export default App;
