import SingleMenuSection from './SingleMenuSection'

import styles from '../../styles/menu/Menu.module.css'

export default function MenuSections({ data }){
    if(!data || !data.menu_section){
        return (
        <>
        </>
        )
    }

    return (
      <>
          { data.menu_section.map(data => (
              <div key={data.id}  className={styles.MenuItem}>
                  <SingleMenuSection data={ data } />
              </div>
          ))}
      </>
    )
}