import Link from 'next/link'

const Menu = ({ menu }) => {
    if(!menu){
        return (
            <>
            </>
        )
    }

    console.log(menu.menu_section);
    
}

export async function getStaticProps() {
    //get homepage from our api
  const resMenu = await fetch(process.env.API_ENDPOINT+'/menu');
  
  const menu = await resMenu.json();

  return {
    props: {
      menu,
    }
  }
}

export default Menu;