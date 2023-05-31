import PriorityHighIcon from '@mui/icons-material/PriorityHigh';
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
// import { RESTOS } from "../../dataHardcodeo/constants"; // sacarlo una vez unido con el backend
import { getRestorants } from '../../Redux/actions'; 

import styles from "./index.module.css";


function SearchBar() {
  const [searchResto, setSearchResto] = useState("");
  const [searchError, setSearchError] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const restorants = useSelector(state => state.restorants);

  function handleChange(event) {
    setSearchResto(event.target.value);
    setSearchError(false); // Reiniciar el mensaje de error al cambiar el valor de búsqueda
  }

  function handleSubmit(event) {
    event.preventDefault();

    if(!searchResto) {
      setSearchError(true);
      return;
    }

    dispatch(getRestorants({}));

    // Realizar la búsqueda por nombre en la lista de restaurantes (RESTOS)
    const results = restorants.filter(
      (resto) =>
        resto.name.toLowerCase().includes(searchResto.toLowerCase())
    );

    if (results.length > 0) {
      const restoId = results[0].id;
      navigate(`/detail/${restoId}`);
    } else {
      setSearchError(true); // Mostrar mensaje de error si no se encuentra ningún resultado
    }
  }
  return (
    <form className={styles.searchBar} onSubmit={handleSubmit}>
      <div className={styles.input_container}>
          <input className={ styles.searchBarInput} type="text" value={searchResto} onChange={handleChange} placeholder="Buscar..."/>
          <button className={ styles.button} type="submit">Buscar</button>
          {searchError && <p className={styles.searchBarError}><PriorityHighIcon/> No se encontró ningún restaurante con ese nombre.</p>}
      </div>
    </form>
  );
}

export default SearchBar;