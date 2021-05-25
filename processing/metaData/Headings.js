import Head from 'next/head'

import RichSnippet from './RichSnippet'
import MetaFields from './MetaFields'
import { siteUrl, evalLinkStructure } from '../../lib/defaultData'

export default function Headings({ data }){
    if(!data){
        return null;
    }

    const linkStructure = evalLinkStructure({ data });
    const link = `${siteUrl}${linkStructure}`;
    const metaFieldData = data.meta_data;

    return (
        <>
            <Head>
                <link rel="shortcut icon" href="/logo.svg"/>
                <meta name="robots" content="index, follow"/>
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"/>
                <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />

                <link rel="canonical" href={ link }/>

                { !metaFieldData && 
                    <title>{`✅ Verzekerdtewerk ✅| ${data.name}`}</title>
                }
                { !metaFieldData && !data.flexcontent &&
                    <meta name="description" content={`✅ Verzekerdtewerk ✅| Voor al uw klussen om en in het huis!`} />
                }
                { !metaFieldData && data.flexcontent &&
                    <meta name="description" content={`✅ Verzekerdtewerk ✅| ${data.flexcontent[0].content}`} />
                } 
            </Head>
            { metaFieldData && metaFieldData.meta_fields && <RichSnippet metaFieldData={ metaFieldData }/> }
            { metaFieldData && metaFieldData.meta_fields && <MetaFields metaFieldData={ metaFieldData }/> }
        </>
    )
   
}