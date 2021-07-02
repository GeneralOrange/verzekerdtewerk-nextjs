import { Container, Row, Col } from 'react-bootstrap'
import CookieConsent from 'react-cookie-consent'
import Link from 'next/link'
import Image from 'next/image'
import FooterSections from './FooterSections'
import cookieStyles from '../../styles/CookieConsent.module.scss'
import styles from '../../styles/footer/Footer.module.scss'

export default function Footer({ data }){
    if(!data){
      return null;
    }

    const date = new Date();
    const year = date.getFullYear();

    return (
      <>
        <CookieConsent
          enableDeclineButton
          containerClasses={ cookieStyles.CookieConsent }
          buttonClasses={ cookieStyles.CookieConsent__buttonAccept }
          declineButtonClasses={ cookieStyles.CookieConsent__buttonDecline }
          contentClasses={ cookieStyles.CookieConsent__content }
          buttonWrapperClasses={ cookieStyles.CookieConsent__buttonWrapper }
          disableStyles={ true }
          location='none'
          buttonText='Accepteren en doorgaan'
          declineButtonText='Nee, bedankt'
        >
          <div><strong>Cookies!</strong></div>
          Wij, en derde partijen, maken op onsze website gebruik van cookies.
          Wij gebruiken cookies voor het bijhouden van statistieken (de cookies van Google Anlytics zijn volledig geanonimiseerd),
          om voorkeuren op te slaan, maar ook voor marketingsdoeleinden. Door op 'Accepteren en doorgaan' te klikkn, ga je akkoord met het
          gebruik van alle cookies zoals omschreven in onze <Link href='/cookie-policy/'>
            <a>
              cookie verklaring
            </a>
          </Link>
        </CookieConsent>
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