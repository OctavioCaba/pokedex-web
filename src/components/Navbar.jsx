export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md bg-light navbar-light sticky-top">
      <div className="container-fluid col-xl-6 col-lg-6 col-md-6 col-sm-9 col-xs-9 justify-content-end">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav row text-center border-bottom border-warning" style={{width: '100%'}}>
            <a className="nav-item nav-link col-sm active" aria-current="page" href="/pokedex">Pokédex</a>
            <a className="nav-item nav-link col-sm" aria-current="page" href="/">Habilidades</a>
            <a className="nav-item nav-link col-sm" aria-current="page" href="/">Tabla de Tipos</a>
            <a className="nav-item nav-link col-sm" aria-current="page" href="/">Items</a>
            <a className="nav-item nav-link col-sm" aria-current="page" href="/">Movimientos</a>
          </ul>
        </div>
      </div>
    </nav>
  )
}
