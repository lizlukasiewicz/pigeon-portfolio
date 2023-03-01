import styles from './page.module.css'
import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Splash() {
    return(
        <div className={styles.center}>
            <div className={styles.centerText}>
                <h2 className={inter.className}>
                    / wu.kaˈɕɛ.vit͡ʂ /
                </h2>
            </div>
        </div>
    )
}