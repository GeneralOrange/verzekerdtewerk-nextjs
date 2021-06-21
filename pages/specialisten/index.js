import { fetchAPI } from '../../lib/api'

import { evalHeadings, evalBreadcrumbs } from '../../lib/defaultData'
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
            name : 'Specialisten'
        }
    }

    return (
        <>
            <Headings data={ evalHeadings({ data }) } />
            <Menu data={ data.menu }/>
            <HeaderBanner data={ evalHeaderBanner({ data }) }/>
            <Breadcrumbs data={ evalBreadcrumbs(breadcrumbData) } pageType={ 'page' } />
            <CardLayout data={ data } sidebar={ false } uri={ '/specialisten' }/>
            <Footer data={data.footer}/>
        </>
    )
}

const evalHeaderBanner = ({ data }) => {
    if(!data){
        return;
    }

    return {
        content : `<h1>Specialisten</h1>`
    }
}

export async function getStaticProps() {
    const specialists = await fetchAPI('/specialists');
    const menu = await fetchAPI('/menu');
    const footer = await fetchAPI('/footer');

    const data = {
        specialists,
        menu,
        footer
    }

    return {
        props: {
            data,
        }
    }
}