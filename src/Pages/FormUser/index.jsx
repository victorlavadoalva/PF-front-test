import { useState } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
import { TextField, Box, Button, Container } from "@mui/material";


export default function FormUser() {
  const [user, setUser] = useState({
    city: "",
    address: "",
    country: "",
    type_customer: "User",
  });

  const [errors, setErrors] = useState({
    city: "",
    country: "",
    address: "",
  });


  function handleSubmit(event) {
    event.preventDefault();
    if ( user.city && user.country && user.address ) {
      const formData = new FormData();
      formData.append("city", user.city);
      formData.append("address", user.address);
      formData.append("country", user.country);
      formData.append("type_customer", user.type_customer);
      axios.post("https://pf-backend-production-83a4.up.railway.app/users", formData)
        .then((response) => {
          console.log('Datos enviados:', formData);
          console.log('Respuesta del servidor:', response.data);
          alert('Usuario creado');
          setErrors({});
          setUser({
            city: "",
            country: "",
            address: "",
            type_customer: "User",
          });
          localStorage.setItem("UserLogVerificate", JSON.stringify(response.data));
          window.localStorage.setItem("IsLogin", true);
        })
        .catch((error) => {
          console.log(error)
          alert('Error al crear el usuario');
        });
    } else {
      alert('Información incompleta!');
    }
    console.log(user)
  };

  function handleChange(e) {
    const { name, value } = e.target;
    if (name !== "tags") {
      setUser({
        ...user,
        [name]: value
      })
    };
    console.log(user)


    switch (name) {
      case 'city':
        validateCity(value);
        break;
      case 'address':
        validateAddress(value);
        break;
      case 'country':
        validateCountry(value);
        break;
      default:
        break;
    }

  };


  const validateCity = (city) => {
    if (!/^[\p{L}\s.,;()']+$/u.test(city)) {
      setErrors({ ...errors, city: 'Ciudad inválida' });
    } else {
      setErrors({ ...errors, city: '' });
    }
  };

  const validateAddress = (address) => {
    if (!/^[\p{L}\d\s.,;()']+$/u.test(address)) {
      setErrors({ ...errors, address: 'Dirección inválida' });
    } else {
      setErrors({ ...errors, address: '' });
    }
  };

  const validateCountry = (country) => {
    if (!/^[\p{L}\s.,;()']+$/u.test(country)) {
      setErrors({ ...errors, country: 'País inválido' });
    } else {
      setErrors({ ...errors, country: '' });
    }
  };

  function isFormValid() {
    return (
      errors.city === '' &&
      errors.country === '' &&
      errors.address === '' 
    );
  }

  return (
    <>
      <Box display="flex" justifyContent="flex-start" mb={2}>
        <Box mr={2} mt={2} mb={2}>
          <Link to="/home" style={{ textDecoration: 'none' }}>
            <Button variant="contained">Volver</Button>
          </Link>
        </Box>
      </Box>
      <Container className='boxForm' maxWidth="sm">
        <Box display="flex" flexDirection="column" >
          <form onSubmit={handleSubmit}>
            <Box display="flex" flexDirection="column" gap={2}>
              <TextField
                label="Ciudad"
                variant="outlined"
                name="city"
                value={user.city}
                onChange={handleChange}
                autoComplete="off"
                placeholder="Ciudad..."
                error={errors.city !== ""}
                helperText={errors.city !== "" ? errors.city : ""}
              />
              <TextField
                label="Pais"
                variant="outlined"
                name="country"
                value={user.country}
                onChange={handleChange}
                autoComplete="off"
                placeholder="Pais..."
                error={errors.country !== ""}
                helperText={errors.country !== "" ? errors.country : ""}
              />
              <TextField
                label="Direccion"
                variant="outlined"
                name="address"
                value={user.address}
                onChange={handleChange}
                autoComplete="off"
                placeholder="Direccion..."
                error={errors.address !== ""}
                helperText={errors.address !== "" ? errors.address : ""}
              />
              <Box mr={2} mt={2} mb={2}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  disabled={!isFormValid()}
                >
                  Create
                </Button>
              </Box>
            </Box>
          </form>
        </Box>
      </Container>
    </>
  );
}