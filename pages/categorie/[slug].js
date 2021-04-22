import { fetchAPI } from '../../lib/api'

import { evalHeadings, evalHeaderBanner } from '../../lib/defaultData'

import Headings from '../../processing/Headings'
import HeaderBanner from '../../components/HeaderBanner'
import Menu from '../../components/Menu'
import CardLayout from '../../components/CardLayout'
import Footer from '../../components/Footer'

export default function Category({ data }){

    return (
        <>
            <Headings data={ evalHeadings({ data }) } />
            <Menu data={ data.menu }/>
            <HeaderBanner data={ evalHeaderBanner({ data }) }/>
            <CardLayout data={ data.category.pages } sidebar={ data.sidebar } />
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
    const sidebarBolean = true;

    const sidebar = {
        rawSidebarData,
        sidebarBolean,
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