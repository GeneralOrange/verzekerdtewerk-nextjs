import Link from 'next/link'
import Image from 'next/image'
import MarkDown from '../processing/MarkDown'
import styles from '../styles/Sidebar.module.css'

const Sidebar = ({ data }) => {
    if(!data){
        return (
            <>
            </>
        );
    }
    
    const categories = data.categories;
    const ctaData = data.cta;

    return (
        <>
            <div className={styles.Sidebar}>
                <h3 className={styles.Sidebar__title}>Bekijk 1 van onze andere categorieën</h3>
                {CategoryList({ categories })}
                {CTA({ ctaData })}
            </div>
        </>
    )
}

const CategoryList = ({ categories }) => {
    if(!categories){
        return (
            <>
            </>
        )
    }

    return (
        <ul className={styles.Sidebar__categoryList}>
            {categories.map((category, index) => (
                
                <Link key={index} href={`/${category.slug}`}>
                    <li className={styles.Sidebar__categoryItem}>
                        {category.name}
                    </li>
                </Link>
                
            ))}
        </ul>
    )
}

const CTA = ({ ctaData }) => {
    if(!ctaData){
        return (
            <>
            </>
        )
    }

    const ImagePath = process.env.API_ENDPOINT+ctaData.image.url;

    return (
        <div className={styles.Sidebar__cta}>
            <div className={styles.Sidebar__ctaContent}>
                <MarkDown data={ctaData.content}/>
            </div>
            <div className={styles.Sidebar__ctaImageContainer}>
                <img src={ImagePath} alt={ctaData.image.alternativeText}/>
            </div>
        </div>
    )
}

export default Sidebar;