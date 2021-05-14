import Link from 'next/link'
import { getStrapiMedia } from '../lib/media'

import SearchForm from '../components/atoms/SearchForm'

import MarkDown from '../processing/MarkDown'
import styles from '../styles/Sidebar.module.scss'

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
                <h3 className={styles.Sidebar__title}>Bekijk 1 van onze andere categorieën</h3>
                {CategoryList({ categories })}
                {CTA({ ctaData })}
            </div>
        </>
    )
}

function CategoryList({ categories }){
    if(!categories){
        return null;
    }

    return (
        <ul className={styles.Sidebar__categoryList}>
            {categories.map((category, index) => (
                <li key={index} className={styles.Sidebar__categoryItem}>
                    <Link href={`/categorie/${category.slug}`}>
                        <a>
                                
                                {category.name}
                            
                        </a>
                    </Link>
                </li>
            ))}
        </ul>
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
                <img src={getStrapiMedia(ctaData.image)} alt={ctaData.image.alternativeText}/>
            </div>
        </div>
    )
}