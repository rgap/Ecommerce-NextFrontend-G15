export async function makeHttpRequest({ endpoint, id, body, method = "GET", cache = "no-store" }) {
  const apiUrl = process.env.NEXT_PUBLIC_HOSTNAME_BACKEND;

  let finalUrl = `${apiUrl}${endpoint}`;
  console.log("finalUrl", finalUrl);

  try {
    let fetchDetails = {
      method,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`, // Include the Bearer token in every request
      },

      body: method !== "GET" ? JSON.stringify(body) : undefined, // Only include body for methods that use it
    };
    console.log(fetchDetails);

    // Add a key to fetchDetails that can be cache: or next: depending on the value of the cache parameter using an object
    const cacheOptions = {
      "no-cache": { cache: "no-store" },
      "revalidate-5min": { next: { revalidate: 300 } },
      "revalidate-12h": { next: { revalidate: 43200 } },
    };
    fetchDetails = { ...fetchDetails, ...cacheOptions[cache] };

    // Make the request
    const response = await fetch(`${finalUrl}`, fetchDetails);
    const responseBody = await response.json();

    let responseReturned;
    // Make it handle HTTP errors
    if (!response.ok) {
      responseReturned = { ok: false, data: responseBody.data, status: response.status };
    } else {
      responseReturned = { ok: true, data: responseBody.data, status: response.status };
    }
    console.log(responseReturned);
    return responseReturned;
  } catch (error) {
    // Handle network errors or other fetching issues
    console.error("HTTP Request failed", error);
    return { error: true, message: "Network error or unable to fetch data", status: 0 };
  }
}
