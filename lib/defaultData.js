/**
 * 
 * @param {object} _category 
 * @return {object}
 */

export function evalHeadings({ _category }){
    if(!_category){
        return;
    }

    return {
        data: {
            name: _category ? _category.name : 'Categorieën overzicht',
            meta_data: {
                meta_fields : [
                    {
                        name : `Vindt hier alle informatie over ${_category ? _category.name : 'allerlei soorten klussen'}!`,
                        sort : `title` 
                    },
                    {
                        name : `description`,
                        description : `Vindt hier alle informatie over ${_category ? _category.name : 'allerlei soorten klussen'}!`,
                        sort : `description` 
                    }
                ]
            }  
        }
    }
}

/**
 * 
 * @param {object} data 
 * @return {object}
 */

export function evalHeaderBanner({ data }){
    if(!data){
        return;
    }

    return {
        content : `<h1>Categorie: ${data.category ? data.category.name : ''}</h1>`
    }
}

/**
 * 
 * @param {object} data 
 * @return {object}
 */

export function evalBreadcrumbs({ data }){
    if(!data){
        return {
            name : `Categorieën`
        }
    }

    return data;
}

/**
 * 
 * @param {object} data 
 * @return {string|boolean}
 */

export function evalPageType({ data }){
    if(!data.pageType){
        return false;
    }

    return data.pageType;
}

/**
 * 
 * @param {object} data 
 * @return {string}
 */

export function evalLinkStructure({ data }){
    const pageType = evalPageType({ data });
    
    switch(pageType){
        case 'category':
            return `/categorie/${data.slug}/`;
            break;
        case 'page':
            return `/${data.slug}/`;
            break;
        case 'specialist':
            return `/specialisten/${data.slug}/`;
        case 'job':
            return `/werkzaamheden/${data.slug}/`;
        case 'cost':
            if(data.specialist) return `/specialisten/${data.specialist.slug}/kosten/`;
            if(data.job) return `/werkzaamheden/${data.job.slug}/kosten/`;
        case false:
            return `/`
            break;
        default:
            //
            break;
    }
}

export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://www.example.com';

export function ClassNames(classes){
    return classes
        .join(' ');
}