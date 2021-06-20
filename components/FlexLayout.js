import { Container, Row, Col } from 'react-bootstrap'

import FlexContentController from './flexcontent/FlexContentController'
import Sidebar from './sidebar/Sidebar'

export default function FlexLayout({ data, sidebar }){
    if(!data && !sidebar){
        return null;
    }

    if(!sidebar.sidebarBoolean){
        return (
            <>
                <Container>
                    <Row>
                        <Col>
                            <FlexContentController data={data}/>
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
                        <FlexContentController data={data}/>
                    </Col>
                    <Col lg={4}>
                        <Sidebar data={sidebar.rawSidebarData}/>
                    </Col>
                </Row>
            </Container>
        </>
    )
}