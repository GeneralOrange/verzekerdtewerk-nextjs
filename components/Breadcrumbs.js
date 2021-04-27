import Link from 'next/link';
import { FaHome, FaChevronRight } from 'react-icons/fa';

import styles from '../styles/Breadcrumbs.module.scss';

export default function Breadcrumbs({ data }){
    if(!data){
        return (
            <>
            </>
        )
    }

    const richSnippet = {
        "@context" : "http://schema.org",
        "@type" : "BreadcrumbList",
        "itemListElement" :
            [
                {
                    "@type": "ListItem",
                    "position": 1,
                    "item":
                        {
                            "@id": `test`,
                            "name": `${data.name}`
                            
                        }
                }
            ]
    };

    return (
        <>
            {/* <script type="application/ld+json">
                { JSON.stringify(richSnippet)}
            </script> */}
            <div className={styles.Breadcrumbs}>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <ul className={styles.Breadcrumbs__list}>
                                <li className={styles.Breadcrumbs__item}>
                                    <Link href="/">
                                        <a>
                                            <FaHome className={styles.Breadcrumbs__home} />
                                        </a>
                                    </Link>
                                </li>
                                <li className={styles.Breadcrumbs__item}>
                                    <FaChevronRight />
                                </li>
                                <li className={styles.Breadcrumbs__item}>
                                    {data.name}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )    
}
