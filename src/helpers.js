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

export default typesTranslation;