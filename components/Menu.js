import Link from 'next/link'
import styles from '../styles/Menu.module.css'

const MenuSections = ({ data }) => {
  if(!data){
    return (
      <>
      </>
    )
  }

  var output = [];

  { data.menu_section.map((data, index) => {
    output.push(
      (
        <>
          <div key={index} className={styles.MenuItem}>
            <div className={styles.MenuItem__name}>
              {data.name}
            </div>
            { SingleMenuSection( { data } ) }
          </div>
        </>
      )
    )
    
  })}

  return output;
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
      <div className={styles.MenuSection}>
        <h2>{data.name}</h2>
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