import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { AppFrame } from './components/AppFrame';
import { WelcomePage } from './pages/WelcomePage';
import { PokedexPage } from './pages/PokedexPage';
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
        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
