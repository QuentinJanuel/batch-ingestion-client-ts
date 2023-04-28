/** Basic information needed to log in to a wiki */
export interface Setup {
    /** The base URL of the wiki, e.g. https://en.wikipedia.org */
    url: string,
    /** The username to log in as */
    username: string,
    /** The password to log in with */
    password: string,
    /** Path to a file to store cookies in (default is cookies.txt) */
    cookieFile?: string,
}
