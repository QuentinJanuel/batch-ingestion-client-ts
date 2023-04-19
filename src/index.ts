import { data } from "./data";
import axios from "axios";

const baseURL = "http://default.mediawiki.mwdd.localhost:8080";
const route = "/w/rest.php/BatchIngestion/v0/batchcreate";
const url = baseURL + route;

const main = async function () {
    const response = await axios.post(url, data);
    console.log(response.data);
}

main().catch(console.error);
