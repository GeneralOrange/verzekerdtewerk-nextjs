import MarkDown from '../../processing/MarkDown'
import styles from '../../styles/flexcontent/Content.module.css'

export default function Content({ data }){
    if(!data){
        return (
            <>
            </>
        )
    }

    return (
        <div className={styles.Content}>
            <MarkDown data={data.content}/>
        </div>
    )
}