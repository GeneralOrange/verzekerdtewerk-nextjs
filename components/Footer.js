import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/footer/Footer.module.css'

function FooterSections({ data }){
    if(!data){
        return (
        <>
        </>
        )
    }
    
    const gridSize = Math.ceil(12 / parseInt(data.footersection.length));       

    return (
    <>
        { data.footersection.map((data, index) => (
            <div key={index} className={`${styles.FooterItem} col-12 col-md-6 col-lg-${gridSize}`}>
                <div className={styles.FooterItem__name}>
                  {data.name}
                </div>
                { SingleFooterSection( { data } ) }
            </div>
        ))}
    </>
    )
}

function SingleFooterSection({ data }){
  if(!data){
    return (
      <>
      </>
    )
  }

  return (
    <>
      <div className={styles.FooterSection}>
        <div className={styles.FooterSection__innerText}>
          {data.content}
        </div>

        <ul className={styles.FooterSection__list}>
          {data.pages.map((value, key) => (
            
            <Link
              key={key}
              href={`./${value.slug}`}
            >
              <li>
                {value.name}
              </li>
            </Link>
            
          ))}
        </ul>

      </div>
    </>
  )
  
}

export default function Footer({ data }){
    if(!data){
        return (
            <>
            </>
        )
    }

    return (
      <>
        <div className={styles.Footer}>
          <div className="container">
            <div className={styles.Footer__top}>
                <div className="row">
                    <div className="col-12">
                        <Link href="/">
                            <div className={styles.Logo}>
                                <Image
                                src="/logo_small_icon_only.png"
                                alt="Logo"
                                width="60"
                                height="60"
                                />
                            </div>
                        </Link>
                        <div className={styles.Footer__title}>
                            Voor u klus!
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.Footer__bottom}>
                <div className="row">
                    {FooterSections({ data })}
                </div>
            </div>
          </div>
        </div>
      </>
    )
    
}