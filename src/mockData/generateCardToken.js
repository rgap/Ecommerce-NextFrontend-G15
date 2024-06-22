export default function generateCardToken() {
  const response = {
    id: "1234567890abcdef",
    public_key: "TEST-12345678-1234-1234-1234-123456789012",
    card_id: "card_abcdef1234567890",
    status: "active",
    date_created: "2023-06-30T14:00:00.000Z",
    date_last_updated: "2023-06-30T14:00:00.000Z",
    date_due: "2024-06-30T14:00:00.000Z",
    luhn_validation: true,
    live_mode: false,
    card_number_length: 16,
    cardholder: {
      name: "APRO",
      identification: {
        number: "12345678",
        type: "DNI",
      },
    },
    security_code_length: 3,
    expiration_month: 11,
    expiration_year: 2025,
    last_four_digits: "0604",
    first_six_digits: "503175",
    issuer_id: "1",
  };

  return response;
}
