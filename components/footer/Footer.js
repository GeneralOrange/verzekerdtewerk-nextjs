import { Container, Row, Col } from 'react-bootstrap'

import Link from 'next/link'
import Image from 'next/image'
import FooterSections from './FooterSections'
import styles from '../../styles/footer/Footer.module.scss'

export default function Footer({ data }){
    if(!data){
      return null;
    }

    const date = new Date();
    const year = date.getFullYear();

    return (
      <>
        <div className={styles.Footer}>
          <Container>
            <div className={styles.Footer__top}>
              <Row>
                <Col>
                  <Link href="/">
                      <div className={styles.Logo}>
                          <Image
                          src="/logo_small_icon_only.png"
                          alt="Logo"
                          width="60"
                          height="60"
                          />
                      </div>
                  </Link>
                  <div className={styles.Footer__title}>
                      Voor uw klus!
                  </div>
                </Col>
              </Row>
            </div>
            <div className={styles.Footer__bottom}>
              <Row>
                <FooterSections data={data} />
              </Row>
            </div>
          </Container>
          <div className={styles.Footer__copyright}>
            <Container>
              <Row>
                <Col>
                  &copy; 2020 - {year} Verzekerdtewerk
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </>
    )
    
}