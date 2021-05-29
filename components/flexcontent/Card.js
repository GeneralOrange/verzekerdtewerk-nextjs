import { FaChevronRight } from 'react-icons/fa'

import Image from 'next/image'
import Link from 'next/link'
import styles from '../../styles/flexcontent/Card.module.scss'

export default function Card({ data, uri }){
    if(!data){
        return null;
    }

    return (
        <>
            <Link href={`${uri ? uri : ''}/${data.slug}`}>
                <a>
                    <div className={styles.Card}>
                        <div className={styles.Card__image}>
                            <Image
                                src="/logo_small_icon_only_inverted.png"
                                alt="Logo"
                                width="90"
                                height="90"
                            />
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