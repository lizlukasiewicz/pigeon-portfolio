import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import { demos } from './lib/routes'
import Link from 'next/link';




const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      
      {/* TODO: MOVE THIS INTO NESTED COMPONENT -- ALONG WITH ABOUT, PROJECTS && CONTACT */}
      <div className={styles.center}>
        
        <h2 className={inter.className}>
            / wu.kaˈɕɛ.vit͡ʂ /
        </h2>

      </div>
      {/* TODO: RENDER ABOUT,, PROJECTS && CONTACT HERE*/}
      <div className={styles.grid}>
        
        {demos.map((section) => {
          return(
            <div className={styles.card} key={section.name}>
              <Link
                href={section.slug}
                key={section.name}
                // className={}
                >
                  <h2>{section.name}</h2></Link>
                  <br></br>
                  <p>{section.description}</p>
                  <div className={styles.subcard}>
                      {section.items ? ( section.items.map((item) => {
                        return (
                          <div className={styles.card} key={item.name}>
                            <Link
                              href={`${section.slug}/${item.slug}`}
                              key={item.name}
                              className={styles.thirteen}
                            >
                              <h2 className={inter.className}>
                                {item.name}
                              </h2>
                            
                            </Link>
                          </div>
                          );
                      })): null}
                </div>
            </div>
          )
        })}
      </div>

    </div>
  )
}
