import unified from '../node_modules/unified'
import markdown from '../node_modules/remark-parse'
import html from '../node_modules/remark-html'

const MarkDown = ({ data }) => 
{
    if(!data){
        return;
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
            <div dangerouslySetInnerHTML={{
                __html: output
            }}>
            </div>
        </>
    )
    
}

export default MarkDown;