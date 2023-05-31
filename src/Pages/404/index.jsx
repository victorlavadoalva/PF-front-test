import styles from "./index.module.css"

export default function Error404 (){
    return (
        <div className={styles.container}>
            <div className={styles.sectionError}>
                <h1 className={styles.error}>404 Page not found</h1>
            </div>
        </div>
    )
}