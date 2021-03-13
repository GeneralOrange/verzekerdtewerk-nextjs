import Head from 'next/head'
import HeaderBanner from '../components/HeaderBanner'

export default function Home({ homepage }) {
  
  return (<>
    <Head>
      <title>{homepage.name}</title>
    </Head>
    <HeaderBanner params={homepage.header} />
    
  </>)
}

export async function getStaticProps() {
  
  //get homepage from our api
  const res = await fetch(process.env.API_ENDPOINT+'/homepage');
  
  const homepage = await res.json();

  return {
    props: { homepage },
  }
}
