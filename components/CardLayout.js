import { Container, Row, Col } from 'react-bootstrap'
import Cards from './flexcontent/Cards'
import Sidebar from './Sidebar'

export default function CardLayout({ data, sidebar, uri }){
    if(!data && !sidebar){
        return (
            <>
            </>
        )
    }

    if(!sidebar || !sidebar.sidebarBoolean){
        return (
            <>
                <Container>
                    <Row>
                        <Col>
                            <Cards data={data} uri={ uri }/>
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
                        <Cards data={data} uri={ uri }/>
                    </Col>
                    <Col lg={4}>
                        <Sidebar data={sidebar.rawSidebarData}/>
                    </Col>
                </Row>
            </Container>
        </>
    )
}