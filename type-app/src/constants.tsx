//const localhost = "http://127.0.0.1:8000";
const localhost = "https://api.intelliscan.io";
const apiURL = "/user";

export const endpoint = `${localhost}${apiURL}`;

export const authURL = `${endpoint}/sign-in/`;
export const domainURL = `${endpoint}/domains/`;

