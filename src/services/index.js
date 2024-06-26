import { makeHttpRequest } from "./config";

// CRUD

export async function sendPostRequest({ body, endpoint, cache }) {
  return await makeHttpRequest({ endpoint, body, method: "POST", cache });
}

export async function sendGetRequest({ endpoint, id = "", cache }) {
  return await makeHttpRequest({ endpoint, id, method: "GET", cache });
}

export async function sendPutRequest({ id, body, endpoint, cache }) {
  return await makeHttpRequest({ endpoint, id, body, method: "PUT", cache });
}

export async function sendDeleteRequest({ id, endpoint, cache }) {
  return await makeHttpRequest({ endpoint, id, method: "DELETE", cache });
}
