import Content from './Content'
import Usp from './Usp'
import AccordionComponent from './AccordionComponent'
import CardSlider from './CardSlider'
import styles from '../../styles/flexcontent/FlexContent.module.scss'

export default function FlexContentController({ data }){
    if(!data){
        return null;
    }

    let grid = `col-12`;

    return (
        <div className={styles.FlexContent}>    
            <div className="row">
                {data.map((component, index) => (
                    <div key={index} className={`${grid}${component.width ? ` col-lg-${component.width}` : ``}`}>
                        {FlexContentDistrubutor({ component })}
                    </div>
                ))}
            </div>
        </div>
    )
}

function FlexContentDistrubutor({ component }){
    switch(component.__component){
        case 'custom.content':
            return (
                <Content data={ component }/>
            )
            break;
        case 'custom.usp':
            return (
                <Usp uspData={ component }/>
            )
            break;
        case 'custom.cards':
            let cards = [];

            if(!component.pages && !component.categories){
                return null;
            }

            if(component.pages){
                component.pages.map(page => page.entity_type = 'page');
                cards = [
                    ...cards,
                    ...component.pages
                ];
            }

            if(component.categories){
                component.categories.map(category => category.entity_type = 'category');
                cards = [
                    ...cards,
                    ...component.categories
                ];
            }

            return (
                <CardSlider data={ cards }/>
            )
            break;
        case 'custom.mailchimp-form':
            return null;
            break;
        case 'custom.accordion':
            return (
                <AccordionComponent data={ component }/>
            )
            break;
        default: 
            return null;
            break;
    }
}