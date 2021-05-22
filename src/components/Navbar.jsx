export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md bg-light navbar-light sticky-top">
      <div className="container-fluid col-xl-8 col-lg-10 col-md-12 col-sm-12 col-xs-12 justify-content-end">
        <button className="navbar-toggler shadow-none" type="button" data-toggle="collapse" data-target="#navbarResponsive">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav row text-center border-bottom" style={{width: '100%'}}>
            <a className="nav-item nav-link col-sm active" aria-current="page" href="/">Inicio</a>
            <a className="nav-item nav-link col-sm" aria-current="page" href="/pokedex">Pokédex</a>
            <a className="nav-item nav-link col-sm" aria-current="page" href="/tipos">Tabla de Tipos</a>
            <a className="nav-item nav-link col-sm" aria-current="page" href="/">Items</a>
            <a className="nav-item nav-link col-sm" aria-current="page" href="/">Movimientos</a>
          </ul>
        </div>
      </div>
    </nav>
  );
}
