import { getStrapiMedia } from '../../lib/media'

import SearchForm from '../atoms/SearchForm'
import SidebarCategories from './SidebarCategories'
import MarkDown from '../../processing/MarkDown'
import styles from '../../styles/sidebar/Sidebar.module.scss'

export default function Sidebar({ data }){
    if(!data){
        return null;
    }
    
    const categories = data.categories;
    const ctaData = data.cta;

    return (
        <>
            <SearchForm/>
            <div className={styles.Sidebar}>
                <strong className={styles.Sidebar__title}>Onze acties in en om het huis!</strong>
                <SidebarCategories categories={ categories }/>
                {CTA({ ctaData })}
            </div>
        </>
    )
}

function CTA({ ctaData }){
    if(!ctaData){
        return null;
    }

    return (
        <div className={styles.Sidebar__cta}>
            <div className={styles.Sidebar__ctaContent}>
                <MarkDown data={ctaData.content}/>
            </div>
            <div className={styles.Sidebar__ctaImageContainer}>
                {ctaData.image && <img src={getStrapiMedia(ctaData.image)} alt={ctaData.image.alternativeText}/>}
            </div>
        </div>
    )
}