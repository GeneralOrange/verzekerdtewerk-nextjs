import { fetchAPI } from '../../lib/api'

import Headings from '../../processing/metaData/Headings'
import HeaderBanner from '../../components/HeaderBanner'
import Menu from '../../components/menu/Menu'
import Breadcrumbs from '../../components/Breadcrumbs'
import FlexLayout from '../../components/FlexLayout'
import Footer from '../../components/footer/Footer'


export default function Specialist({ data }){
    if(!data){
        return null;
    }
    
    return (
        <>
            <Headings data={data.specialist} />
            <Menu data={ data.menu }/>
            <HeaderBanner data={data.specialist.header} />
            <Breadcrumbs data={data.specialist} pageType={ 'specialist' }/>
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
    //const specialistID = specialist.id;

    // const categories = await fetchAPI(`/categories?specialists=${specialistID}`);
    // let relatedspecialists = [];

    // categories.forEach(category => {
    //     category.specialists = category.specialists.filter(specialist => specialist.id !== specialistID);
    //     relatedspecialists.push(...category.specialists);
    // });

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
        menu,
        sidebar,
        footer,
        // relatedspecialists
    }

    return {
        props: { data }
    }
}