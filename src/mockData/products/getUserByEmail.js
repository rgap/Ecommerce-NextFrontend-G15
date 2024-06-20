export default function getUserByEmail() {
  let response = {
    ok: true,
    data: {
      id: 2,
      email: "r.guzmanap@gmail.com",
      name: "Rel Guzman",
      phoneNumber: "",
      address: "",
      city: "",
      region: "",
      country: "Perú",
    },
  };
  return response.data;
}
