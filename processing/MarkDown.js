import unified from '../node_modules/unified'
import markdown from '../node_modules/remark-parse'
import html from '../node_modules/remark-html'

export default function MarkDown({ data }){
    if(!data){
        return null;
    }
    
    var output

    unified()
        .use(markdown)
        .use(html)
        .process(data, function(err, processedData) {
            if (err) throw err
                output = processedData.contents
        })

    return (
        <>  
            <span className="seriousContent" dangerouslySetInnerHTML={{
                __html: output
            }}/>
        </>
    )
    
}