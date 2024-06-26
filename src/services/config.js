export async function makeHttpRequest({ endpoint, id, body, method = "GET", cache = "no-store" }) {
  const apiUrl = process.env.NEXT_PUBLIC_HOSTNAME_BACKEND;
  process.env.NEXT_PUBLIC_API_URL;

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

    // Add a key to fetchDetails that can be cache: or next: depending on the value of the cache parameter using a dic
    const cacheOptions = {
      "no-cache": { cache: "no-store" },
      "revalidate-5min": { next: { revalidate: 300 } },
      "revalidate-12h": { next: { revalidate: 43200 } },
    };
    fetchDetails = { ...fetchDetails, ...cacheOptions[cache] };

    // Make the request
    const response = await fetch(`${finalUrl}`, fetchDetails);
    const responseBody = await response.json();

    if (!response.ok) {
      // Handle HTTP errors
      const errorBody = responseBody;
      return { error: true, ...errorBody, status: response.status };
    } else {
      const dataBody = responseBody.data;
      return { data: dataBody, status: response.status };
    }
  } catch (error) {
    // Handle network errors or other fetching issues
    console.error("HTTP Request failed", error);
    return { error: true, message: "Network error or unable to fetch data", status: 0 };
  }
}
