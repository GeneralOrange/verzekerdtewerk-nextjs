import { Container, Row, Col } from 'react-bootstrap'
import Intro from './Intro'
import Cards from './flexcontent/Cards'
import Sidebar from './Sidebar'

export default function CardLayout({ data, sidebar, uri }){
    if(!data && !sidebar){
        return null;
    }

    if(!sidebar || !sidebar.sidebarBoolean){
        return (
            <>
                <Container>
                    <Row>
                        <Col>
                            <Intro content={ data.intro }/>
                            <Cards data={ data.pages } uri={ uri }/>
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
                        <Intro content={ data.intro }/>
                        <Cards data={ data.pages } uri={ uri }/>
                    </Col>
                    <Col lg={4}>
                        <Sidebar data={ sidebar.rawSidebarData }/>
                    </Col>
                </Row>
            </Container>
        </>
    )
}