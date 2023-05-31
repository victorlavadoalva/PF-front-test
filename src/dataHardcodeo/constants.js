import chicken from "../Img/ImgCardLanding/Chicken.png";
import pasta from "../Img/ImgCardLanding/Pasta.png";
import sandwich from "../Img/ImgCardLanding/Sandwich.png";
import burger from "../Img/ImgCardLanding/hamburger.png";
import pizza from "../Img/ImgCardLanding/pizza.png";

export const RESTOS = [
  {
    id: 5,
    name: "Central",
    ubic: "Lima, Peru",
    dire: "Jirón Dos de Mayo 253, Barranco",
    summary:
      "El restaurante insignia de los chefs Virgilio Martínez y Pía León es un santuario de todo lo peruano. Combinando una hospitalidad impecable, un vasto conocimiento de los productos latinoamericanos y una creatividad sin igual en la cocina, esta oda gastronómica a Perú es el merecido ganador de Mejor Restaurante de Latinoamérica 2022, patrocinado por S.Pellegrino & Acqua Panna, título que ya había obtenido anteriormente desde 2014 hasta 2016.",
    especial:
      "La última versión del menú de Central incluye ingredientes que rara vez se encuentran en otro lugar del mundo. Después de viajar extensamente por todo el país, Martínez y León presentan solo lo mejor de los tesoros culinarios de Perú. El menú de degustación, llamado Mundo Mater, incluye clásicos como Tierra de Maíz y Tallos Extremos, y también introduce nuevos platos, como Rocas Negras (con algas, almejas y calamares), Conexión Amazónica (con cecina, arapaima y yuca) y Océano Azul-Verde (una combinación de vieiras y pepino).",
    // image: [
    //   require("./img/ejemplo1.jpg").default,
    //   require("./img/ejemplo2.jpg").default,
    //   require("./img/ejemplo3.jpg").default,
    // ],
    //Usar esta data en casos de prueba
    image:require("./img/ejemplo1.jpg").default
  },
  {
    id: 6,
    name: "Don Julio",
    ubic: "Buenos Aires, Argentina",
    dire: "Guatemala 4691 (esquina Gurruchaga), Palermo Viejo",
    summary:
      " Don Julio comenzó como una parrilla de barrio en una propiedad de esquina del siglo XIX, hoy en día el restaurante familiar ha elevado realmente el nivel a través de su compromiso con la cría regenerativa de ganado argentino, una bodega de 60.000 botellas que abarca la historia del vino argentino y una dedicación inigualable a la agricultura orgánica.",
    especial:
      "Comenzando con la cremosa provoleta de queso de cabra y mollejas antes de pasar a las principales atracciones de carne acompañadas de espárragos a la parrilla orgánicos o tomates de variedades antiguas. Los cortes especiales provenientes de ganado Aberdeen Angus y Hereford criados de forma regenerativa incluyen asado de tira y entraña.",
    image: [
      require("./img/ejemplo1.jpg").default,
      require("./img/ejemplo2.jpg").default,
      require("./img/ejemplo3.jpg").default,
    ],
  },
  {
    id: 7,
    name: "Maido",
    ubic: "Lima, Peru",
    dire: "Calle San Martin 399, Miraflores",
    summary:
      ' ¡"Maido!" - ese es el alegre y atemporal saludo unánime de los chefs que da la bienvenida a los comensales cuando ingresan al restaurante en el primer piso en el moderno barrio de Miraflores. Aquellos con limitaciones de tiempo deben pedir en el mostrador de sushi, pero el menú de degustación ofrece toda la amplitud del concepto de Tsumura: Experiencia Nikkei. Los techos altos están enmarcados por una instalación artística de cuerdas que replica la bandera japonesa, creando intimidad pero también una sensación de movimiento que refleja la actividad en la cocina.',
    especial:
      " Después de haber recibido una valiosa formación en Osaka, Tsumura aplica sus conocimientos al nigiri a lo pobre y al toro con ponzu amazónico, que son fortalezas particulares en Maido. Algo nuevo en el menú de Experiencia Nikkei es el atún ventresca de Tarragona, que se despliega en una carretilla y luego se corta, se prepara y se dora con un soplete junto a la mesa.",
    image: [
      require("./img/ejemplo1.jpg").default,
      require("./img/ejemplo2.jpg").default,
      require("./img/ejemplo3.jpg").default,
    ],
  },
  {
    id: 8,
    name: "A Casa do Porco",
    ubic: "Sao Paulo, Brasil",
    dire: "Av. São Luiz 140, 4º andar, República",
    summary:
      "La visión de los chefs Jefferson y Janaína Rueda, A Casa do Porco, es el paraíso para los amantes de la carne, destacando el cerdo, el fuego y todo lo relacionado con la carnicería. Significando Casa del Cerdo en portugués, es una verdadera peregrinación porcina. Además, A Casa do Porco recibe el título de Mejor Restaurante de Brasil 2022, donde también se orgullece de obtener toda su carne.",
    especial:
      "El extenso menú se divide en platos a la carta y el menú de degustación Da Roça para o Centro, que representa un recorrido culinario por el campo brasileño. Prueba el sushi de papada de cerdo, las croquetas de cerdo o la panceta de cerdo que se derrite en la boca con su piel de panceta crujiente. Para equilibrar la extravagancia umami, también hay ensaladas, platos de huevo, pasta y opciones de arroz.",
    image: [
      require("./img/ejemplo1.jpg").default,
      require("./img/ejemplo2.jpg").default,
      require("./img/ejemplo3.jpg").default,
    ],
  },
  {
    id: 9,
    name: "El Chato",
    ubic: "Bogotá, Colombia",
    dire: "Calle 65 # 4-76",
    summary:
      "Nacido y criado en Colombia, el chef Álvaro Clavijo se sintió atraído por la cocina desde una edad temprana. Dejó Sudamérica para explorar Estados Unidos y Europa, trabajando en Per Se, L Atelier de Joël Robuchon y Noma. Clavijo fusiona esta experiencia de trotamundos con la rica biodiversidad de Colombia en El Chato, que lanzó en 2017.",
    especial:
      "Aquí solo se ofrece un menú degustación, listo para cambiar en cualquier momento para resaltar los mejores productos disponibles en cada día. Platos clásicos como corazones de pollo con papa y suero costeño, una salsa tradicional colombiana y quesosa, son imprescindibles, aunque los locales conocedores siempre solicitarán el renombrado soufflé de aguacate que no está en el menú.",
    image: [
      require("./img/ejemplo1.jpg").default,
      require("./img/ejemplo2.jpg").default,
      require("./img/ejemplo3.jpg").default,
    ],
  },
  {
    id: 10,
    name: "Maito",
    ubic: "Ciudad de Panamá, Panamá.",
    dire: "Final de la Calle 50, cuarto local a la izquierda",
    summary:
      "En Maito, los comensales pueden disfrutar de los contrastes de la cocina panameña, con toques de origen afro, criollo y cantonés mezclados con nuevas cocinas como Chombasia, una fusión de las tradiciones culinarias cantonesa y afro.",
    especial:
      "Maito ofrece un menú degustación que puede constar de nueve a once platos, junto con opciones a la carta que presentan ingredientes raramente utilizados en otros lugares de la ciudad. Esto se debe a las relaciones que Castrellón ha establecido con productores locales, a quienes destaca en el restaurante. Su amor por el mar y los productos tropicales, justificado por la doble costa de Panamá, se refleja en todos los platos.",
    image: [
      require("./img/ejemplo1.jpg").default,
      require("./img/ejemplo2.jpg").default,
      require("./img/ejemplo3.jpg").default,
    ],
  },
  {
    id: 15,
    name: "Central",
    ubic: "Lima, Peru",
    dire: "Jirón Dos de Mayo 253, Barranco",
    summary:
      "El restaurante insignia de los chefs Virgilio Martínez y Pía León es un santuario de todo lo peruano. Combinando una hospitalidad impecable, un vasto conocimiento de los productos latinoamericanos y una creatividad sin igual en la cocina, esta oda gastronómica a Perú es el merecido ganador de Mejor Restaurante de Latinoamérica 2022, patrocinado por S.Pellegrino & Acqua Panna, título que ya había obtenido anteriormente desde 2014 hasta 2016.",
    especial:
      "La última versión del menú de Central incluye ingredientes que rara vez se encuentran en otro lugar del mundo. Después de viajar extensamente por todo el país, Martínez y León presentan solo lo mejor de los tesoros culinarios de Perú. El menú de degustación, llamado Mundo Mater, incluye clásicos como Tierra de Maíz y Tallos Extremos, y también introduce nuevos platos, como Rocas Negras (con algas, almejas y calamares), Conexión Amazónica (con cecina, arapaima y yuca) y Océano Azul-Verde (una combinación de vieiras y pepino).",
    image: [
      require("./img/ejemplo1.jpg").default,
      require("./img/ejemplo2.jpg").default,
      require("./img/ejemplo3.jpg").default,
    ],
  },
  {
    id: 16,
    name: "Don Julio",
    ubic: "Buenos Aires, Argentina",
    dire: "Guatemala 4691 (esquina Gurruchaga), Palermo Viejo",
    summary:
      " Don Julio comenzó como una parrilla de barrio en una propiedad de esquina del siglo XIX, hoy en día el restaurante familiar ha elevado realmente el nivel a través de su compromiso con la cría regenerativa de ganado argentino, una bodega de 60.000 botellas que abarca la historia del vino argentino y una dedicación inigualable a la agricultura orgánica.",
    especial:
      "Comenzando con la cremosa provoleta de queso de cabra y mollejas antes de pasar a las principales atracciones de carne acompañadas de espárragos a la parrilla orgánicos o tomates de variedades antiguas. Los cortes especiales provenientes de ganado Aberdeen Angus y Hereford criados de forma regenerativa incluyen asado de tira y entraña.",
    image: [
      require("./img/ejemplo1.jpg").default,
      require("./img/ejemplo2.jpg").default,
      require("./img/ejemplo3.jpg").default,
    ],
  },
  {
    id: 17,
    name: "Maido",
    ubic: "Lima, Peru",
    dire: "Calle San Martin 399, Miraflores",
    summary:
      ' ¡"Maido!" - ese es el alegre y atemporal saludo unánime de los chefs que da la bienvenida a los comensales cuando ingresan al restaurante en el primer piso en el moderno barrio de Miraflores. Aquellos con limitaciones de tiempo deben pedir en el mostrador de sushi, pero el menú de degustación ofrece toda la amplitud del concepto de Tsumura: Experiencia Nikkei. Los techos altos están enmarcados por una instalación artística de cuerdas que replica la bandera japonesa, creando intimidad pero también una sensación de movimiento que refleja la actividad en la cocina.',
    especial:
      " Después de haber recibido una valiosa formación en Osaka, Tsumura aplica sus conocimientos al nigiri a lo pobre y al toro con ponzu amazónico, que son fortalezas particulares en Maido. Algo nuevo en el menú de Experiencia Nikkei es el atún ventresca de Tarragona, que se despliega en una carretilla y luego se corta, se prepara y se dora con un soplete junto a la mesa.",
    image: [
      require("./img/ejemplo1.jpg").default,
      require("./img/ejemplo2.jpg").default,
      require("./img/ejemplo3.jpg").default,
    ],
  },
  {
    id: 18,
    name: "A Casa do Porco",
    ubic: "Sao Paulo, Brasil",
    dire: "Av. São Luiz 140, 4º andar, República",
    summary:
      "La visión de los chefs Jefferson y Janaína Rueda, A Casa do Porco, es el paraíso para los amantes de la carne, destacando el cerdo, el fuego y todo lo relacionado con la carnicería. Significando Casa del Cerdo en portugués, es una verdadera peregrinación porcina. Además, A Casa do Porco recibe el título de Mejor Restaurante de Brasil 2022, donde también se orgullece de obtener toda su carne.",
    especial:
      "El extenso menú se divide en platos a la carta y el menú de degustación Da Roça para o Centro, que representa un recorrido culinario por el campo brasileño. Prueba el sushi de papada de cerdo, las croquetas de cerdo o la panceta de cerdo que se derrite en la boca con su piel de panceta crujiente. Para equilibrar la extravagancia umami, también hay ensaladas, platos de huevo, pasta y opciones de arroz.",
    image: [
      require("./img/ejemplo1.jpg").default,
      require("./img/ejemplo2.jpg").default,
      require("./img/ejemplo3.jpg").default,
    ],
  },
];
export const LOCATION = [
  {
    id: 1,
    name: "Bs As",
  },
  {
    id: 2,
    name: "Córdoba",
  },
  {
    id: 3,
    name: "La Pampa",
  },
  {
    id: 4,
    name: "San Luis",
  },
];

