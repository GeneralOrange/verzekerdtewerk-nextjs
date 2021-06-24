import { fetchAPI } from '../../lib/api'

import { evalHeadings, evalBreadcrumbs } from '../../lib/defaultData'
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
            <Headings data={ evalHeadings({ data }) } />
            <Menu data={ data.menu }/>
            <HeaderBanner data={ evalHeaderBanner({ data }) }/>
            <Breadcrumbs data={ evalBreadcrumbs(breadcrumbData) } pageType={ 'page' } />
            <CardLayout data={ data } sidebar={ false } uri={ '/categorieen' }/>
            <Footer data={data.footer}/>
        </>
    )
}

const evalHeaderBanner = ({ data }) => {
    if(!data){
        return;
    }

    return {
        content : `<h1>Categorieën</h1>`
    }
}

export async function getStaticProps() {
    const categories = await fetchAPI('/categories');
    const menu = await fetchAPI('/menu');
    const footer = await fetchAPI('/footer');

    const data = {
        categories,
        menu,
        footer
    }

    return {
        props: {
            data,
        }
    }
}