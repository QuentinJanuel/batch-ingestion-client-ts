import { curl } from "./curl";
import { Entity } from "./type";
import { Response } from "./type/response";
import { Setup } from "./type/setup";

const DEFAULT_COOKIE_FILE = "cookies.txt";

/**
 * Generate an ingest function that can be used to ingest data into a wiki
 * 
 * @param setup Basic information needed to log in to a wiki
 * @returns An ingest function
 * 
 * @example
 * ```typescript
 * const ingest = await setup({
 *    url: "https://en.wikipedia.org",
 *    username: "username", 
 *    password: "password",
 * });
 * 
 * await ingest([...]);
 * ```
 */
export const setup = async function (setup: Setup) {
    const url = `${ setup.url }/w/api.php`;
    const cookieFile = setup.cookieFile ?? DEFAULT_COOKIE_FILE;
    const { query: { tokens: { logintoken: lgtoken } } } = await curl({
        method: "POST",
        url,
        form: {
            action: "query",
            meta: "tokens",
            type: "login",
            format: "json",
        },
        cookieFile,
    });
    const { login } = await curl({
        method: "POST",
        url,
        form: {
            action: "login",
            lgname: setup.username,
            lgpassword: setup.password,
            lgtoken,
            format: "json",
        },
        cookieFile,
    });
    if (login.result !== "Success")
        throw new Error(`Login failed: ${ login.reason }`);
    /**
     * Ingest data into a wiki
     * 
     * @param entities The entities to ingest
     * @returns A response object
     * 
     * @example
     * ```typescript
     * const response = await ingest([
     *     {
     *         type: "item",
     *         labels: {
     *             en: {
     *                 language: "en",
     *                 value: "My item",
     *             },
     *         },
     *     },
     * ]);
     * ```
     */
    const ingest = async function (entities: Entity[]): Promise<Response> {
        const url = `${ setup.url }/w/rest.php/BatchIngestion/v0/batchcreate`;
        const response = await curl({
            method: "POST",
            url,
            json: { entities },
            cookieFile,
        });
        return response;
    }
    return ingest;
}
