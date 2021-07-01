import { useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import ActionItem from './ActionItem'
import ActionFilter from '../filters/ActionFilter'
import styles from '../../styles/actions/ActionGrid.module.scss'

export default function ActionGrid({ actions }){
    if(!actions || actions.length < 1){
        return null;
    }

    let timeout = null;
    const [actionsFiltered, setActionsFiltered] = useState(actions);
    const [actionsCount, setActionsCount ] = useState(parseInt(actions.length));

    const filterActions = (e) => {
        clearTimeout(timeout);
        timeout = setTimeout(()=> {
            let hits = [];
            actions.forEach(action => {
                const actionName = action.title.toLowerCase();
                const targetValue = e.target.value.toLowerCase();
                if(actionName.includes(targetValue)){
                    hits.push(action);
                }
            });
            setActionsFiltered(hits);
            setActionsCount(parseInt(hits.length));
        },200);
    }

    return (
        <>
            <ActionFilter filterActions={filterActions} actionsCount={ actionsCount }/>
            <div className={ styles.ActionGrid }>
                <Row>
                    {actionsFiltered && actionsFiltered.map((action, index) => (
                        <Col key={ index } lg={6}>
                            <ActionItem action={ action } withRank={false}/>
                        </Col>
                    ))}

                    {actionsFiltered.length < 1 && 
                        <Col>
                            Geen resultaten
                        </Col>
                    }
                </Row>
            </div>
        </>
    );
}