export default function getProductBySlug(productSlug) {
  const response = {
    ok: true,
    data: {
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
      availableSizes: ["s", "m", "l", "xl"],
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
        {
          name: "blanco",
          hexCode: "#FFFFFF",
        },
      ],
      stock: {
        s: {
          turquesa: 10,
          negro: 12,
          gris: 8,
          blanco: 7,
        },
        m: {
          turquesa: 12,
          negro: 8,
          gris: 18,
          blanco: 14,
        },
        l: {
          turquesa: 10,
          negro: 6,
          gris: 15,
          blanco: 16,
        },
        xl: {
          turquesa: 7,
          negro: 4,
          gris: 12,
          blanco: 10,
        },
      },
      prices: {
        s: {
          turquesa: "55.00",
          negro: "55.00",
          gris: "55.00",
          blanco: "55.00",
        },
        m: {
          turquesa: "65.00",
          negro: "65.00",
          gris: "65.00",
          blanco: "65.00",
        },
        l: {
          turquesa: "75.00",
          negro: "75.00",
          gris: "75.00",
          blanco: "75.00",
        },
        xl: {
          turquesa: "85.00",
          negro: "85.00",
          gris: "85.00",
          blanco: "85.00",
        },
      },
      imageArray: [
        "https://raw.githubusercontent.com/rgap/Ecommerce-G15-ImageRepository/main/images/polo-rojo-adidas.jpg",
        "https://raw.githubusercontent.com/rgap/Ecommerce-G15-ImageRepository/main/images/polo-verdepasto-quiksilver.jpg",
        "https://raw.githubusercontent.com/rgap/Ecommerce-G15-ImageRepository/main/images/polo-rojojaspeado-quiksilver.jpg",
        "https://raw.githubusercontent.com/rgap/Ecommerce-G15-ImageRepository/main/images/polo-verdesuave-ripcurl.jpg",
        "https://raw.githubusercontent.com/rgap/Ecommerce-G15-ImageRepository/main/images/polo-rojo-billabong2.jpg",
      ],
      minimumPriceColor: "turquesa",
      minimumPriceSize: "s",
    },
  };
  return response.data;
}
