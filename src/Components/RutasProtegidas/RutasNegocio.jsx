import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

export default function RutaRestaurant() {
  const navigate = useNavigate();
  const redirection = "/";
  const [shouldRedirect, setShouldRedirect] = useState(false);
  let type_customer = "";

  useEffect(() => {
    const dataUser = window.localStorage.getItem("UserLogVerificate");
    if (dataUser) {
      const restaurant = JSON.parse(dataUser);
      type_customer = restaurant.type_customer;

      if (type_customer !== "Restaurante" || !type_customer) {
        setShouldRedirect(true);
      }
    } else {
      setShouldRedirect(true);
    }
  }, []);

  if (shouldRedirect) {
    navigate(redirection);
    return null; // Evitar que se muestre la ruta antes de redirigir
  } else {
    return <Outlet />;
  }
}
