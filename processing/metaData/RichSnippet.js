import Head from 'next/head'

export default function RichSnippet({ metaFieldData }){
    if(!metaFieldData.rich_snippet){
        return null;
    }

    return (
        <Head>
            <script type="application/ld+json">
                {
                    JSON.stringify(metaFieldData.rich_snippet)
                }
            </script>
        </Head>
    )
}