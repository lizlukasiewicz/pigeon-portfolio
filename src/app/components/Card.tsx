
import styles from './side.module.css'

export default function Card({ isLoading }: { isLoading?: boolean }) {
    // : isLoading 
    return (
            <div
                className={styles.card}
            >
                <div className={styles.section}>
                    {/* <div className={styles.subsection1} />
                    <div className={styles.subsection2} />
                    <div className={styles.subsection3} /> */}
                </div>
            </div>
)};