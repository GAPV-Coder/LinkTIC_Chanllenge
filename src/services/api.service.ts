import axios from 'axios';

export class APIservice {
    static async get() {
        const result = await axios.get('https://pokeapi.co/api/v2/pokemon');
        return result ? result : null ;
    }

    static async getPokemon(pokemon: string) {
        const result = await axios.get('https://pokeapi.co/api/v2/pokemon' + '/' + pokemon);
        return result ? result : null ;
    }

    static async getTypePokemon(typePokemon: string) {
        const result = await axios.get('https://pokeapi.co/api/v2/type' + '/' + typePokemon);
        return result ? result : null ;
    }

    static async getAbilityPokemon(abilityPokemon: string) {
        const result = await axios.get('https://pokeapi.co/api/v2/ability' + '/' + abilityPokemon);
        return result ? result : null ;
    }
}
