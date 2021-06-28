import { Row, Col } from 'react-bootstrap'

import Card from './Card'
import styles from '../../styles/flexcontent/Cards.module.scss'

export default function Cards({ data, uri }){
    if(!data){
        return null;
    }

    return (
        <>
            <div className={styles.Cards}>
                <Row>
                    {data.map((value, index) => (
                        <Col key={index} xs={6} xl={3}>
                            <Card data={value} uri={ uri }/>  
                        </Col>
                    ))}
                </Row>
            </div>
        </>
    )
}