import MenuSections from './menu/MenuSections'

import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/menu/Menu.module.scss'

export default function Menu({ data }){
    if(!data){
        return (
            <>
            </>
        )
    }

    return (
      <>
        <div className={styles.Menu__outer}>
          <div className="container">
            <div className="row">
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
            </div>
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