export const ORDER = [
  {
    id: "alphaasc",
    name: "A - Z",
  },
  {
    id: "alphadesc",
    name: "Z - A",
  },
];

export const RATING = [
  {
    id: "ratingasc",
    name: "Menor a Mayor",
  },
  {
    id: "ratingdesc",
    name: "Mayor a Menor",
  },
];

export const TAGS = [
  {
    id: "internacional",
    name: "Internacional",
  },
  {
    id: "veggie",
    name: "Veggie",
  },
  {
    id: "vegan",
    name: "Vegan",
  },
  {
    id: "celiaco",
    name: "Celiaco",
  },
  {
    id: "parrilla",
    name: "Parrilla",
  },
  {
    id: "tematicas",
    name: "Temáticas",
  },
  {
    id: "otros",
    name: "Otros",
  },
];

export const props = [
  {
    id: 1,
    image: pizza,
    name: "Pizza",
  },
  {
    id: 2,
    image: burger,
    name: "Burger",
  },
  {
    id: 3,
    image: sandwich,
    name: "Sandwich",
  },
  {
    id: 4,
    image: chicken,
    name: "Chicken",
  },
  {
    id: 5,
    image: pasta,
    name: "Pasta",
  },
];

export const dataImg = [
  {
    id: 1,
    alt: "Burger",
  },
  {
    id: 2,
    alt: "Pizza",
  },
  {
    id: 3,
    alt: "Sandwich",
  },
];

