import Link from 'next/link'
import { FaChevronLeft } from 'react-icons/fa'
import { FaChevronRight } from 'react-icons/fa'
import { Container, Row, Col } from 'react-bootstrap'
import styles from '../styles/PrevNext.module.scss'

export default function PrevNext({ data, pageType }){
    if(!data){
        return null;
    }

    switch(pageType){
        case 'specialist':
            return (
                <Container>
                    <Row>
                        <Col>
                            <div className={ styles.PrevNext }>
                                <div className={ styles.PrevNext__prev }>
                                    <Link href="/specialisten/">
                                        <a>
                                            <FaChevronLeft/> Terug naar Specialisten
                                        </a>
                                    </Link>
                                </div>
        
                                <div className={ styles.PrevNext__next }>
                                    <Link href={`/specialisten/${data.slug}/kosten/`}>
                                        <a>
                                            Door naar kosten <FaChevronRight/>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            )
            break;
        case 'cost':
            return (
                <Container>
                    <Row>
                        <Col>
                            <div className={ styles.PrevNext }>
                                <div className={ styles.PrevNext__prev }>
                                    <Link href={`/specialisten/${data.specialist.slug}/`}>
                                        <a>
                                            <FaChevronLeft/> Terug naar Specialist
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            )
            break;
        default:
            //
            break;
    }
}