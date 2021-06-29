import { fetchAPI } from '../../lib/api'

import Headings from '../../processing/metaData/Headings'
import HeaderBanner from '../../components/HeaderBanner'
import Menu from '../../components/menu/Menu'
import Breadcrumbs from '../../components/Breadcrumbs'
import PrevNext from '../../components/PrevNext'
import FlexLayout from '../../components/FlexLayout'
import Footer from '../../components/footer/Footer'


export default function Job({ data }){
    if(!data){
        return null;
    }

    let nextValue = true;

    if(!data.cost){
        nextValue = false;
    }
    
    return (
        <>
            <Headings data={data.job} />
            <Menu data={ data.menu }/>
            <HeaderBanner data={data.job.header} />
            <Breadcrumbs data={data.job} pageType={ 'job' }/>
            <PrevNext data={data.job} pageType={ 'job' } nextValue={ nextValue }/>
            <FlexLayout data={data.job.flexcontent} sidebar={data.sidebar} />
            <Footer data={data.footer}/>
        </>
      )
}


export async function getStaticPaths() {
    const jobs = await fetchAPI('/jobs');

    const paths = jobs.map((job) => ({
        params: { 
            slug: job.slug
        }
    }))

    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    const { slug } = params;

    const rawjobData = await fetchAPI(`/jobs?slug=${slug}`);
    const job = rawjobData[0];
    const jobID = job.id;
    const rawcostData = await fetchAPI(`/costs?job=${jobID}`);
    const cost = rawcostData[0] ? rawcostData[0] : null;

    const menu = await fetchAPI('/menu');
    
    const footer = await fetchAPI('/footer');

    const rawSidebarData = await fetchAPI('/sidebar');
    const sidebarBoolean = job.sidebar ? job.sidebar : null;

    const sidebar = {
        rawSidebarData,
        sidebarBoolean,
    }

    const data = {
        job,
        cost,
        menu,
        sidebar,
        footer
    }

    return {
        props: { data }
    }
}