import Link from 'next/link'
import FooterItem from './FooterItem'
import Socials from '../socials/Socials'
import SimpleList from '../molecules/SimpleList'
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
            <SimpleList data={data.pages} uri='/'/>
            <SimpleList data={data.categories} uri='/categorieen/'/>
            <SimpleList data={data.specialists} uri='/specialisten/'/>
            <SimpleList data={data.jobs} uri='/werkzaamheden/'/>
            
            {data.menu_footer_item.map((value, key) => (
              <FooterItem key={key} component={value}/>
            ))}
            <Socials socialItems={data.social_items}/>
          </ul>
  
        </div>
      </>
    )
    
}