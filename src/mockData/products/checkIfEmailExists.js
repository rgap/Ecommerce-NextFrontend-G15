export default function checkIfEmailExists(exists = false) {
  let response = undefined;
  if (!exists) {
    response = {
      ok: false,
      data: "User not found",
    };
  } else {
    response = {
      ok: true,
      data: "User exists",
    };
  }
  return response;
}
