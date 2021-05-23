import { useState, useEffect } from 'react'
import Image from 'next/image'

import { Container, Navbar, Nav } from 'react-bootstrap'

import BacktoTop from '../BacktoTop'
import MenuComponents from './MenuComponents'

import styles from '../../styles/menu/Menu.module.scss'

export default function Menu({ data }){
    if(!data){
        return (
            <>
            </>
        )
    }

    const [isScrolling, setScrollMenu] = useState(false);
    const [BacktoTopBoolean, setBacktoTop] = useState(false);

    const handleScroll = () => {
      if(scrollY > 150){
        setScrollMenu(true);
        setBacktoTop(true);
      } else if(scrollY < 50) {
        setScrollMenu(false);
        setBacktoTop(false);
      }
    }

    useEffect(()=> {
      window.addEventListener('scroll', handleScroll);

      return () => {
        window.removeEventListener('scroll', handleScroll);
      }
    })

    let imageProps = {
      w: 90,
      h: 90
    }

    if(isScrolling){
      imageProps.w = 50;
      imageProps.h = 50;
    }

    return (
      <Navbar className={styles.Menu} sticky="top" expand="lg">
        <Container>
          <Navbar.Brand href="/">
            <Image
              src="/logo.svg"
              alt="Logo"
              width={imageProps.w}
              height={imageProps.h}
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <MenuComponents components={ data.menu_components } />
            </Nav>
          </Navbar.Collapse>
        </Container>
        { BacktoTopBoolean && <BacktoTop />}
      </Navbar>
    )
    
}