import { fetchAPI } from '../lib/api'

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
    const pages = await fetchAPI('/pages');

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

    const rawPageData = await fetchAPI(`/pages?slug=${slug}`);
    const page = rawPageData[0];

    const menu = await fetchAPI('/menu');

    const footer = await fetchAPI('/footer');

    const rawSidebarData = await fetchAPI('/sidebar');
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