export const IMAGE_NOT_FOUND =
  "https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-1-scaled.png";

export const FOOD = [
  {
    _id: 1,
    name: "Milanesa",
    description:
      "La milanesa es un filete, normalmente de carne vacuna, que se cocina frito o al horno. Por extensión, se llama milanesa a cualquier rebanada de un ingrediente rebozado y cocido de manera similar, por lo que existen milanesas de cerdo, de pollo, de pescado, de soja, de berenjena o de mozzarella, entre otros ingredientes",
    image: [require("./img/milanesa.jpeg").default],
    tags: ["Vegetariana", "Apto celiacos"],
    ingredients: "Ingredientes secretos",
    original: true,
    cost: 127,
    rating: [2, 3],
    isActive: true,
  },
  {
    _id: 2,
    name: "Pure",
    description: "Que rico",
    image: [require("./img/milanesa.jpeg").default],
    tags: ["Vegetariana", "Apto celiacos"],
    ingredients: "Ingredientes secretos",
    original: true,
    cost: 100,
    isActive: true,
    rating: [2, 3],
  },
  {
    _id: 3,
    name: "fideos",
    description: "fideos con manteca",
    image: [require("./img/milanesa.jpeg").default],
    tags: ["Vegetariana", "Apto celiacos"],
    ingredients: "Ingredientes secretos",
    original: true,
    isActive: true,
    cost: 127,
    rating: [2, 3],
  },
  {
    _id: 4,
    name: "Milanesa",
    isActive: true,
    description:
      "La milanesa es un filete, normalmente de carne vacuna, que se cocina frito o al horno. Por extensión, se llama milanesa a cualquier rebanada de un ingrediente rebozado y cocido de manera similar, por lo que existen milanesas de cerdo, de pollo, de pescado, de soja, de berenjena o de mozzarella, entre otros ingredientes",
    image: [require("./img/milanesa.jpeg").default],
    tags: ["Vegetariana", "Apto celiacos"],
    ingredients: "Ingredientes secretos",
    original: true,
    cost: 127,
    rating: [2, 3],
  },
  {
    _id: 5,
    name: "Pure",
    isActive: true,
    description: "Que rico",
    image: [require("./img/milanesa.jpeg").default],
    tags: ["Vegetariana", "Apto celiacos"],
    ingredients: "Ingredientes secretos",
    original: true,
    cost: 100,
    rating: [2, 3],
  },
  {
    _id: 6,
    isActive: true,
    name: "fideos",
    description: "fideos con manteca",
    image: [require("./img/milanesa.jpeg").default],
    tags: ["Vegetariana", "Apto celiacos"],
    ingredients: "Ingredientes secretos",
    original: true,
    cost: 127,
    rating: [2, 3],
  },
];

