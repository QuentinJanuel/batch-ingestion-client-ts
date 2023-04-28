/** A response object */
export interface Response {
    /** The number of entities that were queried for the ingestion */
    count: number;
    /** The number of entities that were successfully ingested */
    successes: number;
    /** Data for each entity that was ingested */
    response: {
        /** The revision ID of the entity that was ingested */
        revision: number;
        /** The ID of the entity that was ingested */
        id: string;
    }[];
}
