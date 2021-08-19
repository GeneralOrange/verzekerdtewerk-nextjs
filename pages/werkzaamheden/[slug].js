import { fetchAPI } from '../../lib/api'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { routerException } from '../../lib/_helpers'
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

    let nextValue = false;
    let enableRouter = routerException(data.job.slug);

    if(data.cost){
        nextValue = true;
    }

    const router = useRouter();

    useEffect(()=> {
        if(nextValue === true && enableRouter === true){
            
            router.push(`${process.env.NEXT_PUBLIC_SITE_URL}/werkzaamheden/${data.job.slug}/kosten/`);
        }
    });
    
    return (
        <>
            <Headings data={data.job} />
            <Menu data={ data.menu }/>
            <HeaderBanner data={data.job.header} asHeader={ true }/>
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
    job.pageType = 'job';
    const jobID = job.id;
    const rawcostData = await fetchAPI(`/costs?job=${jobID}`);
    const cost = rawcostData[0] ? rawcostData[0] : null;

    const menu = await fetchAPI('/menu');
    
    const footer = await fetchAPI('/footer');

    const rawSidebarData = await fetchAPI('/sidebar');
    const sidebarBoolean = job ? job.sidebar : null;

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