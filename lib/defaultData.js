export function evalHeadings({ data }){
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

export function evalHeaderBanner({ data }){
    if(!data){
        return;
    }

    return {
        content : `<h1>Categorie: ${data.category.name}</h1>`
    }
}