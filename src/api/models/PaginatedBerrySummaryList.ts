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
import type { BerrySummary } from './BerrySummary';
import {
    BerrySummaryFromJSON,
    BerrySummaryFromJSONTyped,
    BerrySummaryToJSON,
} from './BerrySummary';

/**
 * 
 * @export
 * @interface PaginatedBerrySummaryList
 */
export interface PaginatedBerrySummaryList {
    /**
     * 
     * @type {number}
     * @memberof PaginatedBerrySummaryList
     */
    count?: number;
    /**
     * 
     * @type {string}
     * @memberof PaginatedBerrySummaryList
     */
    next?: string;
    /**
     * 
     * @type {string}
     * @memberof PaginatedBerrySummaryList
     */
    previous?: string;
    /**
     * 
     * @type {Array<BerrySummary>}
     * @memberof PaginatedBerrySummaryList
     */
    results?: Array<BerrySummary>;
}

/**
 * Check if a given object implements the PaginatedBerrySummaryList interface.
 */
export function instanceOfPaginatedBerrySummaryList(value: object): value is PaginatedBerrySummaryList {
    return true;
}

export function PaginatedBerrySummaryListFromJSON(json: any): PaginatedBerrySummaryList {
    return PaginatedBerrySummaryListFromJSONTyped(json, false);
}

export function PaginatedBerrySummaryListFromJSONTyped(json: any, ignoreDiscriminator: boolean): PaginatedBerrySummaryList {
    if (json == null) {
        return json;
    }
    return {
        
        'count': json['count'] == null ? undefined : json['count'],
        'next': json['next'] == null ? undefined : json['next'],
        'previous': json['previous'] == null ? undefined : json['previous'],
        'results': json['results'] == null ? undefined : ((json['results'] as Array<any>).map(BerrySummaryFromJSON)),
    };
}

export function PaginatedBerrySummaryListToJSON(value?: PaginatedBerrySummaryList | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'count': value['count'],
        'next': value['next'],
        'previous': value['previous'],
        'results': value['results'] == null ? undefined : ((value['results'] as Array<any>).map(BerrySummaryToJSON)),
    };
}
