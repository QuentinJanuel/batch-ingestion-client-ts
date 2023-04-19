import { LanguageCode } from "./lang";

type EntityType = "item" | "property";
type PropertyType = "string" | string; // TODO
type SnakType = "value" | string; // TODO
type DataType = "external-id" | string; // TODO
type Rank = "normal" | string; // TODO
type ClaimType = "statement" | string; // TODO

type ValuesInLanguages = {
    [key in LanguageCode]?: {
        language: key;
        value: string;
    }
}

type Claims = {
    [key in string]: {
        mainsnak: {
            snaktype: SnakType;
            property: key;
            datatype: DataType;
            datavalue: {
                value: string;
                type: PropertyType;
            };
        };
        type: ClaimType;
        rank: Rank;
    }[];
}

interface Entity {
    id?: string;
    type: EntityType;
    labels?: ValuesInLanguages;
    claims?: Claims;
    descriptions?: ValuesInLanguages;
}

export interface Data {
    key: string;
    entities: Entity[];
}
