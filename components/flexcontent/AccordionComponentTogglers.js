import AccordionComponentToggler from './AccordionComponentToggler';
import styles from '../../styles/flexcontent/AccordionComponent.module.scss'

export default function AccordionComponentTogglers({ data }){
    if(!data){
        return null;
    }

    return (
        <div className={ styles.AccordionComponent__toggleList }>
            {data.accordion_items.map((accordion_item, key) => (
                <AccordionComponentToggler
                    data={accordion_item}
                    key={key}
                    eventKey={key + 1}/>
            ))}
        </div>
    );
}