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
import type { AbilityDetailPokemonInnerPokemon } from './AbilityDetailPokemonInnerPokemon';
import {
    AbilityDetailPokemonInnerPokemonFromJSON,
    AbilityDetailPokemonInnerPokemonFromJSONTyped,
    AbilityDetailPokemonInnerPokemonToJSON,
} from './AbilityDetailPokemonInnerPokemon';
import type { EvolutionChainDetailChainEvolvesToInner } from './EvolutionChainDetailChainEvolvesToInner';
import {
    EvolutionChainDetailChainEvolvesToInnerFromJSON,
    EvolutionChainDetailChainEvolvesToInnerFromJSONTyped,
    EvolutionChainDetailChainEvolvesToInnerToJSON,
} from './EvolutionChainDetailChainEvolvesToInner';

/**
 * 
 * @export
 * @interface EvolutionChainDetailChain
 */
export interface EvolutionChainDetailChain {
    /**
     * 
     * @type {Array<any>}
     * @memberof EvolutionChainDetailChain
     */
    evolutionDetails: Array<any>;
    /**
     * 
     * @type {Array<EvolutionChainDetailChainEvolvesToInner>}
     * @memberof EvolutionChainDetailChain
     */
    evolvesTo: Array<EvolutionChainDetailChainEvolvesToInner>;
    /**
     * 
     * @type {boolean}
     * @memberof EvolutionChainDetailChain
     */
    isBaby: boolean;
    /**
     * 
     * @type {AbilityDetailPokemonInnerPokemon}
     * @memberof EvolutionChainDetailChain
     */
    species: AbilityDetailPokemonInnerPokemon;
}

/**
 * Check if a given object implements the EvolutionChainDetailChain interface.
 */
export function instanceOfEvolutionChainDetailChain(value: object): value is EvolutionChainDetailChain {
    if (!('evolutionDetails' in value) || value['evolutionDetails'] === undefined) return false;
    if (!('evolvesTo' in value) || value['evolvesTo'] === undefined) return false;
    if (!('isBaby' in value) || value['isBaby'] === undefined) return false;
    if (!('species' in value) || value['species'] === undefined) return false;
    return true;
}

export function EvolutionChainDetailChainFromJSON(json: any): EvolutionChainDetailChain {
    return EvolutionChainDetailChainFromJSONTyped(json, false);
}

export function EvolutionChainDetailChainFromJSONTyped(json: any, ignoreDiscriminator: boolean): EvolutionChainDetailChain {
    if (json == null) {
        return json;
    }
    return {
        
        'evolutionDetails': json['evolution_details'],
        'evolvesTo': ((json['evolves_to'] as Array<any>).map(EvolutionChainDetailChainEvolvesToInnerFromJSON)),
        'isBaby': json['is_baby'],
        'species': AbilityDetailPokemonInnerPokemonFromJSON(json['species']),
    };
}

export function EvolutionChainDetailChainToJSON(value?: EvolutionChainDetailChain | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'evolution_details': value['evolutionDetails'],
        'evolves_to': ((value['evolvesTo'] as Array<any>).map(EvolutionChainDetailChainEvolvesToInnerToJSON)),
        'is_baby': value['isBaby'],
        'species': AbilityDetailPokemonInnerPokemonToJSON(value['species']),
    };
}
