import { useState, useEffect } from 'react'

import Card from './Card'
import styles from '../../styles/flexcontent/Cards.module.scss'

export default function Cards({ data, uri }){
    if(!data){
        return (
            <>
            </>
        )
    }

    return (
        <>
            <div className={styles.Cards}>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <strong className={styles.Cards__title}>
                                Misschien kunnen we je helpen met:
                            </strong>
                        </div>
                    </div>
                    <div className={`row ${styles.Cards__wrapper}`}>
                        {data.map((value, index) => (
                            <div key={index} className="col-12 col-lg-3">
                                <Card data={value} uri={ uri }/>  
                            </div>
                        ))}
                        
                    </div>
                </div>
            </div>
        </>
    )
}