import { Nav } from 'react-bootstrap'

export default function MenuItem({ component }) {
    if(!component){
        return null;
    }

    let page_url = `/${component.page.slug}/`;
    let category_url = `/categorie/${component.category.slug}/`;
    let link = page_url;

    if(component.is_category){
        link = category_url;
    }

    return (
        <>
            <Nav.Link href={ link }>{ component.name }</Nav.Link>
        </>
    );
}