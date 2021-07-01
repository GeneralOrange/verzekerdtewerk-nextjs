import { Col, Row } from 'react-bootstrap'
import Content from './Content'
import Usp from './Usp'
import AccordionComponent from './AccordionComponent'
import CardSlider from './CardSlider'
import styles from '../../styles/flexcontent/FlexContent.module.scss'

export default function FlexContentController({ data }){
    if(!data){
        return null;
    }

    return (
        <div className={styles.FlexContent}>    
            <Row>
                {data.map((component, index) => (
                    <Col key={index} lg={component.width ? component.width : 12}>
                        {FlexContentDistrubutor({ component })}
                    </Col>
                ))}
            </Row>
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

            if(!component.pages && !component.categories && !component.jobs && !component.specialists && !component.costs){
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

            if(component.jobs){
                component.jobs.map(job => job.entity_type = 'job');
                cards = [
                    ...cards,
                    ...component.jobs
                ];
            }

            if(component.specialists){
                component.specialists.map(specialist => specialist.entity_type = 'specialist');
                cards = [
                    ...cards,
                    ...component.specialists
                ];
            }

            if(component.costs){
                component.costs.map(cost => cost.entity_type = 'cost');
                cards = [
                    ...cards,
                    ...component.costs
                ]
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