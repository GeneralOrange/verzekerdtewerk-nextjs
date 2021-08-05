import Image from 'next/image'
import { getStrapiMedia } from '../lib/media'
import { Container, Row, Col } from 'react-bootstrap'
import { FaHome } from 'react-icons/fa'
import Button from '../components/atoms/Button'
import MarkDown from '../processing/MarkDown'
import { ClassNames } from '../lib/defaultData'
import styles from '../styles/header/HeaderBanner.module.scss'

export default function HeaderBanner({ data, homepage, asHeader }){
    if(!data){
        return null;
    }

    let classnames = [
        styles.HeaderBanner
    ];

    let innerClassnames = [
        styles.HeaderBanner__inner
    ];

    if(homepage){
        classnames.push(styles.HeaderBannerHomepage);
        innerClassnames.push(styles.HeaderBanner__innerHomepage);
    }

    if(!asHeader){
        classnames.push(styles.HeaderBannerNoHeader);
    }

    const processedClassnames = ClassNames(classnames);
    const processedInnerClassnames = ClassNames(innerClassnames);

    if(!data.image){
        return (
            <>
                <div className={processedClassnames}>
                    <Container>
                        <Row>
                            <Col>
                                <div className={processedInnerClassnames}>
                                    <MarkDown data={data.content} />
                                    {
                                        homepage &&
                                        <div className={styles.HeaderBanner__buttonWrapper}>
                                            <Button
                                                link="/specialisten/">
                                                Specialisten
                                            </Button>
                                            <Button
                                                link="/werkzaamheden/">
                                                Werkzaamheden
                                            </Button>
                                            <Button
                                                link="/opdracht-plaatsen/"
                                                scheme="green">
                                                Opdracht plaatsen
                                            </Button>
                                        </div>
                                    }
                                    { homepage && <FaHome className={styles.HeaderBannerHomepage__icon} /> }
                                </div>
                            </Col>
                        </Row>
                    </Container>

                    <div className={styles.HeaderBanner__image}></div>
                </div>
            </>
        )  
    }
    
    return (
        <>
            <div className={processedClassnames}>
                <Container>
                    <Row>
                        <Col>
                            <div className={processedInnerClassnames}>
                                <MarkDown data={data.content} />
                                {
                                    homepage &&
                                    <div className={styles.HeaderBanner__buttonWrapper}>
                                        <Button
                                            link="/specialisten/">
                                            Specialisten
                                        </Button>
                                        <Button
                                            link="/werkzaamheden/">
                                            Werkzaamheden
                                        </Button>
                                        <Button
                                            link="/opdracht-plaatsen/"
                                            scheme="green">
                                            Opdracht plaatsen
                                        </Button>
                                    </div>
                                }
                                { homepage && <FaHome className={styles.HeaderBannerHomepage__icon} /> }
                            </div>
                        </Col>
                    </Row>
                </Container>
                
                <Image
                    src={getStrapiMedia(data.image)}
                    layout="fill"
                    priority={true}
                    objectFit='cover'
                    objectPosition='center'
                    className={`${styles.HeaderBanner__image} ${homepage ? styles.HeaderBanner__imageHomepage : ''}`}
                    alt=""/>
            </div>
        </>
    )    
}