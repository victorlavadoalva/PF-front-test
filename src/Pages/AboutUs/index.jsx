import React from 'react';
import Typography from '@mui/material/Typography';

export default function AboutUs() {
  return (
    <div>
      <Typography variant="h3" component="h3">
        ¿Qué es FoodBook?
      </Typography>
      <Typography variant="body1" component="p">
        La app de restaurante es una herramienta innovadora que conecta a los comensales con los restaurantes de manera efectiva. Funciona como una plataforma de gestión para los restaurantes, brindándoles una amplia gama de herramientas para la administración de su negocio.
      </Typography>

      <Typography variant="h3" component="h3">
        Beneficios para los comensales
      </Typography>
      <Typography variant="body1" component="p">
        FoodBook ofrece a los comensales la posibilidad de reservar su mesa desde la comodidad de su hogar, realizar pedidos desde la mesa o su hogar y pagar en línea. Esto agiliza el proceso de ordenar comida y brinda una experiencia más conveniente y satisfactoria para los clientes.
      </Typography>

      <Typography variant="h3" component="h3">
        Beneficios para los restaurantes
      </Typography>
      <Typography variant="body1" component="p">
        Los restaurantes que utilizan FoodBook pueden aprovechar una variedad de herramientas de gestión, lo que les permite administrar eficientemente su negocio. Pueden gestionar reservas, administrar menús y platos, recibir pedidos en línea y llevar un seguimiento de las transacciones financieras. Esto les ayuda a optimizar sus operaciones y brindar un mejor servicio a sus clientes.
      </Typography>

      <Typography variant="h3" component="h3">
        Tecnologías utilizadas
      </Typography>
      <Typography variant="body1" component="p">
        FoodBook se desarrolló utilizando una combinación de tecnologías modernas, como JavaScript (JS), React, Redux, Material-UI (Mui) y MongoDB. Estas tecnologías permiten crear una aplicación web eficiente y fácil de usar.
      </Typography>
    </div>
  );
}
