export default function RichSnippet({ metaFieldData }){
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