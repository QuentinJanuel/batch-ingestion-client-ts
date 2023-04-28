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

interface BaseEntity {
    type: EntityType;
    labels?: ValuesInLanguages;
    claims?: Claims;
    descriptions?: ValuesInLanguages;
}

type NewEntity = BaseEntity & { id?: never, mode?: never };
type OverwriteEntity = BaseEntity & { id: string, mode?: never };
type AddToEntity = BaseEntity & { id: string, mode: "add" };
type RemoveFromEntity = BaseEntity & { id: string, mode: "remove" };

export type Entity = NewEntity | OverwriteEntity | AddToEntity | RemoveFromEntity;
