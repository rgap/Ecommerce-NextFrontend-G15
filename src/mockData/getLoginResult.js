export default function getLoginResult(success = true) {
  let response = undefined;
  if (!success) {
    response = {
      ok: false,
      data: "Invalid email or password",
    };
  } else {
    response = {
      ok: true,
      data: "User authenticated successfully",
    };
  }
  return response;
}
