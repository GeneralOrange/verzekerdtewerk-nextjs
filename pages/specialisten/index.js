import { fetchAPI } from '../../lib/api'

import { evalBreadcrumbs } from '../../lib/defaultData'
import Headings from '../../processing/metaData/Headings'
import HeaderBanner from '../../components/HeaderBanner'
import Menu from '../../components/menu/Menu'
import Breadcrumbs from '../../components/Breadcrumbs'
import CardLayout from '../../components/CardLayout'
import Footer from '../../components/footer/Footer'

export default function SpecialistCollection({ data }) {
    if(!data){
        return null;
    }

    const breadcrumbData = {
        data: {
            name: 'Specialisten',
            slug: 'specialisten'
        }
    }

    return (
        <>
            <Headings data={ data.specialistsOverview } />
            <Menu data={ data.menu }/>
            <HeaderBanner data={ data.specialistsOverview.header }/>
            <Breadcrumbs data={ evalBreadcrumbs(breadcrumbData) } pageType={ 'page' } />
            <CardLayout data={ data } sidebar={ data.sidebar } uri={ '/specialisten' }/>
            <Footer data={data.footer}/>
        </>
    )
}

export async function getStaticProps() {
    const specialists = await fetchAPI('/specialists?_sort=name:ASC');
    const specialistsOverview = await fetchAPI('/specialists-overview');
    const menu = await fetchAPI('/menu');
    const footer = await fetchAPI('/footer');

    const rawSidebarData = await fetchAPI('/sidebar');
    const sidebarBoolean = true;

    const sidebar = {
        rawSidebarData,
        sidebarBoolean,
    }

    const data = {
        specialistsOverview,
        specialists,
        menu,
        footer,
        sidebar
    }

    return {
        props: {
            data,
        }
    }
}