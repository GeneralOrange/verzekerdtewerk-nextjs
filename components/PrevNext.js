import Link from 'next/link'
import { FaChevronLeft } from 'react-icons/fa'
import { FaChevronRight } from 'react-icons/fa'
import { routerException } from '../lib/_helpers'
import { Container, Row, Col } from 'react-bootstrap'
import styles from '../styles/PrevNext.module.scss'

export default function PrevNext({ data, pageType, nextValue }){
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
        
                                { nextValue && <div className={ styles.PrevNext__next }>
                                    <Link href={`/specialisten/${data.slug}/kosten/`}>
                                        <a>
                                            Door naar kosten <FaChevronRight/>
                                        </a>
                                    </Link>
                                </div> }
                            </div>
                        </Col>
                    </Row>
                </Container>
            )
            break;
        case 'job':
            return (
                <Container>
                    <Row>
                        <Col>
                            <div className={ styles.PrevNext }>
                                <div className={ styles.PrevNext__prev }>
                                    <Link href="/werkzaamheden/">
                                        <a>
                                            <FaChevronLeft/> Terug naar werkzaamheden
                                        </a>
                                    </Link>
                                </div>
        
                                { nextValue && <div className={ styles.PrevNext__next }>
                                    <Link href={`/werkzaamheden/${data.slug}/kosten/`}>
                                        <a>
                                            Door naar kosten <FaChevronRight/>
                                        </a>
                                    </Link>
                                </div> }
                            </div>
                        </Col>
                    </Row>
                </Container>
            )
            break;
        case 'cost':
            if(data.specialist){
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
            } else if(data.job){
                const enableRouter = routerException(data.job.slug);
                const prevLink = enableRouter ? `/werkzaamheden/` : `/werkzaamheden/${data.job.slug}/`;
                const prevText = enableRouter ? `Terug naar werkzaamheden` : `Terug naar werkzaamheid`;
                return (
                    <Container>
                        <Row>
                            <Col>
                                <div className={ styles.PrevNext }>
                                    <div className={ styles.PrevNext__prev }>
                                        <Link href={ prevLink }>
                                            <a>
                                                <FaChevronLeft/> { prevText }
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                )
            }

            return null;
            
            break;
        default:
            //
            break;
    }
}