import MarkDown from '../../processing/MarkDown'
import { Card, Accordion } from 'react-bootstrap'
import { FaHome } from 'react-icons/fa'
import styles from '../../styles/flexcontent/AccordionComponent.module.scss'

export default function AccordionComponentItem({ data, eventKey }){
    if(!data){
        return null;
    }

    return (
        <div className={ styles.AccordionComponent__body }>
            <Accordion.Collapse eventKey={ eventKey } className={ styles.AccordionComponent__bodyInner }>
                <Card.Body>
                    <div className={styles.AccordionComponent__step}>Stap: { eventKey }</div>
                    <MarkDown data={data.description}/>
                    <FaHome className={styles.AccordionComponent__icon}/>
                </Card.Body>
            </Accordion.Collapse>
        </div>
    )
}