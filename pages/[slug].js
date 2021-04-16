import Headings from '../processing/Headings'
import HeaderBanner from '../components/HeaderBanner'
import Menu from '../components/Menu'
import FlexLayout from '../components/FlexLayout'
import Footer from '../components/Footer'

export default function Page({ data })
{
    return (
        <>
          <Headings data={data.page.meta_data} />
          <Menu data={ data.menu }/>
          <HeaderBanner data={data.page.header} />
          <FlexLayout data={data.page.flexcontent} sidebar={data.sidebar} />
          <Footer data={data.footer}/>
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
        fallback: 'blocking'
    }
}

export async function getStaticProps({ params }) {
    const { slug } = params;

    const resPage = await fetch(`${process.env.API_ENDPOINT}/pages?slug=${slug}`);
    const rawPageData = await resPage.json();
    const page = rawPageData[0];

    const resMenu = await fetch(`${process.env.API_ENDPOINT}/menu`);
    const menu = await resMenu.json();

    const resFooter = await fetch(`${process.env.API_ENDPOINT}/footer`);
    const footer = await resFooter.json();

    const resSidebar = await fetch(`${process.env.API_ENDPOINT}/sidebar`);
    const rawSidebarData = await resSidebar.json();
    const sidebarBolean = page.sidebar;

    const sidebar = {
        rawSidebarData,
        sidebarBolean,
    }

    const data = {
        page,
        menu,
        sidebar,
        footer
    }

    return {
        props: { data }
    }
}