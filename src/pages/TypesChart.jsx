import tablaTipos from '../img/tabla-tipos.png';

export const TypesChart = () => {
  return (
    <>
      <h1>Tabla de tipos</h1>
      <div className="image-container">
        <img src={tablaTipos} alt="tabla de tipos" title="Tabla de tipos" />
      </div>
      <small className="image-cortesy">Imagen cortesía de <a className="App-link" href="https://www.wikidex.net/wiki/WikiDex" target="_blank" rel="noreferrer">WikiDex</a></small>
      <p><small className="text-muted font-italic">Tabla actualizada a la 8va generación</small></p>
    </>
  );
}
