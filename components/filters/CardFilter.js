import { Row, Col, InputGroup, FormControl } from 'react-bootstrap'
import { FaSearch } from 'react-icons/fa'
import styles from '../../styles/filters/CardFilter.module.scss'

export default function CardFilter({ filterCards }){

    return (
        <>  
            <Row>
                <Col lg={8}>
                    <InputGroup className={ styles.CardFilter }>
                        <FormControl
                            onChange={ filterCards }
                            className={ styles.CardFilter__input }
                            placeholder="Filter hier..."
                        />
                        <InputGroup.Append>
                            <InputGroup.Text className={ styles.CardFilter__append }>
                                <FaSearch className={ styles.CardFilter__icon }/> Filter
                            </InputGroup.Text>
                        </InputGroup.Append>
                    </InputGroup>
                </Col>
            </Row>
        </>
    )
}