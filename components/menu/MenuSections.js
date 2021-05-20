import SingleMenuSection from './SingleMenuSection'

import { Nav, NavDropdown } from 'react-bootstrap'

import styles from '../../styles/menu/Menu.module.scss'

export default function MenuSections({ data }){
    if(!data || !data.menu_section){
        return null;
    }

    // return (
    //   <>
    //       { data.menu_section.map(data => (
    //           <div key={data.id}  className={styles.MenuItem}>
    //               <SingleMenuSection data={ data } />
    //           </div>
    //       ))}
    //   </>
    // )

    return (
        <Nav className="mr-auto">
            { data.menu_section.map(data => (
                <NavDropdown key={data.id} title={data.name} id="basic-nav-dropdown" className={styles.Menu__item}>
                    <SingleMenuSection data={ data } />
                </NavDropdown>
            ))}
        </Nav>
    )
}