export const reservasColumns = [
  { field: "id", headerName: "Reserva N°", width: 90 },
  {
    field: "name",
    headerName: "Nombre",
    width: 200,
    editable: true,
  },
  {
    field: "day",
    headerName: "Dia",
    type: "string",
    width: 150,
    editable: true,
  },
  {
    field: "hour",
    headerName: "Hora",
    type: "string",
    width: 80,
    editable: true,
  },
  {
    field: "quanty",
    headerName: "Comensales",
    type: "string",
    width: 110,
    editable: true,
  },
  {
    field: "phone",
    headerName: "Telefono",
    type: "string",
    width: 150,
    editable: true,
  },
];

export const reservasRows = [
  {
    id: 1,
    name: "Snow",
    day: "26/04",
    hour: "20:45",
    quanty: 4,
    phone: 36546545,
  },
  {
    id: 2,
    name: "Lannister",
    day: "26/04",
    hour: "20:45",
    quanty: 2,
    phone: 4564564564,
  },
  {
    id: 3,
    name: "Lannister",
    day: "26/04",
    hour: "20:45",
    quanty: 3,
    phone: 3123123145,
  },
  {
    id: 4,
    name: "Stark",
    day: "26/04",
    hour: "20:45",
    quanty: 5,
    phone: 1746743536,
  },
  {
    id: 5,
    name: "Targaryen",
    day: "26/04",
    hour: "20:45",
    quanty: 4,
    phone: 65465654,
  },
  {
    id: 6,
    name: "Melisandre",
    day: "26/04",
    hour: "20:45",
    quanty: 8,
    phone: 8798463541,
  },
  {
    id: 7,
    name: "Clifford",
    day: "26/04",
    hour: "20:45",
    quanty: 4,
    phone: 654321354,
  },
  {
    id: 8,
    name: "Frances",
    day: "26/04",
    hour: "20:45",
    quanty: 2,
    phone: 68576524163,
  },
  {
    id: 9,
    name: "Roxie",
    day: "26/04",
    hour: "20:45",
    quanty: 6,
    phone: 65432132416,
  },
];

