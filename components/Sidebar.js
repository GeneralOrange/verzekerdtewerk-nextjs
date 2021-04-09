import Link from 'next/link'
import styles from '../styles/Sidebar.module.css'

const Sidebar = ({ data }) => {
    if(!data){
        return (
            <>
            </>
        );
    }
    
    const categories = data.categories;

    return (
        <>
            <div className={styles.Sidebar}>
                {CategoryList({ categories })}
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
        <div className={styles.Sidebar__categoryList}>
            {categories.map((category, index) => (
                <>
                    <Link href={`/${category.slug}`}>
                        <div key={index} className={styles.Sidebar__categoryItem}>
                            {category.name}
                        </div>
                    </Link>
                </>
            ))}
        </div>
    )
}

export default Sidebar;