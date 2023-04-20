export interface Response {
    count: number;
    successes: number;
    response: {
        revision: number;
        id: string;
    }[];
}