export const pedidosColumns = [
  { field: "id", headerName: "Pedido N°", width: 90 },
  {
    field: "name",
    headerName: "Nombre",
    width: 150,
    editable: true,
  },
  {
    field: "adress",
    headerName: "Direccion",
    width: 300,
    editable: true,
  },
  {
    field: "phone",
    headerName: "Telefono",
    type: "string",
    width: 110,
    editable: true,
  },
  {
    field: "plate",
    headerName: "Plato",
    type: "objct",
    width: 300,
    editable: true,
  },
  {
    field: "status",
    headerName: "Pagado",
    type: "boolean",
    width: 200,
    editable: true,
  },
];

export const pedidosRows = [
  {
    id: 1,
    name: "Snow",
    adress: "Av. San Martin 456",
    phone: 65465465,
    plate: ["Milanesas con papas"],
    status: true,
  },
  {
    id: 2,
    name: "Lannister",
    adress: "9 de Julio 789",
    phone: 45646546,
    plate: ["Milanesas con papas"],
    status: true,
  },
  {
    id: 3,
    name: "Lannister",
    adress: "25 de Mayo 452",
    phone: 2664498465,
    plate: ["Milanesas con papas"],
    status: false,
  },
  {
    id: 4,
    name: "Stark",
    adress: "Mendoza 963",
    phone: 35265465,
    plate: ["Milanesas con papas"],
    status: true,
  },
  {
    id: 5,
    name: "Targaryen",
    adress: "Los Treboles 852",
    phone: 798798,
    plate: ["Milanesas con papas"],
    status: false,
  },
  {
    id: 6,
    name: "Melisandre",
    adress: "Calle s/n 369",
    phone: 156546540,
    plate: ["Milanesas con papas"],
    status: true,
  },
  {
    id: 7,
    name: "Clifford",
    adress: "La Pamapa 456",
    phone: 46465464,
    plate: ["Milanesas con papas"],
    status: false,
  },
  {
    id: 8,
    name: "Frances",
    adress: "Belgrano 1938",
    phone: 87985465,
    plate: ["Milanesas con papas"],
    status: false,
  },
  {
    id: 9,
    name: "Roxie",
    adress: "25 de Agost0 333",
    phone: 968765463,
    plate: ["Milanesas con papas"],
    status: false,
  },
];

