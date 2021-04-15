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
      <Menu data={ data.menu }/>
      <HeaderBanner data={data.homepage.header} homepage={true} />
      <FlexLayout data={data.homepage.flexcontent} sidebar={false} />
      <Footer data={data.footer}/>
    </>
  )
}

export async function getStaticProps() {
  
  //get homepage from our api
  const resHome = await fetch(`${process.env.API_ENDPOINT}/homepage`);
  const resMenu = await fetch(`${process.env.API_ENDPOINT}/menu`);
  const resFooter = await fetch(`${process.env.API_ENDPOINT}/footer`);
  
  const homepage = await resHome.json();
  const menu = await resMenu.json();
  const footer = await resFooter.json();

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
