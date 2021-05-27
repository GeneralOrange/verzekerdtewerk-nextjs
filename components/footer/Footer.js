import { Container, Row, Col } from 'react-bootstrap'

import FooterSections from './FooterSections'

import Link from 'next/link'
import Image from 'next/image'
import styles from '../../styles/footer/Footer.module.scss'



export default function Footer({ data }){
    if(!data){
      return null;
    }

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
        </div>
      </>
    )
    
}