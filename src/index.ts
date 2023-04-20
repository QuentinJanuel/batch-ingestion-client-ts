import axios from "axios";
import { data } from "./data";
import { Data } from "./type";
import { Response } from "./type/response";

export const init = function (baseURL: string) {
    const route = "/w/rest.php/BatchIngestion/v0/batchcreate";
    const url = baseURL + route;
    return async function (data: Data): Promise<Response> {
        try {
            const response = await axios.post(url, data);
            return response.data;
        } catch (err) {
            const error = err as any;
            if (error.response && error.response.data && error.response.data.error)
                throw error.response.data.error;
            throw error;
        }
    }
}

const batchIngest = init("http://default.mediawiki.mwdd.localhost:8080");

const main = async function () {
    const res = await batchIngest(data);
    console.log(res);
}

main().catch(console.error);
