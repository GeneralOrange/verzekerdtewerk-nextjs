import Link from 'next/link'

import styles from '../../styles/menu/Menu.module.scss'

export default function DropDownMenu({ data })
{
    if(!data){
        return(
            <>
            </>
        )
    }

    // console.log(data);

    return (
        <>
            <div className={styles.MenuSection}>
                <div className={styles.MenuSection__innerText}>
                    {data.content}
                </div>
        
                <ul className={styles.MenuSection__list}>
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