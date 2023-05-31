//! TODO descomentar cuando este conectado al back
//import { useSelector } from 'react-redux';
import { CardDish } from '../../Components/CardDish';
import { useState, useEffect } from 'react';
import styles from "./styles.module.css";
import { FOOD } from '../../dataHardcodeo/constants'
import { useLocation } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

export default function Home() {

  let plates = FOOD;
  //! TODO descomentar cuando este conectado al back
  // const { dishes } = useSelector(state => state);
  const [isActive, setIsActive] = useState();
  const location = useLocation();
  const pathname = location.pathname;

  let isRestorant = false;
  pathname === "/restorant" ? isRestorant = true : isRestorant = false;

  useEffect(() => {
  }, [isActive])
  const editMenu = () => {
  }

  const removeFromMenu = (id) => {
    const dish = plates.find(dish => dish._id === id);
    //! TODO descomentar una vez conectado al back
    //const dish = dishes.find(dish => dish._id === id);
    dish.isActive ? dish.isActive = false : dish.isActive = true;
    setIsActive(isActive ? false : true);
  };

  return (
    <>
      {
        isRestorant &&
        <div className={styles.container}>
          <div className={styles.cards}>
            {
              plates.length ?
                plates.map(plate => {
                  //! TODO descomentar cuando este conectado al back
                  // dishes?.documents?.length ?
                  //   dishes?.documents?.map(plate => {
                  return (
                    <CardDish
                      key={plate.id}
                      image={plate.image || "https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-1-scaled.png"}
                      title={plate.name}
                      tags={plate.tags}
                      cost={plate.cost || 0}
                      id={plate._id}
                      isActive={plate.isActive}
                      removeFromMenu={removeFromMenu}
                      editMenu={editMenu}
                    />
                  )
                })
                : <p>No hay platos que mostrar...</p>
            }
          </div>
        </div>
      }
      <Outlet />
    </>
  );
}