# BatchIngestion TypeScript Client

This is a TypeScript client library for the [BatchIngestion](https://gitlab.the-qa-company.com/FrozenMink/batchingestionextension) MediaWiki extension, which provides an API to ingest many entities at once. This library allows you to easily ingest entities in bulk.

## Installation

You can install this library using [npm](https://www.npmjs.com/package/batch-ingestion-client-ts):

```bash
npm i batch-ingestion-client-ts
```

## Usage

```ts
import { getIngestor } from "batch-ingestion-client-ts";
// or import with require
const { getIngestor } = require("batch-ingestion-client-ts");

const ingest = getIngestor("http://default.mediawiki.mwdd.localhost:8080");

const res = await ingest({
    key: "<your-api-key>",
    entities: [
        {
            id: "Q22",
            mode: "add",
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
            },
            descriptions: {
                en: {
                    language: "en",
                    value: "some description",
                },
            },
        },
    ],
});
console.log(res);
```

## Contributing

If you'd like to contribute to this library, please feel free to submit a pull request.
