import Head from 'next/head'

export function SortMeta( value, index ){
   
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

export function MetaFields({ metaFieldData }){
    if(!metaFieldData.meta_fields){
        return;
    }

    return (
        <>
            {metaFieldData.meta_fields.map((value, index) => (
                SortMeta(value, index)
            ))}
        </>
    )
}

export function RichSnippet({ metaFieldData }){
    if(!metaFieldData.rich_snippet){
        return
    }

    return (
        <>
            <script type="application/ld+json">
                {
                    JSON.stringify(metaFieldData.rich_snippet)
                }
            </script>
        </>
    )
}

export default function Headings({ data }){
    if(!data){
        return null;
    }

    const metaFieldData = data.meta_data;
    
    return (
        <>
            <Head>
                <link rel="shortcut icon" href="/logo.svg"/>
                <meta name="robots" content="index, follow"/>
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"/>

                {/* <link rel="canonical" href={`/${data.slug}/`}></link> */}

                { !metaFieldData && 
                    <title>{`✅ Verzekerdtewerk ✅| ${data.name}`}</title>
                }
                { !metaFieldData && !data.flexcontent &&
                    <meta name="description" description={`✅ Verzekerdtewerk ✅| Voor al uw klussen om en in het huis!`} />
                }
                { !metaFieldData && data.flexcontent &&
                    <meta name="description" description={`✅ Verzekerdtewerk ✅| ${data.flexcontent[0].content}`} />
                }

                { metaFieldData && metaFieldData.meta_fields && MetaFields({ metaFieldData }) } 
                { metaFieldData && metaFieldData.meta_fields && RichSnippet({ metaFieldData }) }
            </Head>
        </>
    )
   
}