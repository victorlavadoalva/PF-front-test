import styles from "./styles.module.css";

export default function CardFilter_Landing({ id, image, name }) {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.imgContainer}>
        <img src={image} alt={name} />
      </div>
      <div className={styles.containerTitle}>
        <h3>{name}</h3>
      </div>
    </div>
  );
}
