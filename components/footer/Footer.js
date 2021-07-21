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
          <div className={ cookieStyles.CookieConsent__title }>
            <strong>Beste bezoeker!</strong>
          </div>
          Verzekerd te werk gebruikt analytische cookies om iedere gebruiker de optimaalste gebruikerservaring te bieden en functionele cookies om de gewenste ingestelde voorkeuren op te slaan. Hiernaast worden er cookies van derde partijen geplaatst om gepersonaliseerde advertenties te kunnen tonen en de inhoud van de advertenties op jouw voorkeuren af te stemmen. Er worden cookies geplaatst door sociale media netwerken. Jouw internetgedrag kan door deze derden gevolgd worden. Door op zelf instellen te klikken kunt u hier meer over lezen en uw voorkeuren aan te passen. Door op `Accepteren´ te klikken gaat u akkoord met het gebruik van alle cookies zoals omschreven staat in onze  <Link href='/cookie-policy/'>
            <a>
              cookie policy
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