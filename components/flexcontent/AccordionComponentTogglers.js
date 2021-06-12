import { Card, Accordion } from 'react-bootstrap'
import styles from '../../styles/flexcontent/AccordionComponent.module.scss'

export default function AccordionComponentTogglers({ data }){
    if(!data){
        return null;
    }

    return (
        <div className={ styles.AccordionComponent__toggleList }>
            { handleTogglers(data) }
        </div>
    );
}

function handleTogglers(data){
    return data.accordion_items.map((accordion_item, key) => (      
        <Accordion.Toggle key={key} as={Card.Header} onClick={()=> console.log(Accordion)} eventKey={ key + 1 } className={ styles.AccordionComponent__header }>
            <div className={ styles.AccordionComponent__headerTitle }>{ accordion_item.title }</div>
            <div className={ styles.AccordionComponent__headerSubTitle }>{ accordion_item.subtitle }</div>
        </Accordion.Toggle>     
    ));
}