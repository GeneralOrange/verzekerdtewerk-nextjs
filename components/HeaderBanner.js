import styles from '../styles/HeaderBanner.module.css'
import MarkDown from '../processing/MarkDown'

const HeaderBanner = ({ data }) =>
{
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
                </div>
            </>
        )  
    }
    
    const ImagePath = process.env.API_ENDPOINT+data.image.url;
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
                
                <img src={ImagePath} height={data.image.height} width={data.image.width} className={styles.HeaderBanner__image} />
            </div>
        </>
    )    
}


export default HeaderBanner;