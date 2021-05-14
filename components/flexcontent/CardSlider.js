import { useState, useEffect } from 'react'

import Card from './Card'
import styles from '../../styles/flexcontent/CardSlider.module.scss'

export default function CardSlider({ data, uri }){
    if(!data || data.length < 1){
        return null;
    }

    return (
        <>
            <div className={styles.CardSlider}>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <strong className={styles.CardSlider__title}>
                                Misschien kunnen we je helpen met:
                            </strong>
                        </div>
                    </div>
                    <div className={styles.CardSlider__wrapper}>
                        {data.map((value, index) => (
                            <div key={index} className={styles.CardSlider__item}>
                                <Card data={value} uri={ uri }/>  
                            </div>
                        ))}
                        
                    </div>
                </div>
            </div>
        </>
    )
}