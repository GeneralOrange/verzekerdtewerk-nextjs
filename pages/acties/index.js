import { fetchAPI } from '../../lib/api'

import { evalBreadcrumbs } from '../../lib/defaultData'
import Headings from '../../processing/metaData/Headings'
import HeaderBanner from '../../components/HeaderBanner'
import Menu from '../../components/menu/Menu'
import Breadcrumbs from '../../components/Breadcrumbs'
import ActionLayout from '../../components/ActionLayout'
import Footer from '../../components/footer/Footer'

export default function ActionCollection({ data }) {
    if(!data){
        return null;
    }

    const breadcrumbData = {
        data: {
            name: 'Acties',
            slug: 'acties'
        }
    }

    return (
        <>
            <Headings data={ data.actionsOverview } />
            <Menu data={ data.menu }/>
            <HeaderBanner data={ data.actionsOverview.header }/>
            <Breadcrumbs data={ evalBreadcrumbs(breadcrumbData) } pageType={ 'page' } />
            <ActionLayout data={ data.actions } sidebar={ data.sidebar }/>
            <Footer data={data.footer}/>
        </>
    )
}

export async function getStaticProps() {
    const actions = await fetchAPI('/actions?_sort=updated_at:ASC');
    const actionsOverview = await fetchAPI('/actions-overview');
    const menu = await fetchAPI('/menu');
    const footer = await fetchAPI('/footer');

    const rawSidebarData = await fetchAPI('/sidebar');
    const sidebarBoolean = true;

    const sidebar = {
        rawSidebarData,
        sidebarBoolean,
    }

    const data = {
        actionsOverview,
        actions,
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