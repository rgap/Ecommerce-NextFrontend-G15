import { makeHttpRequest } from "./config";

// CRUD

export async function sendPostRequest({ endpoint, body, cache }) {
  return await makeHttpRequest({ endpoint, body, method: "POST", cache });
}

export async function sendGetRequest({ endpoint, cache }) {
  return await makeHttpRequest({ endpoint, method: "GET", cache });
}

export async function sendPutRequest({ endpoint, body, cache }) {
  return await makeHttpRequest({ endpoint, body, method: "PUT", cache });
}

export async function sendDeleteRequest({ endpoint, cache }) {
  return await makeHttpRequest({ endpoint, method: "DELETE", cache });
}
