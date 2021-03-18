import Headings from '../processing/Headings'
import HeaderBanner from '../components/HeaderBanner'
import Menu from '../components/Menu'

export default function Home({ homepage }) {
  
  return (<>
    <Headings data={homepage.meta_data} />
    <Menu data={ menu } />
    <HeaderBanner data={homepage.header} />
    
  </>)
}

export async function getStaticProps() {
  
  //get homepage from our api
  const resHome = await fetch(process.env.API_ENDPOINT+'/homepage');
  const resMenu = await fetch(process.env.API_ENDPOINT+'/menu');
  
  const homepage = await resHome.json();
  const menu = await resMenu.json();

  return {
    props: {
      homepage,
      menu
    },
  }
}
