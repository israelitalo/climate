import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import CityClimate from './pages/CityClimate/CityClimate';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/climate/:city" component={CityClimate} />
      </Switch>
    </BrowserRouter>
  )
}

export default App;