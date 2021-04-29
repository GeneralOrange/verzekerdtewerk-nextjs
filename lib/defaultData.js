export function evalHeadings({ data }){
    if(!data){
        return;
    }

    return {
        meta_fields : [
            {
                name : `Vindt hier alle informatie over ${data.category ? data.category.name : 'allerlei soorten klussen'}!`,
                sort : `title` 
            },
            {
                name : `description`,
                description : `Vindt hier alle informatie over ${data.category ? data.category.name : 'allerlei soorten klussen'}!`,
                sort : `description` 
            }
        ]    
    }
}

export function evalHeaderBanner({ data }){
    if(!data){
        return;
    }

    return {
        content : `<h1>Categorie: ${data.category ? data.category.name : ''}</h1>`
    }
}

export function evalBreadcrumbs({ data }){
    if(!data){
        return {
            name : `Categorieën`
        }
    }

    return data;
}

export function evalPageType({ data }){
    if(data.pages){
        return 'category';
    } else if(data.categories){
        return 'page';
    }

    return false;
}