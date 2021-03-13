import styles from '../styles/HeaderBanner.module.css'

function HeaderBanner({ params })
{
    const ImagePath = process.env.API_ENDPOINT+params.image.url;
    return (
        <>
            <div className={styles.HeaderBanner}>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className={styles.HeaderBanner__inner}>
                                {params.content}
                            </div>
                        </div>
                    </div>
                </div>
                
                <img src={ImagePath} height={params.image.height} width={params.image.width} className={styles.HeaderBanner__image} />
            </div>
        </>
    )    
}


export default HeaderBanner;