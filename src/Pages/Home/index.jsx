import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet, useLocation } from 'react-router-dom';
import { SimpleCard } from '../../Components/Card/index';
import PaginationRounded from "../../Components/Paginado";
import SelectSmall from '../../Components/Select';
import { getRestorants } from "../../Redux/actions";
import { LOCATION, ORDER, RATING, TAGS } from '../../dataHardcodeo/constants'; // Cuando tengamos la info del backend esto hay que sacarlo
import styles from "./styles.module.css";
import React from 'react';
import { Typography, List, ListItem, Button } from '@mui/material';


export default function Home() {
  const locationRouter = useLocation()
  const { restorants } = useSelector(state => state);
  const dispatch = useDispatch();

  const [location, setLocation] = useState('');
  const [order, setOrder] = useState('');
  const [rating, setRating] = useState('');
  const [searchName] = useState("")
  const [tags, setTags] = useState([]);
  const [selectedFilters, setSelectedFilters] = useState([]);


  useEffect(() => {
    if (order || rating || location || tags) {
      dispatch(getRestorants({ order, rating, searchName, location, tags }));
    }
  }, [dispatch, order, rating, location, tags, searchName]);

  useEffect(() => {
    if (!restorants.documents) dispatch(getRestorants({}));
  }, [dispatch, restorants.documents, restorants.length]);

  const handleChangeLocation = (loc) => {
    if (location === loc) {
      setLocation('');
      setSelectedFilters((prevFilters) => prevFilters.filter((filter) => !filter.startsWith('Ubicación')));
    } else {
      setLocation(loc);
      setSelectedFilters((prevFilters) => {
        const updatedFilters = prevFilters.filter((filter) => !filter.startsWith('Ubicación'));
        return [...updatedFilters, `Ubicación: ${loc}`];
      });
    }
  };

  const handleChangeOrder = (ord) => {
    if (order === ord) {
      setOrder('');
      setSelectedFilters((prevFilters) => prevFilters.filter((filter) => !filter.startsWith('Ordenar')));
    } else {
      setOrder(ord);
      setSelectedFilters((prevFilters) => {
        const updatedFilters = prevFilters.filter((filter) => !filter.startsWith('Ordenar'));
        return [...updatedFilters, `Ordenar: ${ord}`];
      });
    }
  };

  const handleChangeTags = (tg) => {
    if (tags.includes(tg)) {
      setTags((prevTags) => prevTags.filter((tag) => tag !== tg));
      setSelectedFilters((prevFilters) => prevFilters.filter((filter) => !filter.startsWith('Tags')));
    } else {
      setTags((prevTags) => [...prevTags, tg]);
      setSelectedFilters((prevFilters) => {
        const updatedFilters = prevFilters.filter((filter) => !filter.startsWith('Tags'));
        return [...updatedFilters, `Tags: ${tg}`];
      });
    }
  };

  const handleChangeRating = (rtg) => {
    if (rating === rtg) {
      setRating('');
      setSelectedFilters((prevFilters) => prevFilters.filter((filter) => !filter.startsWith('Valoración')));
    } else {
      setRating(rtg);
      setSelectedFilters((prevFilters) => {
        const updatedFilters = prevFilters.filter((filter) => !filter.startsWith('Valoración'));
        return [...updatedFilters, `Valoración: ${rtg}`];
      });
    }
  };

  const handleRemoveFilter = (filter) => {
    setSelectedFilters((prevFilters) => prevFilters.filter((f) => f !== filter));
  
    if (filter.startsWith('Ubicación')) {
      setLocation('');
    } else if (filter.startsWith('Ordenar')) {
      setOrder('');
    } else if (filter.startsWith('Tags')) {
      setTags((prevTags) => prevTags.filter((tag) => `Tags: ${tag}` !== filter));
    } else if (filter.startsWith('Valoración')) {
      setRating('');
    }
  };
  
  console.log('Filters:', { location, rating, order, tags });

  return (
    <>
      {
        (locationRouter.pathname === "/home" ) &&
        <div>
          <div className={styles.paginate}>
            <div className={styles.paginationContainer}> {/* Nuevo contenedor */}
              <PaginationRounded filters={{ location, rating, order, tags }} />
            </div>
          </div>
        <div className={styles.homeContainer}>
          {/* La info se obtiene de la carpeta dataHardcodeo hasta que se reciba la info del back */}
          {/* Hay que conectar los filtros con el backend - No están conectados */}
          <div className={styles.filtersContainer}>
            <Typography variant="h6">Filtros seleccionados</Typography>
            <List>
              {selectedFilters.map((filter) => (
                <ListItem key={filter} >
                  {filter} <Button onClick={() => handleRemoveFilter(filter)}>x</Button>
                </ListItem>
              ))}
            </List>
      
            <Typography variant="h6">Ubicación</Typography>
            <List>
              {LOCATION.map((option) => (
                <ListItem key={option.id} button onClick={() => handleChangeLocation(option.id)}>
                  <Typography>{option.name}</Typography>
                </ListItem>
              ))}
            </List>
      
            <Typography variant="h6">Ordenar</Typography>
            <List>
              {ORDER.map((option) => (
                <ListItem key={option.id} button onClick={() => handleChangeOrder(option.id)}>
                  <Typography>{option.name}</Typography>
                </ListItem>
              ))}
            </List>
      
            <Typography variant="h6">Tags</Typography>
            <List>
              {TAGS.map((option) => (
                <ListItem key={option.id} button onClick={() => handleChangeTags(option.id)}>
                  <Typography>{option.name}</Typography>
                </ListItem>
              ))}
            </List>
      
            <Typography variant="h6">Valoración</Typography>
            <List>
              {RATING.map((option) => (
                <ListItem key={option.id} button onClick={() => handleChangeRating(option.id)}>
                  <Typography>{option.name}</Typography>
                </ListItem>
              ))}
            </List>
          </div>
          {/* Conectar el páginado tbm */}
          <div className={styles.cardsContainer}>
            {
              restorants?.documents?.length ?
                restorants?.documents?.map(resto => {
                  return (
                    <SimpleCard
                      key={resto._id}
                      image={resto.image || "https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-1-scaled.png"}
                      title={resto.name}
                      city={resto.city || "Ciudad"}
                      address={resto.adress || "Direccion"}
                      id={resto._id}
                    />
                  )
                })
                : <p>Loading...</p>
            }
          </div>
        </div>
        </div>
      }
      <Outlet />
    </>
  );
};

