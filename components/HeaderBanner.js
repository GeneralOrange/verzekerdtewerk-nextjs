import { getStrapiMedia } from '../lib/media'

import MarkDown from '../processing/MarkDown'

import styles from '../styles/header/HeaderBanner.module.scss'

export default function HeaderBanner({ data, homepage }){
    if(!data){
        return (
            <>
            </>
        )
    }

    if(!data.image){
        return (
            <>
                <div className={styles.HeaderBanner}>
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className={styles.HeaderBanner__inner}>
                                    <MarkDown data={data.content} />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.HeaderBanner__image}></div>
                </div>
            </>
        )  
    }
    
    return (
        <>
            <div className={styles.HeaderBanner}>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className={`${styles.HeaderBanner__inner} ${homepage ? styles.HeaderBanner__innerHomepage : ''}`}>
                                <MarkDown data={data.content} />
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* <img src={getStrapiMedia(data.image)} height={data.image.height} width={data.image.width} className={`${styles.HeaderBanner__image} ${homepage ? styles.HeaderBanner__imageHomepage : ''}`} /> */}
            </div>
        </>
    )    
}