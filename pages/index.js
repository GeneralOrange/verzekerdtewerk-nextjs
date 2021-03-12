import Head from 'next/head'
import Image from 'next/image';
import styles from '../styles/Home.module.css'

const env = 'http://localhost:1337';

export default function Home({ homepage }) {
  const imagePath = env+homepage.header.image.formats.large.url;
  return (<>
    <Head>
      <title>{homepage.name}</title>
    </Head>
    <div className="container">
      <div className={styles.header}>
        {homepage.header.content}
        <Image src={imagePath} width={homepage.header.image.formats.large.width} height={homepage.header.image.formats.large.height}></Image>
      </div>
    </div>
    
  </>)
}

export async function getStaticProps() {
  
  //get homepage from our api
  const res = await fetch(env+'/homepage');
  
  const homepage = await res.json();

  //console.log(homepage);

  return {
    props: { homepage },
  }
}
