import Head from 'next/head'

const MetaFields = ({ data }) => {
    if(!data.meta_fields){
        return;
    }

    var output = [];

    {data.meta_fields.map((value, index) => {
        switch(value.sort){
            case 'title':
                output.push( (
                    <>
                        <title key={index}>{value.name}</title>
                    </>
                ))
                break

            case 'canonical':
                output.push((
                    <>
                        <link key={index} rel={value.name} href={value.description} />
                    </>
                ))
                break

            default:
                output.push((
                    <>
                        <meta key={index} name={value.name} description={value.description} />
                    </>
                ))
                break
        }
    })}
    return output
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
            </Head>
        </>
    )
   
}

export default Headings;