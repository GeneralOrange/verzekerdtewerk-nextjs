import { getStrapiMedia } from '../lib/media'

import { FaHome } from 'react-icons/fa'
import MarkDown from '../processing/MarkDown'
import SearchForm from '../components/atoms/SearchForm'

import styles from '../styles/header/HeaderBanner.module.scss'

export default function HeaderBanner({ data, homepage }){
    if(!data){
        return null;
    }

    if(!data.image){
        return (
            <>
                <div className={`${styles.HeaderBanner} ${homepage ? styles.HeaderBannerHomepage : ''}`}>
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className={`${styles.HeaderBanner__inner} ${homepage ? styles.HeaderBanner__innerHomepage : ''}`}>
                                    <MarkDown data={data.content} />
                                    { homepage && <SearchForm/> }
                                    { homepage && <FaHome className={styles.HeaderBannerHomepage__icon} /> }
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
            <div className={`${styles.HeaderBanner} ${homepage ? styles.HeaderBannerHomepage : ''}`}>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className={`${styles.HeaderBanner__inner} ${homepage ? styles.HeaderBanner__innerHomepage : ''}`}>
                                <MarkDown data={data.content} />
                                { homepage && <SearchForm/> }
                                { homepage && <FaHome className={styles.HeaderBannerHomepage__icon} /> }
                            </div>
                        </div>
                    </div>
                </div>
                
                <img src={getStrapiMedia(data.image)} height={data.image.height} width={data.image.width} className={`${styles.HeaderBanner__image} ${homepage ? styles.HeaderBanner__imageHomepage : ''}`} alt=""/>
            </div>
        </>
    )    
}