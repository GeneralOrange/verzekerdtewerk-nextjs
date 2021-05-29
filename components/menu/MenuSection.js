import { NavDropdown } from 'react-bootstrap'

import styles from '../../styles/menu/Menu.module.scss'

export default function MenuSection({ component }){
    if(!component){
        return null;
    }

    return (
        <NavDropdown key={component.id} title={component.name} id="basic-nav-dropdown" className={styles.Menu__dropdownToggle}>
            <NavDropdown.Item
                className={styles.Menu__dropdownItem}>
                {component.content}
            </NavDropdown.Item>
            <NavDropdown.Divider />
            
            {component.pages.map(page => (
                <NavDropdown.Item
                    key={page.id}
                    className={styles.Menu__dropdownItem}
                    href={`/${page.slug}/`}>
                    {page.name}
                </NavDropdown.Item>
            ))}

            {component.categories.map(category => (
                <NavDropdown.Item
                    key={category.id}
                    className={styles.Menu__dropdownItem}
                    href={`/categorie/${category.slug}/`}>
                    {category.name}
                </NavDropdown.Item>
            ))}
        </NavDropdown>
    )
}