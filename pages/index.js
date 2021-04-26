import { fetchAPI } from '../lib/api'

import Headings from '../processing/Headings'
import HeaderBanner from '../components/HeaderBanner'
import Menu from '../components/Menu'
import FlexLayout from '../components/FlexLayout'
import Footer from '../components/Footer'

export default function Home({ data }) {
  if(!data){
    return (
      <>
      </>
    )
  }
  
  return (
    <>
      <Headings data={data.homepage.meta_data} />
      <Menu data={ data.menu } />
      <HeaderBanner data={data.homepage.header} homepage={true} />
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
