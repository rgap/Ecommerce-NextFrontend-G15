export const getProductBySlug = slug => {
  return allProducts.data.find(product => product.slug === slug);
};

export const randomProducts = {
  data: [
    {
      id: 5,
      title: "Polo Nike Azul Claro",
      description: "Este polo Nike en azul claro es la combinación perfecta de comodidad y estilo, ideal para un look relajado y deportivo.",
      shortDescription: "Cómodo y Estilizado",
      mainImage: "https://raw.githubusercontent.com/rgap/Ecommerce-G15-ImageRepository/main/images/polo-azul-claro-nike-m.jpg",
      material: "100% Algodón orgánico. Suave al tacto y amigable con el medio ambiente.",
      care: "Lavado en ciclo suave con colores similares. No usar blanqueador. Secar a baja temperatura.",
      slug: "polo-nike-azul-claro",
      createdAt: "2024-05-18T14:54:17.185Z",
      updatedAt: "2024-05-18T14:54:17.185Z",
      availableColors: [
        {
          name: "azul verdoso",
          hexCode: "#008080",
        },
        {
          name: "turquesa",
          hexCode: "#40E0D0",
        },
        {
          name: "gris",
          hexCode: "#808080",
        },
      ],
      minimumPrice: 49,
    },
    {
      id: 6,
      title: "Polo Quiksilver Verde Claro",
      description: "Polo Quiksilver en tono verde claro, perfecto para un estilo casual y moderno. Ideal para el día a día y salidas casuales.",
      shortDescription: "Casual y Moderno",
      mainImage: "https://raw.githubusercontent.com/rgap/Ecommerce-G15-ImageRepository/main/images/polo-verde-claro-quiksilver.jpg",
      material: "Material premium: 75% algodón y 25% poliéster. Resistente y fresco.",
      care: "Lavar a mano con agua tibia. No usar secadora. Planchar a baja temperatura. Evitar el uso de blanqueadores.",
      slug: "polo-quiksilver-verde-claro",
      createdAt: "2024-05-18T14:54:17.185Z",
      updatedAt: "2024-05-18T14:54:17.185Z",
      availableColors: [
        {
          name: "verde",
          hexCode: "#008000",
        },
        {
          name: "amarillo",
          hexCode: "#FFFF00",
        },
        {
          name: "blanco",
          hexCode: "#FFFFFF",
        },
      ],
      minimumPrice: 43,
    },
    {
      id: 7,
      title: "Polo Ripcurl Azul Claro",
      description: "Este Polo Ripcurl en azul claro es perfecto para un estilo relajado y versátil, adaptándose a diversas ocasiones y estilos.",
      shortDescription: "Versátil y Relajado",
      mainImage: "https://raw.githubusercontent.com/rgap/Ecommerce-G15-ImageRepository/main/images/polo-azul-claro-ripcurl.jpg",
      material: "Composición: 80% algodón, 20% poliéster. Ideal para confort diario.",
      care: "Lavado a máquina con colores similares. No usar cloro. Secar al aire libre.",
      slug: "polo-ripcurl-azul-claro",
      createdAt: "2024-05-18T14:54:17.185Z",
      updatedAt: "2024-05-18T14:54:17.185Z",
      availableColors: [
        {
          name: "turquesa",
          hexCode: "#40E0D0",
        },
        {
          name: "indigo",
          hexCode: "#4B0082",
        },
        {
          name: "gris",
          hexCode: "#808080",
        },
      ],
      minimumPrice: 47,
    },
    {
      id: 8,
      title: "Polo Ripcurl Guinda",
      description: "El Polo Ripcurl en tono guinda combina comodidad y elegancia, ideal para un estilo sofisticado en cualquier ocasión.",
      shortDescription: "Elegante y Cómodo",
      mainImage: "https://raw.githubusercontent.com/rgap/Ecommerce-G15-ImageRepository/main/images/polo-guinda-ripcurl.jpg",
      material: "Tela suave y resistente, 60% algodón y 40% poliéster, para un uso prolongado.",
      care: "Lavar a mano en agua fría. No exprimir. Secar a la sombra para mantener el color.",
      slug: "polo-ripcurl-guinda",
      createdAt: "2024-05-18T14:54:17.185Z",
      updatedAt: "2024-05-18T14:54:17.185Z",
      availableColors: [
        {
          name: "guinda",
          hexCode: "#800000",
        },
        {
          name: "negro",
          hexCode: "#000000",
        },
        {
          name: "crema",
          hexCode: "#FFFDD0",
        },
      ],
      minimumPrice: 49,
    },
  ],
  status: 200,
};

