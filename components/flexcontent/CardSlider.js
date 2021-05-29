import Card from './Card'
import { Container } from 'react-bootstrap'
import styles from '../../styles/flexcontent/CardSlider.module.scss'

export default function CardSlider({ data, uri }){
    if(!data || data.length < 1){
        return null;
    }

    return (
        <>
            <div className={styles.CardSlider}>
                <Container>
                    <div className={styles.CardSlider__wrapper}>
                        {data.map((value, index) => (
                            <div key={index} className={styles.CardSlider__item}>
                                <Card data={value} uri={ uri }/>  
                            </div>
                        ))}
                        
                    </div>
                </Container>
            </div>
        </>
    )
}