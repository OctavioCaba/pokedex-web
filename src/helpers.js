const typesTranslation = type => {
  switch (type) {
    case 'bug':
      return 'bicho';
    case 'dark':
      return 'siniestro';
    case 'dragon':
      return 'dragón';
    case 'electric':
      return 'eléctrico';
    case 'fairy':
      return 'hada';
    case 'fighting':
      return 'lucha';
    case 'fire':
      return 'fuego';
    case 'flying':
      return 'volador';
    case 'ghost':
      return 'fantasma';
    case 'grass':
      return 'planta';
    case 'ground':
      return 'tierra';
    case 'ice':
      return 'hielo';
    case 'normal':
      return 'normal';
    case 'poison':
      return 'veneno';
    case 'psychic':
      return 'psíquico';
    case 'rock':
      return 'roca';
    case 'steel':
      return 'acero';
    case 'water':
      return 'agua';
    default:
      break;
  }
}

const generationsTranslation = generation => {
  switch (generation) {
    case 'generation-i':
      return '1ra generación';
    case 'generation-ii':
      return '2da generación';
    case 'generation-iii':
      return '3ra generación';
    case 'generation-iv':
      return '4ta generación';
    case 'generation-v':
      return '5ta generación';
    case 'generation-vi':
      return '6ta generación';
    case 'generation-vii':
      return '7ma generación';
    case 'generation-viii':
      return '8va generación';
    default:
      break;
  }
}

/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default { typesTranslation, generationsTranslation };