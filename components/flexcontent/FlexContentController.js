import Content from './Content'
import styles from '../../styles/flexcontent/FlexContent.module.css'

export default function FlexContentController({ data }){
    if(!data){
        return (
            <>
            </>
        )
    }

    let grid = `col-12`;

    return (
        <div className={styles.FlexContent}>    
            <div className="row">
                {data.map((component, index) => (
                    <div key={index} className={`${grid}${component.width ? ` col-lg-${component.width}` : ``}`}>
                        {FlexContentDistrubutor({ component })}
                    </div>
                ))}
            </div>
        </div>
    )
}

function FlexContentDistrubutor({ component }){
    switch(component.__component){
        case 'custom.content':
            return (
                <Content data={ component }/>
            )
            break;
        case 'custom.mailchimp-form':
            return (
                <div>
                    {component.enabled}
                </div>
            )
            break;
        default: 
            return (
                <div>
                    test123
                </div>
            )
            break;
    }
}