import { FaChevronRight } from 'react-icons/fa'
import { getStrapiMedia } from '../../lib/media'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../../styles/flexcontent/Card.module.scss'

export default function Card({ data, uri, slider }){
    if(!data){
        return null;
    }

    let card_slug = `${uri ? uri : ''}/${data.slug}/`;

    if(data.thumbnail){
        var thumbnail = (
            <Image
                className={styles.Card__thumbnail}
                alt=""
                src={getStrapiMedia(data.thumbnail)}
                layout="fill"/>
        );
    }

    if(data.entity_type){
        switch(data.entity_type){
            case 'page':
                card_slug = `/${data.slug}/`;
                break;
            case 'category':
                card_slug = `/categorieen/${data.slug}/`;
                break;
            case 'specialist':
                card_slug = `/specialisten/${data.slug}/`;
                break;
            case 'job':
                card_slug = `/werkzaamheden/${data.slug}/`;
                break;
            case 'cost':
                if(data.specialist){
                    card_slug = `/specialisten/${data.specialist.slug}/kosten/`;
                } else if(data.job){
                    card_slug = `/werkzaamheden/${data.job.slug}/kosten/`;
                }
                break;
            default:
                card_slug = `/${data.slug}`;
                break;
        }
    }

    return (
        <>
            <Link href={card_slug}>
                <a>
                    <div className={ slider ? `${styles.Card} ${styles.CardInSlider}` : styles.Card}>
                        <div className={styles.Card__image}>
                            {!thumbnail && <Image
                                src="/logo_small_icon_only_inverted.png"
                                alt="Logo"
                                width="75"
                                height="75"
                            />}
                            {thumbnail}
                        </div>
                        <div className={styles.Card__name}>
                            {data.name}
                        </div>
                        <div className={styles.Card__description}>
                            {data.description}
                        </div>

                        <div className={styles.Card__button}>
                            <FaChevronRight className={styles.Card__buttonIcon}/>
                        </div>
                    </div>
                </a>
            </Link>
        </>
    )
}