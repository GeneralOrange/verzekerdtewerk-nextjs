import MarkDown from '../../processing/MarkDown'
import { Card, Accordion } from 'react-bootstrap'
import styles from '../../styles/flexcontent/AccordionComponent.module.scss'

export default function AccordionComponentItem({ data, eventKey }){
    if(!data){
        return null;
    }

    return (
        <div className={ styles.AccordionComponent__body }>
            <Accordion.Collapse eventKey={ eventKey } className={ styles.AccordionComponent__bodyInner }>
                <Card.Body>
                    <MarkDown data={data.description}/>
                </Card.Body>
            </Accordion.Collapse>
        </div>
    )
}