import Headings from '../processing/Headings'
import HeaderBanner from '../components/HeaderBanner'
import Menu from '../components/Menu'

export default function Home({ homepage }) {

  return (<>
    <Headings data={homepage.meta_data} />
    <Menu />
    <HeaderBanner data={homepage.header} />
    
  </>)
}

export async function getStaticProps() {
  
  //get homepage from our api
  const resHome = await fetch(process.env.API_ENDPOINT+'/homepage');
  
  const homepage = await resHome.json();

  return {
    props: {
      homepage,
    }
  }
}
