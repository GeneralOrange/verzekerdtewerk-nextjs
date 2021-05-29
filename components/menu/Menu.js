import { useState, useEffect } from 'react'
import Image from 'next/image'

import { Container, Navbar, Nav } from 'react-bootstrap'

import BacktoTop from '../BacktoTop'
import MenuComponents from './MenuComponents'

import styles from '../../styles/menu/Menu.module.scss'

export default function Menu({ data }){
    if(!data){
        return null;
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

    let MenuClass = styles.MenuNotScrolling;
    let logoSrc = '/logo_white_large.png';

    let imageProps = {
      w: 120,
      h: 80
    }

    if(isScrolling){
      imageProps.w = 50;
      imageProps.h = 50;
      MenuClass = styles.Menu;
      logoSrc = '/logo.svg';
    }

    return (
      <Navbar className={MenuClass} sticky="top" expand="lg">
        <Container>
          <Navbar.Brand href="/">
            <Image
              src={logoSrc}
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