export const allProducts = {
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
      createdAt: "2024-05-18T14:54:17.185Z",
      updatedAt: "2024-05-18T14:54:17.185Z",
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
      createdAt: "2024-05-18T14:54:17.185Z",
      updatedAt: "2024-05-18T14:54:17.185Z",
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
      createdAt: "2024-05-18T14:54:17.185Z",
      updatedAt: "2024-05-18T14:54:17.185Z",
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
      createdAt: "2024-05-18T14:54:17.185Z",
      updatedAt: "2024-05-18T14:54:17.185Z",
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
    {
      id: 5,
      title: "Polo Nike Azul Claro",
      description: "Este polo Nike en azul claro es la combinación perfecta de comodidad y estilo, ideal para un look relajado y deportivo.",
      shortDescription: "Cómodo y Estilizado",
      mainImage: "https://raw.githubusercontent.com/rgap/Ecommerce-G15-ImageRepository/main/images/polo-azul-claro-nike-m.jpg",
      material: "100% Algodón orgánico. Suave al tacto y amigable con el medio ambiente.",
      care: "Lavado en ciclo suave con colores similares. No usar blanqueador. Secar a baja temperatura.",
      slug: "polo-nike-azul-claro",
      createdAt: "2024-05-18T14:54:17.185Z",
      updatedAt: "2024-05-18T14:54:17.185Z",
      availableColors: [
        {
          name: "azul verdoso",
          hexCode: "#008080",
        },
        {
          name: "turquesa",
          hexCode: "#40E0D0",
        },
        {
          name: "gris",
          hexCode: "#808080",
        },
      ],
      minimumPrice: 49,
    },
    {
      id: 6,
      title: "Polo Quiksilver Verde Claro",
      description: "Polo Quiksilver en tono verde claro, perfecto para un estilo casual y moderno. Ideal para el día a día y salidas casuales.",
      shortDescription: "Casual y Moderno",
      mainImage: "https://raw.githubusercontent.com/rgap/Ecommerce-G15-ImageRepository/main/images/polo-verde-claro-quiksilver.jpg",
      material: "Material premium: 75% algodón y 25% poliéster. Resistente y fresco.",
      care: "Lavar a mano con agua tibia. No usar secadora. Planchar a baja temperatura. Evitar el uso de blanqueadores.",
      slug: "polo-quiksilver-verde-claro",
      createdAt: "2024-05-18T14:54:17.185Z",
      updatedAt: "2024-05-18T14:54:17.185Z",
      availableColors: [
        {
          name: "verde",
          hexCode: "#008000",
        },
        {
          name: "amarillo",
          hexCode: "#FFFF00",
        },
        {
          name: "blanco",
          hexCode: "#FFFFFF",
        },
      ],
      minimumPrice: 43,
    },
    {
      id: 7,
      title: "Polo Ripcurl Azul Claro",
      description: "Este Polo Ripcurl en azul claro es perfecto para un estilo relajado y versátil, adaptándose a diversas ocasiones y estilos.",
      shortDescription: "Versátil y Relajado",
      mainImage: "https://raw.githubusercontent.com/rgap/Ecommerce-G15-ImageRepository/main/images/polo-azul-claro-ripcurl.jpg",
      material: "Composición: 80% algodón, 20% poliéster. Ideal para confort diario.",
      care: "Lavado a máquina con colores similares. No usar cloro. Secar al aire libre.",
      slug: "polo-ripcurl-azul-claro",
      createdAt: "2024-05-18T14:54:17.185Z",
      updatedAt: "2024-05-18T14:54:17.185Z",
      availableColors: [
        {
          name: "turquesa",
          hexCode: "#40E0D0",
        },
        {
          name: "indigo",
          hexCode: "#4B0082",
        },
        {
          name: "gris",
          hexCode: "#808080",
        },
      ],
      minimumPrice: 47,
    },
    {
      id: 8,
      title: "Polo Ripcurl Guinda",
      description: "El Polo Ripcurl en tono guinda combina comodidad y elegancia, ideal para un estilo sofisticado en cualquier ocasión.",
      shortDescription: "Elegante y Cómodo",
      mainImage: "https://raw.githubusercontent.com/rgap/Ecommerce-G15-ImageRepository/main/images/polo-guinda-ripcurl.jpg",
      material: "Tela suave y resistente, 60% algodón y 40% poliéster, para un uso prolongado.",
      care: "Lavar a mano en agua fría. No exprimir. Secar a la sombra para mantener el color.",
      slug: "polo-ripcurl-guinda",
      createdAt: "2024-05-18T14:54:17.185Z",
      updatedAt: "2024-05-18T14:54:17.185Z",
      availableColors: [
        {
          name: "guinda",
          hexCode: "#800000",
        },
        {
          name: "negro",
          hexCode: "#000000",
        },
        {
          name: "crema",
          hexCode: "#FFFDD0",
        },
      ],
      minimumPrice: 49,
    },
    {
      id: 9,
      title: "Polo Volcom Negro",
      description: "Polo Volcom en color negro, un básico indispensable con un diseño moderno y materiales de calidad superior.",
      shortDescription: "Moderno y Versátil",
      mainImage: "https://raw.githubusercontent.com/rgap/Ecommerce-G15-ImageRepository/main/images/polo-negro-volcom.jpg",
      material: "Hecho con 100% algodón orgánico, suave al tacto y amigable con el medio ambiente.",
      care: "Lavar a máquina con colores similares, agua fría. No usar secadora. Planchar a temperatura baja.",
      slug: "polo-volcom-negro",
      createdAt: "2024-05-18T14:54:17.185Z",
      updatedAt: "2024-05-18T14:54:17.185Z",
      availableColors: [
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
      minimumPrice: 40,
    },
    {
      id: 10,
      title: "Polo Adidas Morado",
      description: "Con un diseño único y moderno, este polo morado de Adidas es perfecto para cualquier ocasión, combinando estilo y confort.",
      shortDescription: "Estilo Único y Fresco",
      mainImage: "https://raw.githubusercontent.com/rgap/Ecommerce-G15-ImageRepository/main/images/polo-morado-adidas.jpg",
      material: "Fabricado con una mezcla perfecta de algodón (60%) y poliéster (40%), garantizando comodidad y resistencia.",
      care: "Recomendable lavar a máquina en programa delicado. No usar secadora. Planchar a baja temperatura.",
      slug: "polo-adidas-morado",
      createdAt: "2024-05-18T14:54:17.185Z",
      updatedAt: "2024-05-18T14:54:17.185Z",
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
          name: "turquesa",
          hexCode: "#40E0D0",
        },
      ],
      minimumPrice: 47,
    },
    {
      id: 11,
      title: "Polo Nike Gris Naranja",
      description:
        "Este polo gris con naranja de Nike es la combinación perfecta de estilo y comodidad, ideal para el uso diario y ocasiones casuales.",
      shortDescription: "Cómodo y Estilizado",
      mainImage: "https://raw.githubusercontent.com/rgap/Ecommerce-G15-ImageRepository/main/images/polo-melange-nike.jpg",
      material: "Hecho con un 80% de algodón y 20% poliéster, ofrece confort y durabilidad en su uso diario.",
      care: "Lavar en máquina en programa para prendas delicadas, secar colgado, no usar blanqueador.",
      slug: "polo-nike-gris-naranja",
      createdAt: "2024-05-18T14:54:17.185Z",
      updatedAt: "2024-05-18T14:54:17.185Z",
      availableColors: [
        {
          name: "gris",
          hexCode: "#808080",
        },
        {
          name: "negro",
          hexCode: "#000000",
        },
        {
          name: "blanco",
          hexCode: "#FFFFFF",
        },
      ],
      minimumPrice: 48,
    },
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
      createdAt: "2024-05-18T14:54:17.185Z",
      updatedAt: "2024-05-18T14:54:17.185Z",
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
      createdAt: "2024-05-18T14:54:17.185Z",
      updatedAt: "2024-05-18T14:54:17.185Z",
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
      createdAt: "2024-05-18T14:54:17.185Z",
      updatedAt: "2024-05-18T14:54:17.185Z",
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
      createdAt: "2024-05-18T14:54:17.185Z",
      updatedAt: "2024-05-18T14:54:17.185Z",
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
    {
      id: 16,
      title: "Polo Volcom Gris",
      description: "El Polo Volcom Gris ofrece un estilo atemporal con su diseño minimalista. Ideal para combinar con cualquier atuendo.",
      shortDescription: "Estilo Minimalista",
      mainImage: "https://raw.githubusercontent.com/rgap/Ecommerce-G15-ImageRepository/main/images/polo-gris-volcom.png",
      material: "Fabricado con tejido premium de 100% algodón para máxima comodidad y durabilidad.",
      care: "Lavar a máquina en frío. No usar cloro. Secar al aire libre. No planchar sobre el estampado. Lavar colores oscuros por separado.",
      slug: "polo-volcom-gris",
      createdAt: "2024-05-18T14:54:17.185Z",
      updatedAt: "2024-05-18T14:54:17.185Z",
      availableColors: [
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
      minimumPrice: 48,
    },
    {
      id: 17,
      title: "Polo Nike Gris",
      description: "Elegante polo gris Nike, con diseño moderno y material de alta calidad. Ideal para el día a día o para hacer deporte.",
      shortDescription: "Elegante y Moderno",
      mainImage: "https://raw.githubusercontent.com/rgap/Ecommerce-G15-ImageRepository/main/images/polo-gris-nike.jpg",
      material: "Fabricado con 80% algodón y 20% poliéster, garantiza comodidad y resistencia a largo plazo.",
      care: "Lavado en máquina con agua tibia. No usar cloro. Secar colgado en sombra. No planchar sobre estampado.",
      slug: "polo-nike-gris",
      createdAt: "2024-05-18T14:54:17.185Z",
      updatedAt: "2024-05-18T14:54:17.185Z",
      availableColors: [
        {
          name: "gris",
          hexCode: "#808080",
        },
        {
          name: "negro",
          hexCode: "#000000",
        },
        {
          name: "blanco",
          hexCode: "#FFFFFF",
        },
      ],
      minimumPrice: 49,
    },
    {
      id: 18,
      title: "Polo Adidas Rojo",
      description: "Polo rojo vibrante de Adidas, perfecto para un look llamativo. Confortable y versátil para cualquier ocasión.",
      shortDescription: "Vibrante y Confortable",
      mainImage: "https://raw.githubusercontent.com/rgap/Ecommerce-G15-ImageRepository/main/images/polo-rojo-adidas.jpg",
      material: "Tejido suave y resistente, 60% algodón y 40% poliéster, ideal para uso frecuente.",
      care: "Lavado suave a máquina en frío. No usar lejía. Secar en plano. Planchar a temperatura media si es necesario.",
      slug: "polo-adidas-rojo",
      createdAt: "2024-05-18T14:54:17.185Z",
      updatedAt: "2024-05-18T14:54:17.185Z",
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
      id: 19,
      title: "Polo Quiksilver Verde Pasto",
      description: "Este polo Quiksilver en tono verde pasto combina estilo y sostenibilidad. Ideal para un look casual y relajado.",
      shortDescription: "Estilo Sustentable",
      mainImage: "https://raw.githubusercontent.com/rgap/Ecommerce-G15-ImageRepository/main/images/polo-verdepasto-quiksilver.jpg",
      material: "Confeccionado en 100% algodón orgánico, ofrece una textura suave y amigable con el ambiente.",
      care: "Lavar a mano con agua fría. No usar secadora. No blanquear. Planchar a baja temperatura si es necesario.",
      slug: "polo-quiksilver-verde-pasto",
      createdAt: "2024-05-18T14:54:17.185Z",
      updatedAt: "2024-05-18T14:54:17.185Z",
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
      minimumPrice: 46,
    },
    {
      id: 20,
      title: "Polo Quiksilver Jaspeado Rojo",
      description: "El polo Quiksilver jaspeado rojo combina estilo y comodidad. Ideal para un look casual y deportivo.",
      shortDescription: "Estilo Casual Jaspeado",
      mainImage: "https://raw.githubusercontent.com/rgap/Ecommerce-G15-ImageRepository/main/images/polo-rojojaspeado-quiksilver.jpg",
      material: "Material resistente, 70% algodón, 30% poliéster, perfecto para el uso diario y actividades al aire libre.",
      care: "Lavado a máquina en ciclo suave. No usar cloro. Secado en tendedero. Planchado a temperatura baja.",
      slug: "polo-quiksilver-jaspeado-rojo",
      createdAt: "2024-05-18T14:54:17.185Z",
      updatedAt: "2024-05-18T14:54:17.185Z",
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
      minimumPrice: 49,
    },
    {
      id: 21,
      title: "Polo Ripcurl Verde Suave",
      description: "Polo Ripcurl de tono verde suave, perfecto para cualquier ocasión. Cómodo, duradero y fácil de combinar.",
      shortDescription: "Confort y Estilo Diario",
      mainImage: "https://raw.githubusercontent.com/rgap/Ecommerce-G15-ImageRepository/main/images/polo-verdesuave-ripcurl.jpg",
      material: "Confeccionado con 80% algodón orgánico y 20% poliéster reciclado para mayor comodidad y durabilidad.",
      care: "Lavar en agua fría. No usar blanqueador. Secar a la sombra. Planchar a temperatura moderada.",
      slug: "polo-ripcurl-verde-suave",
      createdAt: "2024-05-18T14:54:17.185Z",
      updatedAt: "2024-05-18T14:54:17.185Z",
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
      minimumPrice: 50,
    },
    {
      id: 22,
      title: "Polo Billabong Rojo Clásico",
      description: "Este polo Billabong en rojo clásico combina estilo y comodidad, perfecto para un look casual.",
      shortDescription: "Estilo Rojo Billabong",
      mainImage: "https://raw.githubusercontent.com/rgap/Ecommerce-G15-ImageRepository/main/images/polo-rojo-billabong2.jpg",
      material: "Tejido de alta calidad, 85% algodón y 15% poliéster, ideal para comodidad y durabilidad.",
      care: "Lavar en ciclo suave con agua fría. No usar secadora. Planchar a baja temperatura si es necesario.",
      slug: "polo-billabong-rojo-clasico",
      createdAt: "2024-05-18T14:54:17.185Z",
      updatedAt: "2024-05-18T14:54:17.185Z",
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
  ],
};
