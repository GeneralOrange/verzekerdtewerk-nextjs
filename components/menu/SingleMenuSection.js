import { useState } from 'react'

import DropDownMenu from './DropDownMenu'

import styles from '../../styles/menu/Menu.module.scss'

export default function SingleMenuSection({ data }){
    if(!data){
      return null;
    }

    const [toggle, setToggle] =  useState(false);

    let timeout = null;

    const handleToggleTrue = () => {
      clearTimeout(timeout);
      setToggle(true);
    }

    const handleToggleFalse = () => {
      timeout = setTimeout(()=> {
        setToggle(false)
      },500)
    }
  
    return (
      <>
        <div className={`${styles.MenuItem__wrapper} ${toggle && styles.MenuItem__wrapperActive}`} onMouseEnter={handleToggleTrue} onMouseLeave={handleToggleFalse}>
          <div id={data.id} className={styles.MenuItem__name}>
            {data.name}
          </div>
            { toggle && <DropDownMenu data={data} /> }     
        </div> 
      </>
    )
    
  }