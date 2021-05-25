import Head from 'next/head'

export default function MetaField({ content }){
    if(!content){
        return null;
    }

    switch(content.type){
        case 'title':
            return (
                <Head>
                    <title>{ content.content }</title>
                </Head>
            )
            break;
        case 'description':
            return (
                <Head>
                    <meta name="description" content={ content.content } />
                </Head>
            )
            break;
        default: 
            //
            break;
    }
}