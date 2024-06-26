export default function generateCardToken() {
  const response = {
    ok: true,
    data: {
      id: "8f712a0129cb1b2a637fdd4bba090be3",
      first_six_digits: "400917",
      expiration_month: 11,
      expiration_year: 2025,
      last_four_digits: "6176",
      cardholder: {
        identification: {
          number: "12345678",
          type: "DNI",
        },
        name: "BETATESTER",
      },
      status: "active",
      date_created: "2024-06-26T03:37:54.746-04:00",
      date_last_updated: "2024-06-26T03:37:54.746-04:00",
      date_due: "2024-07-04T03:37:54.746-04:00",
      luhn_validation: true,
      live_mode: false,
      require_esc: false,
      card_number_length: 16,
      security_code_length: 3,
    },
  };

  return response.data;
}
