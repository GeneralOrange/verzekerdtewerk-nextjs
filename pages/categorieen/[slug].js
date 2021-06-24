import { fetchAPI } from '../../lib/api'

import { evalHeaderBanner } from '../../lib/defaultData'

import Headings from '../../processing/metaData/Headings'
import HeaderBanner from '../../components/HeaderBanner'
import Menu from '../../components/menu/Menu'
import Breadcrumbs from '../../components/Breadcrumbs'
import CardLayout from '../../components/CardLayout'
import Footer from '../../components/footer/Footer'

export default function Category({ data }){

    let categoryHeader = evalHeaderBanner({ data });

    if(data.category.header){
        categoryHeader = data.category.header;
    }

    return (
        <>
            <Headings data={ data.category } />
            <Menu data={ data.menu }/>
            <HeaderBanner data={ categoryHeader } />
            <Breadcrumbs data={ data.category } pageType={ 'category' }/>
            <CardLayout data={ data.category } sidebar={ data.sidebar } />
            <Footer data={data.footer}/>
        </>
      )
}

export async function getStaticPaths() {
    const categories = await fetchAPI('/categories');

    const paths = categories.map((category) => ({
        params: { slug: category.slug }
    }))

    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    const { slug } = params;

    const rawCategoryData = await fetchAPI(`/categories?slug=${slug}`);
    const category = rawCategoryData[0];

    const menu = await fetchAPI('/menu');

    const rawSidebarData = await fetchAPI('/sidebar');
    const sidebarBoolean = true;

    const sidebar = {
        rawSidebarData,
        sidebarBoolean,
    }

    const footer = await fetchAPI('/footer');

    const data = {
        category,
        menu,
        sidebar,
        footer
    }

    return {
        props: { data }
    }
}