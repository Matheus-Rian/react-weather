import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import WeatherCity from './pages/WeatherCity';

export default function RoutesApp() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/weather/:city" component={WeatherCity} />
    </Switch>
  );
}
