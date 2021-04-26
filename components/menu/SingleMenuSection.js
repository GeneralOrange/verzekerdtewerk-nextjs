import { useState } from 'react'

import DropDownMenu from './DropDownMenu'

import styles from '../../styles/menu/Menu.module.css'

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
        <div id={data.id} className={styles.MenuItem__name} onClick={()=> setToggle(!toggle)}>
          {data.name}
        </div>

        { toggle && <DropDownMenu data={data} /> }
        
      </>
    )
    
  }