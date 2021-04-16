import Headings from '../../processing/Headings'
import HeaderBanner from '../../components/HeaderBanner'
import Menu from '../../components/Menu'
import CardLayout from '../../components/CardLayout'
import Footer from '../../components/Footer'

export default function CategoryCollection({ data }) {
    if(!data){
        return (
            <>
            </>
        )
    }

    return (
        <>
            <Headings data={ evalHeadings({ data }) } />
            <Menu data={ data.menu }/>
            <HeaderBanner data={ evalHeaderBanner({ data }) }/>
            <CardLayout data={ data.categories } />
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
                name : `Vindt hier alle informatie over categorieën!`,
                sort : `title` 
            },
            {
                name : `description`,
                description : `Vindt hier alle informatie over categorieën!`,
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
        content : `<h1>Categorieën</h1>`
    }
}

export async function getStaticProps() {
    const resCategories = await fetch(`${process.env.API_ENDPOINT}/categories`);
    const resMenu = await fetch(`${process.env.API_ENDPOINT}/menu`);
    const resFooter = await fetch(`${process.env.API_ENDPOINT}/footer`);

    const categories = await resCategories.json();
    const menu = await resMenu.json();
    const footer = await resFooter.json();

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