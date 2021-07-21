import unified from '../node_modules/unified'
import remarkGFM from 'remark-gfm'
import markdown from '../node_modules/remark-parse'
import html from '../node_modules/remark-html'
import ReactHtmlParser from 'react-html-parser'

export function HTMLString({ data }){
    if(!data){
        return null;
    }

    let output = ReactHtmlParser(data);

    return output;
}

export default function MarkDown({ data }){
    if(!data){
        return null;
    }
    
    let output

    unified()
        .use(markdown)
        .use(remarkGFM)
        .use(html)
        .process(data, function(err, processedData) {
            if (err) throw err
                output = processedData.contents
        })

    return (
        <>  
            { ReactHtmlParser(output) } 
        </>
    )
    
}