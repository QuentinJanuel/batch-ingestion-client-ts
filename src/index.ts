import { setup } from "./lib";

export { setup };

// const main = async function () {
//     const ingest = await setup({
//         username: "admin",
//         password: "change-this-password",
//         url: "http://localhost:3000",
//     });

//     const response = await ingest([
//         {
//             type: "item",
//             labels: {
//                 en: {
//                     language: "en",
//                     value: "My item",
//                 },
//             },
//         },
//     ]);

//     console.log(response);
// }

// main().catch(console.error);
