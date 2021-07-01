import { Container, Row, Col } from 'react-bootstrap'
import ActionGrid from './actions/ActionGrid'
import Sidebar from './sidebar/Sidebar'

export default function ActionLayout({ data, sidebar }){
    if(!data && !sidebar){
        return null;
    }

    if(!sidebar.sidebarBoolean){
        return (
            <>
                <Container>
                    <Row>
                        <Col>
                            <ActionGrid actions={ data }/>
                        </Col>
                    </Row>
                </Container>
            </>
        )
    }

    return (
        <>
            <Container>
                <Row>
                    <Col lg={8}>
                        <ActionGrid actions={data}/>
                    </Col>
                    <Col lg={4}>
                        <Sidebar data={sidebar.rawSidebarData}/>
                    </Col>
                </Row>
            </Container>
        </>
    )
}