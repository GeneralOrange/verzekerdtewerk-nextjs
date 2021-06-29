import { fetchAPI } from '../../../lib/api'
import DefaultErrorPage from 'next/error'
import Head from 'next/head'
import Headings from '../../../processing/metaData/Headings'
import HeaderBanner from '../../../components/HeaderBanner'
import Menu from '../../../components/menu/Menu'
import Breadcrumbs from '../../../components/Breadcrumbs'
import PrevNext from '../../../components/PrevNext'
import FlexLayout from '../../../components/FlexLayout'
import Footer from '../../../components/footer/Footer'


export default function JobCosts({ data }){
    if(!data || !data.cost){
        return (
            <>
                <Head>
                    <meta name="robots" content="noindex"/>
                </Head>
                <DefaultErrorPage statusCode={404} />
            </>  
        );
    }
    
    return (
        <>
            <Headings data={data.cost} />
            <Menu data={ data.menu }/>
            <HeaderBanner data={data.cost.header} />
            <Breadcrumbs data={data.cost} pageType={ 'cost' }/>
            <PrevNext data={data.cost} pageType={ 'cost' }/>
            <FlexLayout data={data.cost.flexcontent} sidebar={data.sidebar} />
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

    const jobs = await fetchAPI(`/jobs?slug=${slug}`);
    const jobID = jobs[0].id;

    const rawcostData = await fetchAPI(`/costs?job=${jobID}`);
    const cost = rawcostData[0] ? rawcostData[0] : null;

    const menu = await fetchAPI('/menu');
    
    const footer = await fetchAPI('/footer');

    const rawSidebarData = await fetchAPI('/sidebar');
    const sidebarBoolean = cost ? cost.sidebar : null;

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