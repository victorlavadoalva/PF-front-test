import { useEffect, useState } from "react";
import { dataImg } from "../../dataHardcodeo/constants";
import styles from "./styles.module.css";

export default function Carousel() {
  
  const images = ["Burger.png", "Pizza.png", "Sandwich.png"]
  const [selectedIndex, SetSelectedIndex] = useState(0)
  const [selectImage, setSelectedImage] = useState(images[0])
  const [loaded, setLoaded] = useState(false)

  const selectNewImage = (index, images) => {
    setLoaded(false);
    setTimeout(() => {
      setSelectedImage(images[index]);
      SetSelectedIndex(index);
    }, 300)
  };

  const next = () => {
    setTimeout(() => {
      const lastIndex = images.length - 1;
      const nextIndex = selectedIndex < lastIndex ? selectedIndex + 1 : 0;
      selectNewImage(nextIndex, images);
    }, 500)
  };

  useEffect(() => {
    let isMounted = true; // Variable de referencia para verificar si el componente está montado

    const interval = setInterval(() => {
      if (isMounted) {
        next(); // Llama a la función next solo si el componente está montado
      }
    }, 4000);

    return () => {
      isMounted = false; // Actualiza la variable de referencia cuando el componente se desmonta
      clearInterval(interval); // Cancela el intervalo
    };
  }, [selectedIndex]);

  const imgStyles = {
    width: "50rem",
    height: "30rem",
    margin: "20px 0 0 0",
    objectFit: "scale-down",
    opacity: loaded ? 1 : 0,
    transition: "opacity 0.5s",
  };

  const mediaQuery = window.matchMedia("(max-width: 1500px)");

  if (mediaQuery.matches) {
    imgStyles.width = "30rem";
    imgStyles.margin = "0px 0 0 0";
    imgStyles.height = "20rem";
  }

  return (
    <div className={styles.carousel}>
      <div className={styles.pagination_circular}>
        {images.map((_, index) => (
          <span
            key={index}
            className={index === selectedIndex ? styles.active : ""}
            onClick={() => {
              selectNewImage(index, images);
            }}
          >{index + 1}</span>
        ))}
      </div>
      <div className={styles.container_carouselImg}>
        {
          dataImg.map((el) => (
            <img
              key={el.id}
              style={imgStyles}
              src={require(`./img/${selectImage}`).default}
              alt={el.alt}
              onLoad={() => setLoaded(true)}
            />
          ))}
      </div>
    </div>
  )
}