import Head from 'next/head'

const SortMeta = ( value, index ) => {
   
    switch(value.sort){
        case 'title':

            return (
                <title key={index}>{value.name}</title>
            )    
            break

        case 'canonical':
            return (
                <link key={index} rel={value.name} href={value.description} />
            )
            break

        default:
            return (
                <meta key={index} name={value.name} description={value.description} />
            )
            break
    }
}

const MetaFields = ({ data }) => {
    if(!data.meta_fields){
        return;
    }

    return (
        <>
            {data.meta_fields.map((value, index) => (
                SortMeta(value, index)
            ))}
        </>
    )
}

const RichSnippet = ({ data }) => {
    if(!data.rich_snippet){
        return
    }

    return (
        <>
            <script type="application/ld+json">
                {
                    JSON.stringify(data.rich_snippet)
                }
            </script>
        </>
    )
}

const Headings = ({ data }) => {
    if(!data){
        return (
            <>
            </>
        );
    }
    
    return (
        <>
            <Head>
                { MetaFields({ data }) } 
                { RichSnippet({ data }) }
                <link rel="shortcut icon" href="/logo.svg"/>
            </Head>
        </>
    )
   
}

export default Headings;