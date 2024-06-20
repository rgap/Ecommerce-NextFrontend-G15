export default function getRelatedProducts(productTitle, productId, numberOfProducts) {
  const response = {
    ok: true,
    data: [
      {
        id: 1,
        title: "Polo Nike Verde Claro",
        description:
          "Este polo Nike en verde claro combina estilo y comodidad. Ideal para actividades al aire libre o un look casual. Material suave y duradero.",
        shortDescription: "Confort Casual y Estilo",
        mainImage: "https://raw.githubusercontent.com/rgap/Ecommerce-G15-ImageRepository/main/images/polo-verde-claro-nike-m-nobg.jpg",
        material: "Tejido de alta calidad, 60% algodón, 40% poliéster, suave al tacto.",
        care: "Lavado a máquina con colores similares, secado en línea, planchar a baja temperatura.",
        slug: "polo-nike-verde-claro",
        createdAt: "2024-05-18T15:46:32.715Z",
        updatedAt: "2024-05-18T15:46:32.715Z",
        similarity: 0,
        availableColors: [
          {
            name: "verde",
            hexCode: "#008000",
          },
          {
            name: "azul verdoso",
            hexCode: "#008080",
          },
          {
            name: "crema",
            hexCode: "#FFFDD0",
          },
        ],
        minimumPrice: 55,
      },
      {
        id: 2,
        title: "Polo Quiksilver Turquesa",
        description:
          "El polo Quiksilver en color turquesa ofrece un look fresco y relajado, perfecto para días soleados. Material resistente y fácil de cuidar.",
        shortDescription: "Frescura y Estilo Veraniego",
        mainImage: "https://raw.githubusercontent.com/rgap/Ecommerce-G15-ImageRepository/main/images/polo-turqueza-quiksilver.jpg",
        material: "Tejido transpirable, 70% algodón y 30% poliéster, ideal para el calor.",
        care: "Lavar a mano o máquina con agua fría. No usar cloro. Secar colgado a la sombra.",
        slug: "polo-quiksilver-turquesa",
        createdAt: "2024-05-18T15:46:32.715Z",
        updatedAt: "2024-05-18T15:46:32.715Z",
        similarity: 0,
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
        minimumPrice: 55,
      },
      {
        id: 3,
        title: "Polo Billabong Amarillo",
        description:
          "Este polo Billabong en amarillo vibrante es ideal para un estilo juvenil y desenfadado. Excelente para el día a día, combinando comodidad y moda.",
        shortDescription: "Vibrante y Confortable",
        mainImage: "https://raw.githubusercontent.com/rgap/Ecommerce-G15-ImageRepository/main/images/polo-%20amarillo-billabong-logo.jpg",
        material: "Confección de calidad, 50% algodón, 50% modal, perfecto para el uso diario.",
        care: "Lavado suave en ciclo delicado. No usar secadora. Planchar a temperatura baja.",
        slug: "polo-billabong-amarillo",
        createdAt: "2024-05-18T15:46:32.715Z",
        updatedAt: "2024-05-18T15:46:32.715Z",
        similarity: 0,
        availableColors: [
          {
            name: "amarillo",
            hexCode: "#FFFF00",
          },
          {
            name: "rojo",
            hexCode: "#FF0000",
          },
          {
            name: "indigo",
            hexCode: "#4B0082",
          },
        ],
        minimumPrice: 48,
      },
      {
        id: 4,
        title: "Polo Ripcurl Marrón Floreado",
        description:
          "El Polo Ripcurl Marrón Floreado combina estilo y confort, ideal para un look casual pero llamativo. Perfecto para cualquier ocasión.",
        shortDescription: "Casual y Atractivo",
        mainImage: "https://raw.githubusercontent.com/rgap/Ecommerce-G15-ImageRepository/main/images/polo-marron-ripcurl-floreado.jpg",
        material: "Composición mezclada: 60% algodón y 40% poliéster. Duradero y cómodo.",
        care: "No usar lejía. Lavar a máquina temperatura normal. No secar en secadora. Planchar a temperatura media.",
        slug: "polo-ripcurl-marron-floreado",
        createdAt: "2024-05-18T15:46:32.715Z",
        updatedAt: "2024-05-18T15:46:32.715Z",
        similarity: 0,
        availableColors: [
          {
            name: "marrón",
            hexCode: "#A52A2A",
          },
          {
            name: "crema",
            hexCode: "#FFFDD0",
          },
          {
            name: "rosado",
            hexCode: "#FFC0CB",
          },
        ],
        minimumPrice: 50,
      },
    ],
  };
  return response.data;
}
