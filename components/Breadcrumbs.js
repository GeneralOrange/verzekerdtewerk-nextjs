import Link from 'next/link';
import { FaHome, FaChevronRight } from 'react-icons/fa';

import styles from '../styles/Breadcrumbs.module.scss';

export default function Breadcrumbs({ data, pageType }){
    if(!data){
        return null;
    }

    switch(pageType){
        case 'page':

            const richSnippetPages = {
                "@context" : "http://schema.org",
                "@type" : "BreadcrumbList",
                "itemListElement" :
                    [
                        {
                            "@type": "ListItem",
                            "position": 1,
                            "item":
                                {
                                    "@id": `${process.env.NEXT_PUBLIC_SITE_URL}/${data.slug}/`,
                                    "name": `${data.name}`
                                }
                        }
                    ]
            };

            return (
                <>
                   <script
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{
                            __html: JSON.stringify(richSnippetPages)
                        }}>
                    </script>
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
            break;
        case 'category':

            const richSnippetCategory = {
                "@context" : "http://schema.org",
                "@type" : "BreadcrumbList",
                "itemListElement" :
                    [
                        {
                            "@type": "ListItem",
                            "position": 1,
                            "item":
                                {
                                    "@id": `${process.env.NEXT_PUBLIC_SITE_URL}/categorieen/`,
                                    "name": `Categorieën`
                                }
                        },
                        {
                            "@type": "ListItem",
                            "position": 2,
                            "item":
                                {
                                    "@id": `${process.env.NEXT_PUBLIC_SITE_URL}/categorieen/${data.slug}/`,
                                    "name": `${data.name}`
                                }
                        }
                    ]
            };

            return (
                <>
                    <script
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{
                            __html: JSON.stringify(richSnippetCategory)
                        }}>
                    </script>
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
                                            <Link href="/categorieen/">
                                                <a>
                                                    Categorieën
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
            break;
        case 'job':
            const richSnippetJob = {
                "@context" : "http://schema.org",
                "@type" : "BreadcrumbList",
                "itemListElement" :
                    [
                        {
                            "@type": "ListItem",
                            "position": 1,
                            "item":
                                {
                                    "@id": `${process.env.NEXT_PUBLIC_SITE_URL}/werkzaamheden/`,
                                    "name": `Werkzaamheden`
                                }
                        },
                        {
                            "@type": "ListItem",
                            "position": 2,
                            "item":
                                {
                                    "@id": `${process.env.NEXT_PUBLIC_SITE_URL}/werkzaamheden/${data.slug}/`,
                                    "name": `${data.name}`
                                }
                        }
                    ]
            };

            return (
                <>
                    <script
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{
                            __html: JSON.stringify(richSnippetJob)
                        }}>
                    </script>
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
                                            <Link href="/werkzaamheden/">
                                                <a>
                                                    Werkzaamheden
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
            break;
        case 'specialist':
            const richSnippetSpecialist = {
                "@context" : "http://schema.org",
                "@type" : "BreadcrumbList",
                "itemListElement" :
                    [
                        {
                            "@type": "ListItem",
                            "position": 1,
                            "item":
                                {
                                    "@id": `${process.env.NEXT_PUBLIC_SITE_URL}/specialisten/`,
                                    "name": `Specialisten`
                                }
                        },
                        {
                            "@type": "ListItem",
                            "position": 2,
                            "item":
                                {
                                    "@id": `${process.env.NEXT_PUBLIC_SITE_URL}/specialisten/${data.slug}/`,
                                    "name": `${data.name}`
                                }
                        }
                    ]
            };

            return (
                <>
                    <script
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{
                            __html: JSON.stringify(richSnippetSpecialist)
                        }}>
                    </script>
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
                                            <Link href="/specialisten/">
                                                <a>
                                                    Specialisten
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
            break;
        case 'cost':

            if (data.specialist) {
                
                const richSnippetSpecialistCost = {
                    "@context" : "http://schema.org",
                    "@type" : "BreadcrumbList",
                    "itemListElement" :
                        [
                            {
                                "@type": "ListItem",
                                "position": 1,
                                "item":
                                    {
                                        "@id": `${process.env.NEXT_PUBLIC_SITE_URL}/specialisten/`,
                                        "name": `Specialisten`
                                    }
                            },
                            {
                                "@type": "ListItem",
                                "position": 2,
                                "item":
                                    {
                                        "@id": `${process.env.NEXT_PUBLIC_SITE_URL}/specialisten/${data.specialist.slug}/`,
                                        "name": `${data.specialist.name}`
                                    }
                            },
                            {
                                "@type": "ListItem",
                                "position": 3,
                                "item":
                                    {
                                        "@id": `${process.env.NEXT_PUBLIC_SITE_URL}/specialisten/${data.specialist.slug}/kosten/`,
                                        "name": `${data.name}`
                                    }
                            }
                        ]
                };

                return (
                    <>
                        <script
                            type="application/ld+json"
                            dangerouslySetInnerHTML={{
                                __html: JSON.stringify(richSnippetSpecialistCost)
                            }}>
                        </script>
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
                                                <Link href="/specialisten/">
                                                    <a>
                                                        Specialisten
                                                    </a>
                                                </Link>
                                            </li>
                                            <li className={styles.Breadcrumbs__item}>
                                                <FaChevronRight />
                                            </li>
                                            <li className={styles.Breadcrumbs__item}>
                                                <Link href={`/specialisten/${data.specialist.slug}/`}>
                                                    <a>
                                                        {data.specialist.name}
                                                    </a>
                                                </Link>
                                            </li>
                                            <li className={styles.Breadcrumbs__item}>
                                                <FaChevronRight />
                                            </li>
                                            <li className={styles.Breadcrumbs__item}>
                                                Kosten
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                )
            } else if(data.job){
                const richSnippetSpecialistCost = {
                    "@context" : "http://schema.org",
                    "@type" : "BreadcrumbList",
                    "itemListElement" :
                        [
                            {
                                "@type": "ListItem",
                                "position": 1,
                                "item":
                                    {
                                        "@id": `${process.env.NEXT_PUBLIC_SITE_URL}/werkzaamheden/`,
                                        "name": `Werkzaamheden`
                                    }
                            },
                            {
                                "@type": "ListItem",
                                "position": 2,
                                "item":
                                    {
                                        "@id": `${process.env.NEXT_PUBLIC_SITE_URL}/werkzaamheden/${data.job.slug}/`,
                                        "name": `${data.job.name}`
                                    }
                            },
                            {
                                "@type": "ListItem",
                                "position": 3,
                                "item":
                                    {
                                        "@id": `${process.env.NEXT_PUBLIC_SITE_URL}/werkzaamheden/${data.job.slug}/kosten/`,
                                        "name": `${data.name}`
                                    }
                            }
                        ]
                };

                return (
                    <>
                        <script
                            type="application/ld+json"
                            dangerouslySetInnerHTML={{
                                __html: JSON.stringify(richSnippetSpecialistCost)
                            }}>
                        </script>
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
                                                <Link href="/werkzaamheden/">
                                                    <a>
                                                        Werkzaamheden
                                                    </a>
                                                </Link>
                                            </li>
                                            <li className={styles.Breadcrumbs__item}>
                                                <FaChevronRight />
                                            </li>
                                            <li className={styles.Breadcrumbs__item}>
                                                <Link href={`/werkzaamheden/${data.job.slug}/`}>
                                                    <a>
                                                        {data.job.name}
                                                    </a>
                                                </Link>
                                            </li>
                                            <li className={styles.Breadcrumbs__item}>
                                                <FaChevronRight />
                                            </li>
                                            <li className={styles.Breadcrumbs__item}>
                                                Kosten
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                )
            }

            return null;
            break;
        default:
            return (
                <>
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
            break;
    }    
}