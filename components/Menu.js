import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import MenuSections from './menu/MenuSections'

import styles from '../styles/menu/Menu.module.scss'

export default function Menu({ data }){
    if(!data){
        return (
            <>
            </>
        )
    }

    const [scrollMenu, setScrollMenu] = useState(false);

    const handleScroll = () => {
      if(scrollY > 150){
        setScrollMenu(true);
      } else if(scrollY < 50) {
        setScrollMenu(false);
      }
    }

    useEffect(()=> {
      window.addEventListener('scroll', handleScroll);

      return () => {
        window.removeEventListener('scroll', handleScroll);
      }
    })

    return (
      <>
        <div className={`${styles.Menu__outer} ${ scrollMenu && styles.Menu__outerScrollMenu}`}>
          <div className="container">
            { !scrollMenu && <div className="row">
              <div className="col-12 col-lg-6">
                <Link href="/">
                  <div className={styles.Logo}>
                    <Image
                      src="/logo.svg"
                      alt="Logo"
                      width="90"
                      height="90"
                    />
                  </div>
                </Link>
              </div>
              <div className="col-12 col-lg-6">
                  <Link href="#">
                    <div className={styles.CTA}>Nieuwe klus</div>
                  </Link>
              </div>
            </div> }
            <div className="row">
              <div className="col-12">
                <div className={styles.Menu}>
                  <MenuSections data={ data } />
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
    
}