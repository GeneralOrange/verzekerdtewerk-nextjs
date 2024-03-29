import { Container, Row, Col } from 'react-bootstrap'
import Intro from './Intro'
import Cards from './flexcontent/Cards'
import Sidebar from './sidebar/Sidebar'

export default function CardLayout({ data, sidebar, uri }){
    if(!data && !sidebar){
        return null;
    }

    let cards = [];

    if(data.categories){
        cards = [
            ...cards,
            ...data.categories
        ];
    }

    if(data.pages){
        cards = [
            ...cards,
            ...data.pages
        ];
    }

    if(data.specialists){
        cards = [
            ...cards,
            ...data.specialists
        ]
    }

    if(data.jobs){
        cards = [
            ...cards,
            ...data.jobs
        ]
    }

    if(data.costs){
        cards = [
            ...cards,
            ...data.costs
        ]
    }

    if(!data.intro){
        data.intro = data.specialistsOverview ? data.specialistsOverview.intro : undefined;
    }

    if(!data.intro){
        data.intro = data.jobsOverview ? data.jobsOverview.intro : undefined;
    }

    if(!data.intro){
        data.intro = data.costsOverview ? data.costsOverview.intro : undefined;
    }
    
    if(!data.intro){
        data.intro = data.categoriesOverview ? data.categoriesOverview.intro : undefined;
    }

    if(!data.intro){
        data.intro = data.actionsOverview ? data.actionsOverview.intro : undefined;
    }

    if(!sidebar || !sidebar.sidebarBoolean){
        return (
            <>
                <Container>
                    <Row>
                        <Col>
                            <Intro content={ data.intro }/>
                            <Cards data={ cards } uri={ uri }/>
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
                        <Cards data={ cards } uri={ uri }/>
                    </Col>
                    <Col lg={4}>
                        <Sidebar data={ sidebar.rawSidebarData }/>
                    </Col>
                </Row>
            </Container>
        </>
    )
}