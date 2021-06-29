import { fetchAPI } from '../../lib/api'

import { evalBreadcrumbs } from '../../lib/defaultData'
import Headings from '../../processing/metaData/Headings'
import HeaderBanner from '../../components/HeaderBanner'
import Menu from '../../components/menu/Menu'
import Breadcrumbs from '../../components/Breadcrumbs'
import CardLayout from '../../components/CardLayout'
import Footer from '../../components/footer/Footer'

export default function CategoryCollection({ data }) {
    if(!data){
        return null;
    }

    const breadcrumbData = {
        name: 'Categorieën',
        slug: 'categorieen'
    }

    return (
        <>
            <Headings data={ data.categoriesOverview } />
            <Menu data={ data.menu }/>
            <HeaderBanner data={ data.categoriesOverview.header }/>
            <Breadcrumbs data={ evalBreadcrumbs(breadcrumbData) } pageType={ 'page' } />
            <CardLayout data={ data } sidebar={ data.sidebar } uri={ '/categorieen' }/>
            <Footer data={data.footer}/>
        </>
    )
}

export async function getStaticProps() {
    const categoriesOverview = await fetchAPI('/categories-overview');
    const categories = await fetchAPI('/categories');
    const menu = await fetchAPI('/menu');
    const footer = await fetchAPI('/footer');

    const rawSidebarData = await fetchAPI('/sidebar');
    const sidebarBoolean = true;

    const sidebar = {
        rawSidebarData,
        sidebarBoolean,
    }

    const data = {
        categoriesOverview,
        categories,
        menu,
        sidebar,
        footer
    }

    return {
        props: {
            data,
        }
    }
}