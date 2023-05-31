import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export default function RutasCliente() {
  
  const navigate = useNavigate();
  const redirection = "/home";
  const dataUser = window.localStorage.getItem("UserLogVerificate");
  const restaurant = JSON.parse(dataUser);
  const [shouldRedirect, setShouldRedirect] = useState(false);
  const { type_customer } = restaurant;

  useEffect(() => {
    if (type_customer !== "Cliente") {
      setShouldRedirect(true);
    }
  }, [dataUser]);

  if (shouldRedirect) {
    alert("Inicia sesion para acceder a esta ruta");
    navigate(redirection);
    return null; // Evitar que se muestre la ruta antes de redirigir
  }
  return <Outlet />;
}
