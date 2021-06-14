import { useState } from 'react'
import { Card, Accordion } from 'react-bootstrap'
import styles from '../../styles/flexcontent/AccordionComponent.module.scss'

export default function AccordionComponentToggler({ data, eventKey }){
    if(!data){
        return null;
    }

    const [active, setActive] = useState(1);

    let classNames = [
        styles.AccordionComponent__header
    ];

    if(active === eventKey){
        classNames = [
            ...classNames,
            styles.AccordionComponent__headerActive
        ]
    }

    return (
        <Accordion.Toggle
            as={Card.Header}
            eventKey={ eventKey }
            className={classNames}
            onClick={()=>{}}>
                <div className={ styles.AccordionComponent__headerTitle }>{ data.title }</div>
                <div className={ styles.AccordionComponent__headerSubTitle }>{ data.subtitle }</div>
        </Accordion.Toggle>    
    );
}