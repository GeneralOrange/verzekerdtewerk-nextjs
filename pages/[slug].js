import { fetchAPI } from '../lib/api'

import Headings from '../processing/metaData/Headings'
import HeaderBanner from '../components/HeaderBanner'
import Menu from '../components/menu/Menu'
import Breadcrumbs from '../components/Breadcrumbs'
import FlexLayout from '../components/FlexLayout'
import Footer from '../components/footer/Footer'


export default function Page({ data }){
    if(!data){
        return null;
    }
    
    return (
        <>
            <Headings data={data.page} />
            <Menu data={ data.menu }/>
            <HeaderBanner data={data.page.header} asHeader={ true }/>
            <Breadcrumbs data={data.page} pageType={'page'} />
            <FlexLayout data={data.page.flexcontent} sidebar={data.sidebar} />
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
    page.pageType = 'page';

    const menu = await fetchAPI('/menu');
    
    const footer = await fetchAPI('/footer');

    const rawSidebarData = await fetchAPI('/sidebar');
    const sidebarBoolean = page ? page.sidebar : null;

    const sidebar = {
        rawSidebarData,
        sidebarBoolean,
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