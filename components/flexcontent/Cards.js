import Card from './Card'
import styles from '../../styles/flexcontent/Cards.module.scss'

export default function Cards({ data, uri }){
    if(!data){
        return null;
    }

    return (
        <>
            <div className={styles.Cards}>
                <div className="row">
                    {data.map((value, index) => (
                        <div key={index} className="col-12 col-lg-4">
                            <Card data={value} uri={ uri }/>  
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}