import axios from "axios";
import { addDays, format } from "date-fns";
import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";

import { Button, Typography } from "@mui/material";
import styles from "./styles.module.css";

const ReservasCliente = () => {
  //Valores iniciales
  const initialValues = {
    // nombre: "",
    dia: "",
    hora: "",
    people: "",
    // telefono: "",
  };

  const validationSchema = Yup.object().shape({
    // nombre: Yup.string().required("El nombre es requerido"),
    dia: Yup.date().required("El día es requerido"),
    hora: Yup.string().required("La hora es requerida"),
    people: Yup.number()
      .required("La cantidad de comensales es requerida")
      .positive("La cantidad de comensales debe ser un número positivo")
      .integer("La cantidad de comensales debe ser un número entero"),
    // telefono: Yup.string()
    //   .required("El teléfono es requerido")
    //   .matches(/^\d+$/, "El teléfono debe contener solo números")
    //   .min(10, "El teléfono debe tener al menos 10 dígitos")
    //   .max(15, "El teléfono no debe exceder los 15 dígitos"),
  });

  const handleSubmit = async (values) => {
    // Obtener datos del Local Storage
    const storedData = localStorage.getItem("UserLogVerificate");

    console.log(values);
    const token = process.env.REACT_APP_TOKEN;
    console.log(token);
    const token2 =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc0FkbWluIjoidHJ1ZSIsImlhdCI6MTY4NTQ5MjYwNywiZXhwIjo0ODQxMjUyNjA3fQ.1bJibYNPFAX8-rmxXwlxVsgKsTzJZIyZsD4JeCER9Yk";
    // Verificar si se encontraron datos en el Local Storage
    if (storedData) {
      //obtener ID del restaurante
      const direction = window.location.href;
      const segments = direction.split("/");
      const idRestaurant = segments[segments.length - 1];
      const idRestauran2 = "647618888c21680d5de8f62c";
      // Si se encontraron datos, convertirlos a objeto o utilizarlos según sea necesario
      const parsedData = JSON.parse(storedData);
      const idUser = parsedData.id;
      // const url = "https://pf-backend-production-83a4.up.railway.app/";
      // const url2 = "http://localhost:3001/";

      const reservation = {
        ...values,
        nombre: idUser,
      };

      // por params id de restaurante y por name ID de usuario
      axios
        .put(
          "/restaurants/" + `${idRestauran2}`,
          { reservation: reservation },
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token2}`,
            },
          }
        )
        .then((response) => {
          alert("Se agendo la cita con exito!");
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      // Si no se encontraron datos en el Local Storage, manejar la situación en consecuencia
      console.log("No se encontraron datos en el Local Storage");
    }
  };

  const today = new Date();

  return (
    <div className={styles["reservation-form"]}>
      {/* <h2 className={styles["header"]}>Reservar en el restaurante</h2> */}
      <Typography variant="h6" align="center" fontWeight="bold">
        Realiza tu reserva
      </Typography>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className={styles["form"]}>
          {/* <div className={styles["form-group"]}>
            <label htmlFor="nombre">Nombre:</label>
            <Field
              type="text"
              id="nombre"
              name="nombre"
              className={styles.input}
            />
            <ErrorMessage
              name="nombre"
              component="div"
              className={styles["error-message"]}
            />
          </div> */}

          <div className={styles["form-group"]}>
            <label htmlFor="dia">Día:</label>
            <Field
              type="date"
              id="dia"
              name="dia"
              min={format(addDays(today, 1), "yyyy-MM-dd")}
              className={styles.input}
            />
            <ErrorMessage
              name="dia"
              component="div"
              className={styles["error-message"]}
            />
          </div>

          <div className={styles["form-group"]}>
            <label htmlFor="hora">Hora:</label>
            <Field
              type="time"
              id="hora"
              name="hora"
              className={styles.input}
              step="7200"
              min="08:00"
              max="18:00"
              pattern="([01]?[0-9]|2[0-3]):[0-5][0-9]"
              required
            >
              {(props) => {
                const { field } = props;
                const options = [];

                // Generar opciones con intervalo de dos horas
                let hour = 8;
                while (hour <= 18) {
                  options.push(`${hour.toString().padStart(2, "0")}:00`);
                  hour += 2;
                }

                return (
                  <select {...field}>
                    {options.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                );
              }}
            </Field>
            <ErrorMessage
              name="hora"
              component="div"
              className={styles["error-message"]}
            />
          </div>

          <div className={styles["form-group"]}>
            <label htmlFor="people">Cantidad de comensales:</label>
            <Field
              type="number"
              id="people"
              name="people"
              min={1}
              className={styles.input}
            />
            <ErrorMessage
              name="people"
              component="div"
              className={styles["error-message"]}
            />
          </div>

          {/* <div className={styles["form-group"]}>
            <label htmlFor="telefono">Teléfono:</label>
            <Field
              type="tel"
              id="telefono"
              name="telefono"
              className={styles.input}
            />
            <ErrorMessage
              name="telefono"
              component="div"
              className={styles["error-message"]}
            />
          </div> */}

          <Button
            type="submit"
            variant="contained"
            sx={{ background: "#3A506B" }}
          >
            Reservar
          </Button>
        </Form>
      </Formik>
    </div>
  );
};

export default ReservasCliente;
