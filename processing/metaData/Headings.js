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

    console.log(metaFieldData);

    return (
        <>
            <Head>
                <link rel="shortcut icon" href="/logo.svg"/>
                <meta name="robots" content="index, follow"/>
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"/>

                <link rel="canonical" href={ link }></link>

                { !metaFieldData && 
                    <title>{`✅ Verzekerdtewerk ✅| ${data.name}`}</title>
                }
                { !metaFieldData && !data.flexcontent &&
                    <meta name="description" description={`✅ Verzekerdtewerk ✅| Voor al uw klussen om en in het huis!`} />
                }
                { !metaFieldData && data.flexcontent &&
                    <meta name="description" description={`✅ Verzekerdtewerk ✅| ${data.flexcontent[0].content}`} />
                }

                { metaFieldData && metaFieldData.meta_fields && <MetaFields metaFieldData={ metaFieldData }/> } 
                { metaFieldData && metaFieldData.meta_fields && <RichSnippet metaFieldData={ metaFieldData }/> }
            </Head>
        </>
    )
   
}