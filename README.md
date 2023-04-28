# BatchIngestion TypeScript Client

This is a TypeScript client library for the [BatchIngestion](https://gitlab.the-qa-company.com/FrozenMink/batchingestionextension) MediaWiki extension, which provides an API to ingest many entities at once. This library allows you to easily ingest entities in bulk.

## Installation

You can install this library using [npm](https://www.npmjs.com/package/batch-ingestion-client-ts):

```bash
npm i batch-ingestion-client-ts
```

## Usage

```ts
import { setup } from "batch-ingestion-client-ts";
// or import with require
const { setup } = require("batch-ingestion-client-ts");

const ingest = await setup({
    username: "your-username",
    password: "your-password",
    url: "https://your-wiki-url.com",
});

const response = await ingest([
    {
        type: "item",
        labels: {
            en: {
                language: "en",
                value: "My item",
            },
        },
    },
]);

console.log(response);
```

## Limitations

This library internally uses cURL to make requests to the MediaWiki API. This means that it is not possible to use this library in a browser environment.
We would just need to replace the cURL calls with fetch calls to make this library work in a browser environment. If this is something you need, please feel free to submit a pull request or open an issue.
