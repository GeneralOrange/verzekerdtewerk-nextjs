import Headings from '../../processing/Headings'
import HeaderBanner from '../../components/HeaderBanner'
import Menu from '../../components/Menu'
import CardLayout from '../../components/CardLayout'
import Footer from '../../components/Footer'

export default function Category({ data })
{

    return (
        <>
            <Headings data={ evalHeadings({ data }) } />
            <Menu data={ data.menu }/>
            <HeaderBanner data={ evalHeaderBanner({ data }) }/>
            <CardLayout data={ data.category.pages } sidebar={ data.sidebar } />
            <Footer data={data.footer}/>
        </>
      )
}

const evalHeadings = ({ data }) => {
    if(!data){
        return;
    }

    return {
        meta_fields : [
            {
                name : `Vindt hier alle informatie over ${data.category.name}!`,
                sort : `title` 
            },
            {
                name : `description`,
                description : `Vindt hier alle informatie over ${data.category.name}!`,
                sort : `description` 
            }
        ]    
    }
}

const evalHeaderBanner = ({ data }) => {
    if(!data){
        return;
    }

    return {
        content : `<h1>Categorie: ${data.category.name}</h1>`
    }
}


export async function getStaticPaths() {
    const res = await fetch(`${process.env.API_ENDPOINT}/categories`);
    const categories = await res.json();

    const paths = categories.map((category) => ({
        params: { slug: category.slug }
    }))

    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    const { slug } = params;

    const resCategory = await fetch(`${process.env.API_ENDPOINT}/categories?slug=${slug}`);
    const rawCategoryData = await resCategory.json();
    const category = rawCategoryData[0];

    const resMenu = await fetch(`${process.env.API_ENDPOINT}/menu`);
    const menu = await resMenu.json();

    const resSidebar = await fetch(`${process.env.API_ENDPOINT}/sidebar`);
    const rawSidebarData = await resSidebar.json();
    const sidebarBolean = true;

    const sidebar = {
        rawSidebarData,
        sidebarBolean,
    }

    const resFooter = await fetch(`${process.env.API_ENDPOINT}/footer`);
    const footer = await resFooter.json();

    const data = {
        category,
        menu,
        sidebar,
        footer
    }

    return {
        props: { data }
    }
}