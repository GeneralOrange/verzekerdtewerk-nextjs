import Link from 'next/link'
import styles from '../../styles/sidebar/Sidebar.module.scss'

export default function SidebarCategories({ categories }){
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