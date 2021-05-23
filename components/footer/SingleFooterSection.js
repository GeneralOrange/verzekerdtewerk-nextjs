import Link from 'next/link'

import styles from '../../styles/footer/Footer.module.scss'

export default function SingleFooterSection({ data }){
    if(!data){
      return null;
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
                href={`/${value.slug}`}
              >
                <a>
                  <li>
                    {value.name}
                  </li>
                </a> 
              </Link>
              
            ))}
          </ul>
  
        </div>
      </>
    )
    
}