import styles from "./styles.module.css";

export default function CardLanding({id ,image, name, onChange}) {

  const handleClick = () => {
    onChange(name); 
  };
  return (
    <div className={styles.cardContainer} onClick={handleClick}>
        <div className={styles.imgContainer}>
          <img src={image} alt = {name} />
        </div>
        <h3>{name}</h3>
    </div>
  );
}
