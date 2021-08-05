import { fetchAPI } from '../lib/api'

import Headings from '../processing/metaData/Headings'
import HeaderBanner from '../components/HeaderBanner'
import Menu from '../components/menu/Menu'
import FlexLayout from '../components/FlexLayout'
import Footer from '../components/footer/Footer'

export default function Home({ data }) {
  if(!data){
    return null;
  }
  
  return (
    <>
      <Headings data={data.homepage} />
      <Menu data={ data.menu } />
      <HeaderBanner data={data.homepage.header} homepage={true} asHeader={ true } />
      <FlexLayout data={data.homepage.flexcontent} sidebar={false} />
      <Footer data={data.footer}/>
    </>
  )
}

export async function getStaticProps() {
  
  //get homepage from our api
  const homepage = await fetchAPI('/homepage');
  const menu = await fetchAPI('/menu');
  const footer = await fetchAPI('/footer');

  const data = {
    homepage,
    menu,
    footer,
  }

  return {
    props: {
      data,
    }
  }
}
