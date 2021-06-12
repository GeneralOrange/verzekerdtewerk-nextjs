import { useState } from 'react'
import { Container, Row, Col, Accordion } from 'react-bootstrap'
import AccordionComponentItem from './AccordionComponentItem'
import AccordionComponentTogglers from './AccordionComponentTogglers'
import styles from '../../styles/flexcontent/AccordionComponent.module.scss'

export default function AccordionComponent({ data }){
    if(!data || data.accordion_items.length < 1){
        return null;
    }

    const [activeKey, setActivekey] = useState(1);

    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <Accordion className={ styles.AccordionComponent } defaultActiveKey={activeKey}>
                            <AccordionComponentTogglers data={ data }/>
                            {data.accordion_items.map((accordionItem, key) => (
                                <AccordionComponentItem key={key} eventKey={key + 1} data={accordionItem} />
                            ))}
                        </Accordion>
                    </Col>
                </Row>
            </Container>
        </>
    )
}