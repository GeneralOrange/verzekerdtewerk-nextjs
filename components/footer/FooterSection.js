import Link from 'next/link'
import FooterItem from './FooterItem'
import Socials from '../socials/Socials'
import styles from '../../styles/footer/Footer.module.scss'

export default function FooterSection({ data }){
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
              <li key={key}>
                <Link href={`/${value.slug}/`}>
                  <a>
                    {value.name}
                  </a> 
                </Link>
              </li>
              
            ))}

            {data.categories.map((value, key) => (
              <li key={key}>
                <Link href={`/categorie/${value.slug}/`}>
                  <a>
                    {value.name}
                  </a> 
                </Link>
              </li>
              
            ))}
            
            {data.menu_footer_item.map((value, key) => (
              <FooterItem key={key} component={value}/>
            ))}
            <Socials socialItems={data.social_items}/>
          </ul>
  
        </div>
      </>
    )
    
}