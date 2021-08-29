import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { StatusColorContextProvider } from './hooks/useStatusColor';
import Home from './pages/Home';
import CityClimate from './pages/CityClimate/CityClimate';

const App = () => {
  return (
    <BrowserRouter>
      <StatusColorContextProvider>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/climate/:city" component={CityClimate} />
        </Switch>
      </StatusColorContextProvider>
    </BrowserRouter>
  )
}

export default App;