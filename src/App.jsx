import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { AppFrame } from './components/AppFrame';
import { WelcomePage } from './pages/WelcomePage';
import { PokedexPage } from './pages/PokedexPage';
import { PokemonPage } from './pages/PokemonPage';
import { TypesChart } from './pages/TypesChart';
import { NotFoundPage } from './pages/NotFoundPage';
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <AppFrame>
            <WelcomePage />
          </AppFrame>
        </Route>
        <Route exact path="/pokedex">
          <AppFrame>
            <PokedexPage />
          </AppFrame>
        </Route>
        <Route path="/pokemon">
          <AppFrame>
            <PokemonPage />
          </AppFrame>
        </Route>
        <Route path="/tipos">
          <AppFrame>
            <TypesChart />
          </AppFrame>
        </Route>
        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
