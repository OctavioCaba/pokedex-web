import { Navbar } from './Navbar';

export const AppFrame = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div className="container text-center">
        { children }
      </div>
      <footer className="footer">
        <p>Página diseñada y desarrollada por <a href="https://github.com/octaviocaba" className="App-link" target="_blank" rel="noreferrer">Octavio Caba</a></p>
        <small>&copy;2021</small>
      </footer>
    </div>
  )
}
