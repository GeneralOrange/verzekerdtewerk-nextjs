import { useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import Card from './Card'
import CardFilter from '../filters/CardFilter'
import styles from '../../styles/flexcontent/Cards.module.scss'

export default function Cards({ data, uri }){
    if(!data){
        return null;
    }

    let timeout = null;
    const [cards, setCards] = useState(data);

    const filterCards = (e) => {
        clearTimeout(timeout);
        timeout = setTimeout(()=> {
            let hits = [];
            data.forEach(card => {
                const cardName = card.name.toLowerCase();
                const targetValue = e.target.value.toLowerCase();
                if(cardName.includes(targetValue)){
                    hits.push(card);
                }
            });
            setCards(hits);
        },200);
    }

    return (
        <>
            <CardFilter filterCards={filterCards}/>
            <div className={styles.Cards}>
                <Row>
                    {cards.map((value, index) => (
                        <Col key={index} xs={6} xl={3}>
                            <Card data={value} uri={ uri }/>  
                        </Col>
                    ))}
                </Row>
            </div>
        </>
    )
}