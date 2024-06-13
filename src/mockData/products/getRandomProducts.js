export default function getRandomProducts() {
  const response = {
    data: [
      {
        id: 12,
        title: "Polo Quiksilver Blanco",
        description:
          "El polo Quiksilver blanco es una pieza esencial para un estilo casual y relajado, perfecto para el día a día o actividades al aire libre.",
        shortDescription: "Casual y Ecológico",
        mainImage: "https://raw.githubusercontent.com/rgap/Ecommerce-G15-ImageRepository/main/images/polo-blanco-quiksilver.jpg",
        material: "Fabricado con 100% algodón orgánico, brinda una experiencia de uso suave y respetuosa con el medio ambiente.",
        care: "Lavar a mano o en ciclo suave, no usar secadora, planchar a baja temperatura.",
        slug: "polo-quiksilver-blanco",
        createdAt: "2024-05-18T15:46:32.715Z",
        updatedAt: "2024-05-18T15:46:32.715Z",
        availableColors: [
          {
            name: "blanco",
            hexCode: "#FFFFFF",
          },
          {
            name: "crema",
            hexCode: "#FFFDD0",
          },
          {
            name: "gris",
            hexCode: "#808080",
          },
        ],
        minimumPrice: 49,
      },
      {
        id: 13,
        title: "Polo Adidas Amarillo",
        description: "El polo amarillo de Adidas combina estilo y comodidad, perfecto para actividades deportivas o un look casual diario.",
        shortDescription: "Deporte y Estilo Diario",
        mainImage: "https://raw.githubusercontent.com/rgap/Ecommerce-G15-ImageRepository/main/images/polo-amarillo-adidas.jpg",
        material: "Tejido 90% algodón y 10% elastano para mayor comodidad y flexibilidad durante todo el día.",
        care: "Lavar a máquina a 30ºC. No usar blanqueador. No apto para secadora. Planchar a temperatura media.",
        slug: "polo-adidas-amarillo",
        createdAt: "2024-05-18T15:46:32.715Z",
        updatedAt: "2024-05-18T15:46:32.715Z",
        availableColors: [
          {
            name: "indigo",
            hexCode: "#4B0082",
          },
          {
            name: "blanco",
            hexCode: "#FFFFFF",
          },
          {
            name: "negro",
            hexCode: "#000000",
          },
        ],
        minimumPrice: 50,
      },
      {
        id: 14,
        title: "Polo Nike Azul",
        description: "Este polo Nike en tono azul es ideal para cualquier actividad, ofreciendo confort y un estilo moderno y versátil.",
        shortDescription: "Confort y Estilo Moderno",
        mainImage: "https://raw.githubusercontent.com/rgap/Ecommerce-G15-ImageRepository/main/images/polo-azul-nike.jpg",
        material: "100% algodón de alta calidad, garantiza durabilidad y una sensación agradable al tacto.",
        care: "Lavado a máquina en agua fría con colores similares. No usar lejía. Secar en horizontal. No planchar los estampados.",
        slug: "polo-nike-azul",
        createdAt: "2024-05-18T15:46:32.715Z",
        updatedAt: "2024-05-18T15:46:32.715Z",
        availableColors: [
          {
            name: "turquesa",
            hexCode: "#40E0D0",
          },
          {
            name: "negro",
            hexCode: "#000000",
          },
          {
            name: "gris",
            hexCode: "#808080",
          },
        ],
        minimumPrice: 52,
      },
      {
        id: 15,
        title: "Polo Quiksilver Celeste",
        description: "Este polo celeste es perfecto para un look casual de fin de semana. Combina estilo y confort de manera única.",
        shortDescription: "Estilo Casual de Finde",
        mainImage: "https://raw.githubusercontent.com/rgap/Ecommerce-G15-ImageRepository/main/images/polo-celeste-quiksilver.jpg",
        material: "Confeccionado con 95% algodón y 5% spandex, brindando elasticidad y comodidad todo el día.",
        care: "Lavado suave a máquina a 30°C. No usar cloro. Secar a baja temperatura. No lavar en seco. Planchar a temperatura baja.",
        slug: "polo-quiksilver-celeste",
        createdAt: "2024-05-18T15:46:32.715Z",
        updatedAt: "2024-05-18T15:46:32.715Z",
        availableColors: [
          {
            name: "turquesa",
            hexCode: "#40E0D0",
          },
          {
            name: "blanco",
            hexCode: "#FFFFFF",
          },
          {
            name: "azul verdoso",
            hexCode: "#008080",
          },
        ],
        minimumPrice: 47,
      },
    ],
  };
  return response.data;
}
