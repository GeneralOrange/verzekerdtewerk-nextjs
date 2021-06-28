import { fetchAPI } from '../../../lib/api'

import Headings from '../../../processing/metaData/Headings'
import HeaderBanner from '../../../components/HeaderBanner'
import Menu from '../../../components/menu/Menu'
import Breadcrumbs from '../../../components/Breadcrumbs'
import FlexLayout from '../../../components/FlexLayout'
import Footer from '../../../components/footer/Footer'


export default function SpecialistCosts({ data }){
    if(!data){
        return null;
    }
    
    return (
        <>
            <Headings data={data.cost} />
            <Menu data={ data.menu }/>
            <HeaderBanner data={data.cost.header} />
            <Breadcrumbs data={data.cost} pageType={ 'cost' }/>
            <FlexLayout data={data.cost.flexcontent} sidebar={data.sidebar} />
            <Footer data={data.footer}/>
        </>
      )
}

export async function getStaticPaths() {
    const specialists = await fetchAPI('/specialists');

    const paths = specialists.map((specialist) => ({
        params: {
            slug: specialist.slug
        }
    }))

    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    const { slug } = params;

    const specialist = await fetchAPI(`/specialists?slug=${slug}`);
    const specialistID = specialist[0].id;

    const rawcostData = await fetchAPI(`/costs?specialist=${specialistID}`);
    const cost = rawcostData[0];

    const menu = await fetchAPI('/menu');
    
    const footer = await fetchAPI('/footer');

    const rawSidebarData = await fetchAPI('/sidebar');
    const sidebarBoolean = cost.sidebar;

    const sidebar = {
        rawSidebarData,
        sidebarBoolean,
    }

    const data = {
        cost,
        menu,
        sidebar,
        footer
    }

    return {
        props: { data }
    }
}