export const pedidosClienteColumns = [
  {
    field: "day",
    headerName: "Fecha",
    type: "string",
    width: 100,
    // editable: true,
  },
  { field: "id", headerName: "Pedido N°", width: 90 },
  {
    field: "name",
    headerName: "Restaurant",
    width: 200,
    // editable: true,
  },
  {
    field: "plate",
    headerName: "Plato",
    type: "objct",
    width: 200,
    // editable: true,
  },
  {
    field: "status",
    headerName: "Pagado",
    type: "boolean",
    width: 90,
    // editable: true,
  },
];

export const pedidosClienteRows = [
  {
    id: 1,
    day: "25/03/2023",
    name: "ItItaly",
    plate: ["Ñoquis con salsa boloñesa"],
    status: true,
  },
  {
    id: 2,
    day: "05/04/2023",
    name: "SushiClub",
    plate: ["Combinado 30p"],
    status: true,
  },
  {
    id: 3,
    day: "15/05/2023",
    name: "El Club de la Milanesa",
    plate: ["Milanesas con papas"],
    status: true,
  },
  {
    id: 4,
    day: "25/05/2023",
    name: "ItItaly",
    plate: ["Lasaña"],
    status: false,
  },
];

export const reservasClienteColumns = [
  { field: "id", headerName: "Reserva N°", width: 90 },
  {
    field: "name",
    headerName: "Restaurant",
    width: 200,
  },
  {
    field: "day",
    headerName: "Dia",
    type: "string",
    width: 100,
  },
  {
    field: "hour",
    headerName: "Hora",
    type: "string",
    width: 80,
  },
  {
    field: "quanty",
    headerName: "Comensales",
    type: "string",
    width: 90,
  },
];

export const reservasClienteRows = [
  {
    id: 1,
    name: "SushiClub",
    day: "26/04/2023",
    hour: "20:45",
    quanty: 4,
  },
  {
    id: 2,
    name: "ItItaly",
    day: "05/05/2023",
    hour: "20:45",
    quanty: 2,
  },
  {
    id: 3,
    name: "El Club de la Milanesa",
    day: "24/05/2023",
    hour: "20:45",
    quanty: 3,
  },
];
