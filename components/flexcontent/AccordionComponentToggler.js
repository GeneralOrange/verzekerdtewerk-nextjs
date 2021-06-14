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

    const handleClick = (e) => {
        e.preventDefault();

        let clickTarget = e.target;

        while(!clickTarget.classList.contains('card-header')){
            clickTarget = clickTarget.parentElement;
        }

        const targetId = parseInt(clickTarget.id);

        if(active == targetId){
            setActive(false);
        }

        if(active != targetId){
            setActive(targetId);
        }

        if(active != targetId && eventKey == targetId){
            setActive(false);
        }

        if(active === false){
            setActive(targetId);
        }
    }

    return (
        <Accordion.Toggle
            as={Card.Header}
            eventKey={ eventKey }
            id={ eventKey }
            className={ classNames }
            onClick={(e)=> handleClick(e)}>
                <div className={ styles.AccordionComponent__headerTitle }>{ data.title }</div>
                <div className={ styles.AccordionComponent__headerSubTitle }>{ data.subtitle }</div>
        </Accordion.Toggle>    
    );
}