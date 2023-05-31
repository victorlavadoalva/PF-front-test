import React, { useState } from "react";
import { Formik } from 'formik';
import styles from './styles.module.css';
import axios from "axios";

export default function FormPlatos() {
  const [formSubmit, setformSubmit] = useState(false);
  const [imageFile,setImageFile] = useState(null)
  const restDataString = localStorage.getItem('RestData');
  const id = JSON.parse(restDataString)?.restaurant.id;
  console.log(restDataString)
  console.log(id);
  const token = JSON.parse(restDataString)?.restaurant.token;
  console.log(token)
  console.log('hola')
  


  function handleImage(event) {
    const file = event[0];
    setImageFile(file)
    }

  return (
    <>
      <Formik
        initialValues={{
          name: '',
          description: '',
          ingredients: '',
          tags: '',
          cost: '',
          type: '',
          image: null

        }}
        validate={(valores) => {
          let errors = {};

          if (!valores.name) {
            errors.name = "Ingrese un nombre";
          } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.name)) {
            errors.name = 'El nombre solo puede contener letras y espacios';
          }

          if (!valores.description) {
            errors.description = "Ingrese una descripción";
          } else if (!/^[\w\s\d.,:]+$/u.test(valores.description)) {
            errors.description = "La descripción solo puede contener letras, números, espacios y los caracteres . , :";
          }

          if (!valores.ingredients) {
            errors.ingredients = "Ingrese los ingredientes";
          } else if (!/^[\w\s\d.,:]+$/u.test(valores.ingredients)) {
            errors.ingredients = "Los ingredientes solo pueden contener letras, números, espacios y los caracteres . , :";
          }

          if (!valores.tags) {
            errors.tags = "Ingrese los tags";
          } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.tags)) {
            errors.tags = 'Los tags solo pueden contener letras y espacios';
          }

          if (!valores.cost) {
            errors.cost = "Ingrese un costo";
          } else if (!/^\d+(\.\d{1,2})?$/.test(valores.cost)) {
            errors.cost = "El costo debe ser un número con máximo 2 decimales";
          }

          if (!valores.type) {
            errors.type = "Ingrese un tipo";
          } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.type)) {
            errors.type = 'El tipo solo puede contener letras y espacios';
          }
          return errors;
        }}
        onSubmit={(valores, { resetForm }) => {
          const formData = new FormData();
          formData.append('name', valores.name);
          formData.append('description', valores.description);
          formData.append('ingredients', valores.ingredients);
          formData.append('tags', valores.tags);
          formData.append('cost', valores.cost);
          formData.append('type', valores.type);
          formData.append('image', imageFile);
          formData.append('authorRest', id);
          console.log('Formulario enviado:', valores);
          axios.post("https://pf-backend-production-83a4.up.railway.app/posts", formData)
          .then((response) =>{
              console.log('Datos enviados:', formData);
              console.log('Respuesta del servidor:', response.data);
              resetForm();
              document.getElementById("image").value = null;
              setformSubmit(true);
              setTimeout(() => setformSubmit(false), 5000);
              const platoId = response.data._id;
              console.log('Plato id:', platoId)

              axios.put(`https://pf-backend-production-83a4.up.railway.app/restaurants/${id}`, {
                menu: platoId ,
              }, {
                headers: {
                  "Content-Type": "application/json",
                  "Authorization": `Bearer ${token}`,
                },
              })
                .then((response) => {
                  console.log('Actualización del menú exitosa:', response.data);
                })
                .catch((error) => {
                  console.error('Error al actualizar el menú:', error);
                });
              
          })
          .catch((error)=>{
            console.log(error);
          })
        }}
      >
        {({ values, errors, touched, handleSubmit, handleChange, handleBlur }) => (
          <form className={styles.formulario} onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name">Nombre:</label>
              <input
                type='text'
                id='name'
                name='name'
                placeholder="Nombre del plato..."
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.name && errors.name && <div className={styles.error}>{errors.name}</div>}
            </div>
            <div>
              <label htmlFor="description">Descripción:</label>
              <input
                type='text'
                id='description'
                name='description'
                placeholder="Descripción del plato..."
                value={values.description}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.description && errors.description && <div className={styles.error}>{errors.description}</div>}
            </div>
            <div>
              <label htmlFor="ingredients">Ingredientes:</label>
              <input
                type='text'
                id='ingredients'
                name='ingredients'
                placeholder="Ingredientes..."
                value={values.ingredients}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.ingredients && errors.ingredients && <div className={styles.error}>{errors.ingredients}</div>}
            </div>
            <div>
              <label htmlFor="tags">Tags:</label>
              <select
                id="tags"
                name="tags"
                value={values.tags}
                onChange={handleChange}
                onBlur={handleBlur}
                className={styles.select}
              >
                <option value="">Seleccionar</option>
                <option value="Internacional">Internacional</option>
                <option value="Veggie">Veggie</option>
                <option value="Vegan">Vegan</option>
                <option value="Celiaco">Celiaco</option>
                <option value="Parrilla">Parrilla</option>
                <option value="Tematicas">Tematicas</option>
                <option value="Otros">Otros</option>
              </select>
              {touched.tags && errors.tags && <div className={styles.error}>{errors.tags}</div>}
            </div>
            <div>
              <label htmlFor="cost">Costo:</label>
              <input
                type='text'
                id='cost'
                name='cost'
                placeholder="Precio..."
                value={values.cost}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.cost && errors.cost && <div className={styles.error}>{errors.cost}</div>}
            </div>
            <div>
              <label htmlFor="type">Categoría:</label>
              <input
                type='text'
                id='type'
                name='type'
                placeholder="(entrada, bebida, sandwich)"
                value={values.type}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.type && errors.type && <div className={styles.error}>{errors.type}</div>}
            </div>
            <div>
              <label htmlFor="image">Imagen:</label>
              <input
                type="file"
                id="image"
                name="image"
                onChange={(e) => handleImage(e.target.files)}
              />
              {touched.image && errors.image && <div className={styles.error}>{errors.image}</div>}
            </div>
            <button type='submit' >Enviar</button>
            {formSubmit && <p className={styles.exito}>Carta de platos enviada con éxito!</p>}
          </form>
        )}
      </Formik>
    </>
  );
}
