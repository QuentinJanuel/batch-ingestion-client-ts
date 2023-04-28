import { exec } from "child_process";

interface CurlOptions {
    method: "GET" | "POST" | "PUT" | "DELETE",
    url: string,
    form?: object,
    json?: object,
    cookieFile: string,
}

export const curl = async function ({
    method,
    url,
    form,
    json,
    cookieFile,
}: CurlOptions) {
    const isJson = json !== undefined;

    const header = isJson ? "application/json" : "application/x-www-form-urlencoded";
    const data = isJson
        ? JSON.stringify(json ?? {})
        : Object.entries(form ?? {})
            .map(([key, value]) => `${ encodeURIComponent(key) }=${ encodeURIComponent(value) }`)
            .join("&");

    const curlCommand = `
        curl -X ${ method } \
            -H "Content-Type: ${ header }" \
            -c ${ cookieFile } \
            -b ${ cookieFile } \
            -d '${ data }' \
            "${ url }"
    `.trim();

    const { stdout, stderr } = await new Promise((
        resolve: (value: { stdout: string, stderr: string }) => void,
        reject,
    ) => {
        exec(curlCommand, (err, stdout, stderr) => {
            if (err)
                reject(err);
            else
                resolve({ stdout, stderr });
        });
    });

    try {
        return JSON.parse(stdout);
    } catch (_) {
        return stdout;
    }
}
