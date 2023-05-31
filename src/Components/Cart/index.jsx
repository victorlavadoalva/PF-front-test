import React, { useState, useEffect } from 'react';
import { Typography } from '@mui/material';
import { CardDish } from '../CardDish';
import styles from '../../Pages/MenuClientes/styles.module.css'
import { getDish } from '../../Redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import * as actions from '../../Redux/actions';
import Store from '../../Pages/Store';
import { FOOD } from '../../dataHardcodeo/constants'


const Cart = () => {
  //!TODO descomentar una vez conectado al back
  // const { dishes } = useSelector(state => state);
  // const [isActive, setIsActive] = useState(dishes);
  const dispatch = useDispatch();
  const { id } = useParams();
  const localStorage = window.localStorage.getItem('store');
  const store = JSON.parse(localStorage);

  useEffect(() => {
    //!TODO descomentar una vez conectado al back
    // const activeDish = dishes.map(dish => dish.isActive === true);
    // setIsActive(activeDish);
    dispatch(getDish(id));
  }, [dispatch, id]);

  const addToCart = (product) => {
    dispatch(actions.addToCart(product));
    store.push(product);
    window.localStorage.setItem('store', JSON.stringify(store));
  };

  return (
    <div className={styles.container}>
      <div className={styles.containerMenu}>
        <Typography variant="h5" gutterBottom>
          Carta:
        </Typography>
        <div className={styles.cardContainer}>
          {FOOD.length === 0 ? (
            <Typography variant="body1">La carta está vacía.</Typography>
          ) : (
            FOOD.map((food) => {
              //!TODO descomentar una vez conectado al back
              //isActive.map(food => {
              return (
                <CardDish
                  key={food._id}
                  id={food._id}
                  image={food.image ? food.image[0] : null}
                  name={food.name}
                  tags={food.tags}
                  cost={food.cost}
                  description={food.description}
                  className={styles.card}
                  addToCart={addToCart}
                />
              )
            })
          )}
        </div>
      </div>
      <div className={styles.store}>
        <Store />
      </div>
    </div>
  );
};

export default Cart;