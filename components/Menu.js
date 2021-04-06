import Link from 'next/link'
import styles from '../styles/menu/Menu.module.css'

const handleToggleSection = (e) => {
  if(!e.target || !e.target.classList.contains('js-MenuItemToggle')){
    return;
  }

  e.target.parentElement.querySelector('.js-MenuSectionToggle').classList.toggle('active');
}

const MenuSections = ({ data }) => {
    if(!data){
        return (
        <>
        </>
        )
    }

    return (
    <>
        { data.menu_section.map((data, index) => (
            <div key={index} className={`${styles.MenuItem} js-MenuItemToggle`} onClick={handleToggleSection}>
                <div className={`${styles.MenuItem__name} js-MenuItemToggle`}>
                  {data.name}
                </div>
                { SingleMenuSection( { data } ) }
            </div>
        ))}
    </>
    )
}

const SingleMenuSection = ({ data }) => {
  if(!data){
    return (
      <>
      </>
    )
  }

  return (
    <>
      <div className={`${styles.MenuSection} js-MenuSectionToggle`}>
        <div>
          {data.content}
        </div>
        {data.pages.map((key, value) => {
          <Link key={key} href={`./${value.slug}`}>{value.name}</Link>
        })}
      </div>
    </>
  )
  
}

const Menu = ({ data }) => {
    if(!data){
        return (
            <>
            </>
        )
    }

    return (
      <>
        <div className={styles.Menu__outer}>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className={styles.Menu}>
                  { MenuSections({ data }) }
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
    
}

export default Menu;