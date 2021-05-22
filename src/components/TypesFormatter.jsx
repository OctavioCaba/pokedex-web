export const TypesFormatter = ({ pokemonType }) => {
  return (
    <>
      {
        pokemonType[0]
        ? <a href={'http://localhost:3000/tipos'}><span className={`type ${pokemonType[0]}`}>{pokemonType[0]}</span></a>
        : ''
      }
      {
        pokemonType[1]
        ? <a href={'http://localhost:3000/tipos'}><span className={`type ${pokemonType[1]}`}>{pokemonType[1]}</span></a>
        : ''
      }
    </>
  );
}
