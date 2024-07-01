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
import type { TypeDetailPastDamageRelationsInnerDamageRelations } from './TypeDetailPastDamageRelationsInnerDamageRelations';
import {
    TypeDetailPastDamageRelationsInnerDamageRelationsFromJSON,
    TypeDetailPastDamageRelationsInnerDamageRelationsFromJSONTyped,
    TypeDetailPastDamageRelationsInnerDamageRelationsToJSON,
} from './TypeDetailPastDamageRelationsInnerDamageRelations';
import type { AbilityDetailPokemonInnerPokemon } from './AbilityDetailPokemonInnerPokemon';
import {
    AbilityDetailPokemonInnerPokemonFromJSON,
    AbilityDetailPokemonInnerPokemonFromJSONTyped,
    AbilityDetailPokemonInnerPokemonToJSON,
} from './AbilityDetailPokemonInnerPokemon';

/**
 * 
 * @export
 * @interface TypeDetailPastDamageRelationsInner
 */
export interface TypeDetailPastDamageRelationsInner {
    /**
     * 
     * @type {AbilityDetailPokemonInnerPokemon}
     * @memberof TypeDetailPastDamageRelationsInner
     */
    generation: AbilityDetailPokemonInnerPokemon;
    /**
     * 
     * @type {TypeDetailPastDamageRelationsInnerDamageRelations}
     * @memberof TypeDetailPastDamageRelationsInner
     */
    damageRelations: TypeDetailPastDamageRelationsInnerDamageRelations;
}

/**
 * Check if a given object implements the TypeDetailPastDamageRelationsInner interface.
 */
export function instanceOfTypeDetailPastDamageRelationsInner(value: object): value is TypeDetailPastDamageRelationsInner {
    if (!('generation' in value) || value['generation'] === undefined) return false;
    if (!('damageRelations' in value) || value['damageRelations'] === undefined) return false;
    return true;
}

export function TypeDetailPastDamageRelationsInnerFromJSON(json: any): TypeDetailPastDamageRelationsInner {
    return TypeDetailPastDamageRelationsInnerFromJSONTyped(json, false);
}

export function TypeDetailPastDamageRelationsInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): TypeDetailPastDamageRelationsInner {
    if (json == null) {
        return json;
    }
    return {
        
        'generation': AbilityDetailPokemonInnerPokemonFromJSON(json['generation']),
        'damageRelations': TypeDetailPastDamageRelationsInnerDamageRelationsFromJSON(json['damage_relations']),
    };
}

export function TypeDetailPastDamageRelationsInnerToJSON(value?: TypeDetailPastDamageRelationsInner | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'generation': AbilityDetailPokemonInnerPokemonToJSON(value['generation']),
        'damage_relations': TypeDetailPastDamageRelationsInnerDamageRelationsToJSON(value['damageRelations']),
    };
}
