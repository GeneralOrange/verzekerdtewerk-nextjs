import { Col } from 'react-bootstrap'

import SingleFooterSection from './SingleFooterSection'

import styles from '../../styles/footer/Footer.module.scss'

export default function FooterSections({ data }){
    if(!data.footersection){
        return null;
    }
    
    const gridSize = Math.ceil(12 / parseInt(data.footersection.length));       

    return (
    <>
        { data.footersection.map((data, index) => (
            <Col key={index} md={6} lg={gridSize} className={styles.FooterItem}>
                <div className={styles.FooterItem__name}>
                  {data.name}
                </div>
                <SingleFooterSection data={data}/>
            </Col>
        ))}
    </>
    )
}