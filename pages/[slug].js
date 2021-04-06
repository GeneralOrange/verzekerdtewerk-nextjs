import Headings from '../processing/Headings'
import HeaderBanner from '../components/HeaderBanner'
import Menu from '../components/Menu'

export default function Page({ data })
{
    return (
        <>
          <Headings data={data.page.meta_data} />
          <Menu data={ data.menu }/>
          <HeaderBanner data={data.page.header} />
        </>
      )
}


export async function getStaticPaths() {
    const res = await fetch(`${process.env.API_ENDPOINT}/pages`);
    const pages = await res.json();

    const paths = pages.map((page) => ({
        params: { slug: page.slug }
    }))

    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    const { slug } = params;

    const res = await fetch(`${process.env.API_ENDPOINT}/pages?slug=${slug}`)
    const rawPageData = await res.json();
    const page = rawPageData[0];

    const resMenu = await fetch(`${process.env.API_ENDPOINT}/menu`);
    const menu = await resMenu.json();

    const data = {
        page,
        menu
    }

    return {
        props: { data }
    }
}