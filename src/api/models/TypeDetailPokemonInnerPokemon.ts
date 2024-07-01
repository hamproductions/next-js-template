/* tslint:disable */
/* eslint-disable */
/**
 * PokéAPI
 * All the Pokémon data you\'ll ever need in one place, easily accessible through a modern free open-source RESTful API.  ## What is this?  This is a full RESTful API linked to an extensive database detailing everything about the Pokémon main game series.  We\'ve covered everything from Pokémon to Berry Flavors.  ## Where do I start?  We have awesome [documentation](https://pokeapi.co/docs/v2) on how to use this API. It takes minutes to get started.  This API will always be publicly available and will never require any extensive setup process to consume.  Created by [**Paul Hallett**(]https://github.com/phalt) and other [**PokéAPI contributors***](https://github.com/PokeAPI/pokeapi#contributing) around the world. Pokémon and Pokémon character names are trademarks of Nintendo.     
 *
 * The version of the OpenAPI document: 2.7.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface TypeDetailPokemonInnerPokemon
 */
export interface TypeDetailPokemonInnerPokemon {
    /**
     * The name of the pokemon
     * @type {string}
     * @memberof TypeDetailPokemonInnerPokemon
     */
    name?: string;
    /**
     * The URL to get more information about the pokemon
     * @type {string}
     * @memberof TypeDetailPokemonInnerPokemon
     */
    url?: string;
}

/**
 * Check if a given object implements the TypeDetailPokemonInnerPokemon interface.
 */
export function instanceOfTypeDetailPokemonInnerPokemon(value: object): value is TypeDetailPokemonInnerPokemon {
    return true;
}

export function TypeDetailPokemonInnerPokemonFromJSON(json: any): TypeDetailPokemonInnerPokemon {
    return TypeDetailPokemonInnerPokemonFromJSONTyped(json, false);
}

export function TypeDetailPokemonInnerPokemonFromJSONTyped(json: any, ignoreDiscriminator: boolean): TypeDetailPokemonInnerPokemon {
    if (json == null) {
        return json;
    }
    return {
        
        'name': json['name'] == null ? undefined : json['name'],
        'url': json['url'] == null ? undefined : json['url'],
    };
}

export function TypeDetailPokemonInnerPokemonToJSON(value?: TypeDetailPokemonInnerPokemon | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'name': value['name'],
        'url': value['url'],
    };
}
