import { fetchAPI } from '../../lib/api'

import Headings from '../../processing/metaData/Headings'
import HeaderBanner from '../../components/HeaderBanner'
import Menu from '../../components/menu/Menu'
import Breadcrumbs from '../../components/Breadcrumbs'
import PrevNext from '../../components/PrevNext'
import FlexLayout from '../../components/FlexLayout'
import Footer from '../../components/footer/Footer'


export default function Specialist({ data }){
    if(!data){
        return null;
    }

    let nextValue = true;

    if(!data.cost){
        nextValue = false;
    }
    
    return (
        <>
            <Headings data={data.specialist} />
            <Menu data={ data.menu }/>
            <HeaderBanner data={data.specialist.header} />
            <Breadcrumbs data={data.specialist} pageType={ 'specialist' }/>
            <PrevNext data={data.specialist} pageType={ 'specialist' } nextValue={ nextValue }/>
            <FlexLayout data={data.specialist.flexcontent} sidebar={data.sidebar} />
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

    const rawspecialistData = await fetchAPI(`/specialists?slug=${slug}`);
    const specialist = rawspecialistData[0];
    const specialistID = specialist.id;

    const rawcostData = await fetchAPI(`/costs?specialist=${specialistID}`);
    const cost = rawcostData[0];

    const menu = await fetchAPI('/menu');
    
    const footer = await fetchAPI('/footer');

    const rawSidebarData = await fetchAPI('/sidebar');
    const sidebarBoolean = specialist.sidebar;

    const sidebar = {
        rawSidebarData,
        sidebarBoolean,
    }

    const data = {
        specialist,
        cost,
        menu,
        sidebar,
        footer
    }

    return {
        props: { data }
    }
}