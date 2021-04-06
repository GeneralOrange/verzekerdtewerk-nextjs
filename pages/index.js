import Headings from '../processing/Headings'
import HeaderBanner from '../components/HeaderBanner'
import Menu from '../components/Menu'

export default function Home({ data }) {

  return (
    <>
      <Headings data={data.homepage.meta_data} />
      <Menu data={ data.menu }/>
      <HeaderBanner data={data.homepage.header} />
    </>
  )
}

export async function getStaticProps() {
  
  //get homepage from our api
  const resHome = await fetch(`${process.env.API_ENDPOINT}/homepage`);
  const resMenu = await fetch(`${process.env.API_ENDPOINT}/menu`);
  
  const homepage = await resHome.json();
  const menu = await resMenu.json();

  const data = {
    homepage,
    menu
  }

  return {
    props: {
      data,
    }
  }
}
