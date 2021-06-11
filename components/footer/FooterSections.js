import { Col } from 'react-bootstrap'

import FooterSection from './FooterSection'

import styles from '../../styles/footer/Footer.module.scss'

export default function FooterSections({ data }){
    if(!data || !data.footersection){
        return null;
    }
    
    const gridSize = Math.ceil(12 / parseInt(data.footersection.length));       

    return (
        <>
            { data.footersection.map((data, key) => (
                <Col key={key} md={6} lg={gridSize} className={styles.FooterItem}>
                    <div className={styles.FooterItem__name}>
                        {data.name}
                    </div>
                    <FooterSection data={data}/>
                </Col>
            ))}
        </>
    )
}