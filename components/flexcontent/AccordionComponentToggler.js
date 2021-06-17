import { Card, Accordion } from 'react-bootstrap'
import styles from '../../styles/flexcontent/AccordionComponent.module.scss'

export default function AccordionComponentToggler({ data, eventKey, activeKey }){
    if(!data){
        return null;
    }

    let classNames = [
        styles.AccordionComponent__header
    ];

    if(activeKey === eventKey){
        classNames = [
            ...classNames,
            styles.AccordionComponent__headerActive
        ] 
    }

    return (
        <Accordion.Toggle
            as={Card.Header}
            eventKey={ eventKey }
            id={ eventKey }
            className={ classNames }>
                <div className={ styles.AccordionComponent__headerTitle }>{ data.title }</div>
                <div className={ styles.AccordionComponent__headerSubTitle }>{ data.subtitle }</div>
        </Accordion.Toggle>    
    );
}