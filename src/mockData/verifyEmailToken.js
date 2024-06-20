export default function verifyEmailToken(status = 200) {
  const statusResponses = {
    200: { ok: true, data: "Error 200" },
    404: { ok: false, data: "Error 404" },
    409: { ok: false, data: "Error 409" },
    0: { ok: false, data: "Unknown Error" },
  };

  const response = statusResponses[status] || undefined;
  return response;
}
