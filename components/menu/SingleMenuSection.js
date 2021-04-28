import { useState } from 'react'

import DropDownMenu from './DropDownMenu'

import styles from '../../styles/menu/Menu.module.scss'

export default function SingleMenuSection({ data }){
    if(!data){
      return (
        <>
        </>
      )
    }

    const [toggle, setToggle] =  useState(false);
  
    return (
      <>
        <div className={`${styles.MenuItem__wrapper} ${toggle && styles.MenuItem__wrapperActive}`} onMouseEnter={()=> setToggle(true)} onMouseLeave={()=> setToggle(false)}>
          <div id={data.id} className={styles.MenuItem__name}>
            {data.name}
          </div>
            { toggle && <DropDownMenu data={data} /> }     
        </div> 
      </>
    )
    
  }