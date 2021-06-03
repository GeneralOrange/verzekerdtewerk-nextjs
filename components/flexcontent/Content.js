import MarkDown from '../../processing/MarkDown'
import styles from '../../styles/flexcontent/Content.module.scss'

export default function Content({ data }){
    if(!data){
        return null;
    }

    return (
        <div className={styles.Content}>
            <MarkDown data={data.content}/>
        </div>
    )
}