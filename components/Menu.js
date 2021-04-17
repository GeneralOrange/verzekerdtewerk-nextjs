import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/menu/Menu.module.css'

function handleToggleSection(e){
  if(!e.target || !e.target.classList.contains('js-MenuItemToggle')){
    return;
  }

  e.target.parentElement.querySelector('.js-MenuSectionToggle').classList.toggle('active');
}

function MenuSections({ data }){
    if(!data || !data.menu_section){
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

function SingleMenuSection({ data }){
  if(!data){
    return (
      <>
      </>
    )
  }

  return (
    <>
      <div className={`${styles.MenuSection} js-MenuSectionToggle`}>
        <div className={styles.MenuSection__innerText}>
          {data.content}
        </div>

        <ul className={styles.MenuSection__list}>
          {data.pages.map((value, key) => (
            
            <Link
              key={key}
              href={`/${value.slug}`}
            >
              <a>
                <li>
                  {value.name}
                </li>
              </a>
            </Link>
            
          ))}
        </ul>

      </div>
    </>
  )
  
}

export default function Menu({ data }){
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
              <div className="col-12 col-lg-6">
                <Link href="/">
                  <div className={styles.Logo}>
                    <Image
                      src="/logo.svg"
                      alt="Logo"
                      width="90"
                      height="90"
                    />
                  </div>
                </Link>
              </div>
              <div className="col-12 col-lg-6">
                  <Link href="#">
                    <div className={styles.CTA}>Nieuwe klus</div>
                  </Link>
              </div>
            </div>
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