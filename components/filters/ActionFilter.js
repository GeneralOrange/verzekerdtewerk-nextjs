import { Row, Col, InputGroup, FormControl } from 'react-bootstrap'
import { FaSearch } from 'react-icons/fa'
import styles from '../../styles/filters/ActionFilter.module.scss'

export default function ActionFilter({ filterActions, actionsCount }){

    return (
        <>  
            <Row>
                <Col lg={8}>
                    <InputGroup className={ styles.ActionFilter }>
                        <FormControl
                            onChange={ filterActions }
                            className={ styles.ActionFilter__input }
                            placeholder="Filter hier..."
                        />
                        <InputGroup.Append>
                            <InputGroup.Text className={ styles.ActionFilter__append }>
                                <FaSearch className={ styles.ActionFilter__icon }/> Filter
                            </InputGroup.Text>
                        </InputGroup.Append>
                    </InputGroup>
                </Col>
            </Row>
            <Row>
                <Col>
                    <div className={ styles.ActionFilter__description }>Resultaten: ({ actionsCount })</div>
                </Col>
            </Row>
        </>
    )
}