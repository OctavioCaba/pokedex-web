import { Navbar } from './Navbar';

export const AppFrame = ({ children }) => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <div className="text-center">
        { children }
      </div>
      <footer className="footer mt-auto">
        <p>Página diseñada y desarrollada por <a href="https://github.com/octaviocaba" className="App-link" target="_blank" rel="noreferrer">Octavio Caba</a></p>
        <small>&copy;2021</small>
      </footer>
    </div>
  );
}
