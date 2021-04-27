import Image from 'next/image'
import Link from 'next/link'
import styles from '../../styles/flexcontent/Card.module.scss'

export default function Card({ data }){
    if(!data){
        return (
            <>
            </>
        )
    }

    return (
        <>
            <Link href={`/${data.slug}`}>
                <a>
                    <div className={styles.Card}>
                        <Image
                            src="/logo.svg"
                            alt="Logo"
                            width="90"
                            height="90"
                        />
                        <div className={styles.Card__name}>
                            {data.name}
                        </div>
                        <div className={styles.Card__description}>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                        </div>
                    </div>
                </a>
            </Link>
        </>
    )
}