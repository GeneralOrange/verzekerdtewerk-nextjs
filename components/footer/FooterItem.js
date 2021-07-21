import Link from 'next/link'

export default function FooterItem({ component }) {
    if(!component || !component.page && !component.is_category && !component.is_customlink){
        return null;
    }

    let link;

    if(component.page){
        link = `/${component.page.slug}/`;
    }

    if(component.category && component.is_category){
        link = `/categorieen/${component.category.slug}/`;
    }

    if(component.job && component.is_job){
        link = `/werkzaamheden/${component.job.slug}/`;
    }

    if(component.specialist && component.is_specialist){
        link = `/specialisten/${component.specialist.slug}/`;
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