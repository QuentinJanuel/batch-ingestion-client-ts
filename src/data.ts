import { Data } from "./type";

export const data: Data = {
    key: "85da1b9d-534e-46ea-960c-0866120c0c8c",
    entities: [
        {
            id: "Q22",
            // mode: "add",
            type: "item",
            labels: {
                en: {
                    language: "en",
                    value: "some new name",
                },
            },
            claims: {
                P1: [
                    {
                        mainsnak: {
                            snaktype: "value",
                            property: "P1",
                            datatype: "external-id",
                            datavalue: {
                                value: "some claim value",
                                type: "string",
                            },
                        },
                        type: "statement",
                        rank: "normal",
                    },
                ],
                P2: [
                    {
                        mainsnak: {
                            snaktype: "value",
                            property: "P2",
                            datatype: "external-id",
                            datavalue: {
                                value: "some claim value 2",
                                type: "string",
                            },
                        },
                        type: "statement",
                        rank: "normal",
                    },
                ],
            },
            descriptions: {
                en: {
                    language: "en",
                    value: "some description",
                },
            },
        },
    ],
};
