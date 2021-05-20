import { fetchAPI } from '../lib/api'

import Headings from '../processing/Headings'
import HeaderBanner from '../components/HeaderBanner'
import Menu from '../components/menu/Menu'
import Breadcrumbs from '../components/Breadcrumbs'
import FlexLayout from '../components/FlexLayout'
import CardSlider from '../components/flexcontent/CardSlider'
import Footer from '../components/footer/Footer'


export default function Page({ data })
{
    return (
        <>
          <Headings data={data.page.meta_data} />
          <Menu data={ data.menu }/>
          <HeaderBanner data={data.page.header} />
          <Breadcrumbs data={data.page} />
          <FlexLayout data={data.page.flexcontent} sidebar={data.sidebar} />
          <CardSlider data={data.relatedPages} />
          <Footer data={data.footer}/>
        </>
      )
}


export async function getStaticPaths() {
    const pages = await fetchAPI('/pages');

    const paths = pages.map((page) => ({
        params: { 
            slug: page.slug
        }
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
    const pageID = page.id;

    const categories = await fetchAPI(`/categories?pages=${pageID}`);
    let relatedPages = [];

    categories.forEach(category => {
        category.pages = category.pages.filter(page => page.id !== pageID);
        relatedPages.push(...category.pages);
    });

    const menu = await fetchAPI('/menu');
    
    const footer = await fetchAPI('/footer');

    const rawSidebarData = await fetchAPI('/sidebar');
    const sidebarBoolean = page.sidebar;

    const sidebar = {
        rawSidebarData,
        sidebarBoolean,
    }

    const data = {
        page,
        menu,
        sidebar,
        footer,
        relatedPages
    }

    return {
        props: { data }
    }
}