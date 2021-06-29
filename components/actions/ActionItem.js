import Link from 'next/link'
import Image from 'next/image'
import { getStrapiMedia } from '../../lib/media'
import { FaChevronRight } from 'react-icons/fa'
import styles from '../../styles/actions/ActionItem.module.scss'

export default function ActionItem({ action }){
    if(!action){
        return null;
    }


    return (
        <Link href={ action.outgoing_link }>
            <a
                rel='nofollow'
                target='_blank'
                className={ styles.ActionItem__link }>
                <div className={ styles.ActionItem }>
                    <div className={ styles.ActionItem__content }>
                        <h3 className={ styles.ActionItem__title}>{ action.title }</h3>
                        <p className={ styles.ActionItem__description}>
                            { action.description }
                        </p>
                        
                            <button className={ styles.ActionItem__button}>
                                Ga naar actie <FaChevronRight/>
                            </button>
                    </div>
                    <div className={ styles.ActionItem__thumbnailWrapper }>
                        <Image
                            src={getStrapiMedia(action.thumbnail)}
                            className={ styles.ActionItem__thumbnail }
                            layout="fill"
                            alt=""
                        />
                    </div>
                </div>
            </a>
        </Link>
    );
}