import styles from "./styles.module.css";

export default function Loading_Login() {
  return (
    <div className={styles.container}>
                <div className ={styles.dot_spinner}>
                    <div className ={styles.dot_spinner__dot}></div>
                    <div className={styles.dot_spinner__dot}></div>
                    <div className={styles.dot_spinner__dot}></div>
                    <div className={styles.dot_spinner__dot}></div>
                    <div className={styles.dot_spinner__dot}></div>
                    <div className={styles.dot_spinner__dot}></div>
                    <div className={styles.dot_spinner__dot}></div>
                    <div className={styles.dot_spinner__dot}></div>
                </div>
        </div>
  );
}
