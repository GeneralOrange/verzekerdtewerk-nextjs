import Link from 'next/link'

export default function FooterItem({ component }) {
    if(!component || !component.page && !component.is_category && !component.is_customlink){
        return null;
    }

    let page_url;
    let category_url;
    let link;

    if(component.page){
        page_url = `/${component.page.slug}/`;
        link = page_url;
    }

    if(component.category && component.is_category){
        category_url = `/categorie/${component.category.slug}/`;
        link = category_url;
    }

    if(component.custom_link && component.is_customlink){
        link = component.custom_link;
    }

    return (
        <li>
            <Link href={ link }>
                <a>
                    { component.name }
                </a>
            </Link>
        </li>
    );
}