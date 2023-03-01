// import Image from 'next/image'
'use client'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import { demos } from './lib/routes'
import { Link } from '@chakra-ui/next-js'



const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  
  return (
    <div>
      
      {/* TODO: MOVE THIS INTO NESTED COMPONENT -- ALONG WITH ABOUT, PROJECTS && CONTACT */}
      <div className={styles.center}>
        
        <div className={styles.centerText}>
        <h2 className={inter.className}>
            / wu.kaˈɕɛ.vit͡ʂ /
        </h2>
        </div>


      </div>
      
      <div className={styles.grid}>
        
        {demos.map((section) => {
          return(
            <div className={styles.card} key={section.name}>
              <Link
                
                href={section.slug}
                key={section.name}
                >
                  <h2 className={inter.className}>{section.name}</h2></Link>
                  <br></br>
                  <p>{section.description}</p>
                  <div className={styles.subcards}>
                      {section.items ? ( section.items.map((item) => {
                        return (
                          <div className={styles.subcard} key={item.name}>
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
