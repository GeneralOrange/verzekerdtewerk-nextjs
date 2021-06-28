import { fetchAPI } from '../../lib/api'

import { evalBreadcrumbs } from '../../lib/defaultData'
import Headings from '../../processing/metaData/Headings'
import HeaderBanner from '../../components/HeaderBanner'
import Menu from '../../components/menu/Menu'
import Breadcrumbs from '../../components/Breadcrumbs'
import CardLayout from '../../components/CardLayout'
import Footer from '../../components/footer/Footer'

export default function JobCollection({ data }) {
    if(!data){
        return null;
    }

    const breadcrumbData = {
        data: {
            name: 'Werkzaamheden',
            slug: 'werkzaamheden'
        }
    }

    return (
        <>
            <Headings data={ data.jobsOverview } />
            <Menu data={ data.menu }/>
            <HeaderBanner data={ data.jobsOverview.header }/>
            <Breadcrumbs data={ evalBreadcrumbs(breadcrumbData) } pageType={ 'page' } />
            <CardLayout data={ data } sidebar={ data.sidebar } uri={ '/werkzaamheden' }/>
            <Footer data={data.footer}/>
        </>
    )
}

export async function getStaticProps() {
    const jobs = await fetchAPI('/jobs');
    const jobsOverview = await fetchAPI('/jobs-overview');
    const menu = await fetchAPI('/menu');
    const footer = await fetchAPI('/footer');

    const rawSidebarData = await fetchAPI('/sidebar');
    const sidebarBoolean = true;

    const sidebar = {
        rawSidebarData,
        sidebarBoolean,
    }

    const data = {
        jobsOverview,
        jobs,
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